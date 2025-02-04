import { createContext, useState, useContext, ReactNode } from 'react';

// Define o tipo para armazenar os dados do path clicado
type ContextPath = {
  id: string;
  d: string;
  text: string;
};

// Define o tipo para o contexto, incluindo o estado e a função de atualização
type AppContextType = {
  state: ContextPath;
  setCurrentPath: (path: ContextPath) => void;
};

// Criação do contexto, com valor inicial indefinido para melhor controle tipado
const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppWrapper({ children }: { children: ReactNode }) {
  // Estado para armazenar o path clicado
  const [state, setState] = useState<ContextPath>({
    id: '',
    d: '',
    text: '',
  });

  // Função para atualizar o estado do contexto
  const setCurrentPath = (path: ContextPath) => {
    setState(path); // Atualiza diretamente o estado com o novo path
  };

  return (
    // Corrigido: `Provider` agora recebe um objeto `{ state, setCurrentPath }`
    <AppContext.Provider value={{ state, setCurrentPath }}>
      {children}
    </AppContext.Provider>
  );
}

// Hook personalizado para acessar o contexto
export function useAppContext() {
  // Corrigido: verifica se o contexto existe antes de retornar
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppWrapper');
  }
  return context;
}
