import Image from 'next/image'

import styles from '../styles/Sobre.module.css'

export default function Sobre(){
    return(
        <div className={styles.about}>
            <h1>Sobre o projeto</h1>
            <p> Projeto feito para os amantes de Pokemon. A partir da lista de pokemons disponível, é possível ver informações detalhadas daquele pokemon, como o tipo, altura, peso. Com tudo isso, você ficará por dentro de tudo relacionado à seu pokemon favorito!</p>
            <Image src="/images/charizard.png" width="400" height="400" alt="Charizard" layout="responsive"/>
        </div>
    )
}