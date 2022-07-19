import Image from 'next/image'

import styles from '../styles/Sobre.module.css'

export default function Sobre(){
    return(
        <div className={styles.about}>
            <h1>Sobre o projeto</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent augue risus, suscipit non condimentum et, tristique in lectus. </p>
            <Image src="/images/charizard.png" width="200" height="200" alt="Charizard"/>
        </div>
    )
}