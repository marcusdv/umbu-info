import umbuPorEstado from './umbuArr';
import styles from './information.module.css'

export default function InformationBox({ text }: { text: string }) {
    return <div>
        {umbuPorEstado.filter(({estado}) => estado === text)
        .map(({estado, nomePopular, especie, regioesProducao, epocaColheita}) => {

         return  <div className={styles.box} key={estado}>
             <p className='text-3xl'> {estado}</p>
             <p className='text-xl'>Nome Popular: {nomePopular}</p>
             <p className='text-xl'>Espécie: <span className='italic'>{especie}</span></p>
             <p className='text-xl'>Época de Colheita: {epocaColheita}</p>
             <p className='text-xl'>Região de Produção: {regioesProducao.join(' / ')}</p>   
             </div>
        }
         )}
    </div>;
}
