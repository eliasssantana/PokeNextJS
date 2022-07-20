import Image from 'next/image'

import styles from '../../styles/Pokemon.module.css'

export const getStaticPaths = async() =>{
    const maxPokemons = 251
    const api = 'https://pokeapi.co/api/v2/pokemon'

    const pokemonsResponse = await fetch(`${api}/?limit=${maxPokemons}`)
    const pokemonsData = await pokemonsResponse.json()

    //params
    const paths = pokemonsData.results.map((_, index) => {
        return {
            params: {
                pokemonId: (index + 1).toString()
            }
        }
    })

    return {
        paths,
        fallback: true
    }
}

export const getStaticProps = async({params}) =>{
    const {pokemonId} = params;

    const pokemonResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)

    const pokemonData = await pokemonResponse.json();

    return {
        props: {pokemon: pokemonData}
    }
}

export default function Pokemon({pokemon}){
    return(
        <div className={styles.pokemon_container}>
            <h1 className={styles.title}>{pokemon.name}</h1>
            <Image src={`https://cdn.traction.one/pokedex/pokemon/${pokemon.id}.png`}
            width="300"
            height="300"
            alt={pokemon.name}
            />
            <div className={styles.info_container}>
                <h3>Número:</h3>
                <p>#{pokemon.id}</p>
            </div>
            <div>
                <h3>Tipo:</h3>
                <div className={styles.types_container}>
                    {pokemon.types.map((item, index)=> (
                        <span key={index} className={`${styles.type} ${styles[`type_${item.type.name}`]}`}>{item.type.name}</span>
                    ))}
                </div>
            </div>
            <div className={styles.data_container}>
                <div className={styles.data_height}>
                    <h3>Altura:</h3>
                    <p>{pokemon.height * 10} cm</p>
                </div>
                <div className={styles.data_weight}>
                    <h3>Peso:</h3>
                    <p>{pokemon.weight / 10} kg</p>
                </div>
            </div>
        </div>
    )
}