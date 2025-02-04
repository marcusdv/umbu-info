'use client'; // Indica que este arquivo é executado no lado do cliente, necessário em projetos Next.js com renderização do cliente

import { AppWrapper, useAppContext } from './context/contextFile';
import InformationBox from './components/InformationBox/InformationBox';
import Map from './components/Map/Map';


// Componente principal da página
export default function Home() {
    return (
        // Envolvemos a aplicação com o contexto AppWrapper
        <AppWrapper>
            <HomeContent />
        </AppWrapper>
    );
}

// Componente separado para consumir o contexto
function HomeContent() {
    // Hook que acessa o estado e função do contexto
    const { state } = useAppContext();

    return (
        <div className='m-auto'>
            <h1 className='text-center text-4xl m-6 '>Umbu - Informações sobre a fruta por estados brasileiros</h1>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(600px,1fr))] p-8 mx-auto ">
                {/* Componente de mapa */}
                <div className='mx-auto'>
                    <Map />
                </div>
                {/* Exibe o valor de `text` do estado atual do contexto */}
                <div className="self-end mx-auto">
                    <InformationBox text={state.text} />
                </div>
            </div>
        </div>
    );
}
