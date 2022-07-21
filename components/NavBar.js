import Link from 'next/link'
import Image from 'next/image'

import styles from '../styles/NavBar.module.css'


export default function NavBar(){
    return(
            <nav className={styles.navbar}>
                <div className={styles.logo}>
                    <Link href="/">
                        <Image src="/images/pokeball.png" alt="pokeball image" width="50" height="50" layout="responsive"/>
                    </Link>
                    <Link href="/">
                        <h1>PokeNext</h1>
                    </Link>
                </div>
                <ul className={styles.link_items}>
                    <li>
                        <Link href="/"><a>Home</a></Link>
                    </li>
                    <li>
                        <Link href="/sobre"><a>Sobre</a></Link>
                    </li>
                </ul>
            </nav>
    )
}