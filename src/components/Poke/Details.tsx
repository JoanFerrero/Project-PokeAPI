import { useContext } from 'react'
import { PokemonContext } from "../../Context/PokemonContext";
import { PokeContextType, Pokemons } from "../../types/pokemon";
import PokeList from './PokeList';
import Table from './TableDetails';

const Details = () => {

  const { pokemon } = useContext(PokemonContext) as PokeContextType;

  return (
    <div className="mt-8 ml-8 mr-8">
      {pokemon.map(
        ({
          name,
          url,
        }: Pokemons) => (
          <>
          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-2 xl:gap-x-8">
            <PokeList name={name} url={url} details={true}/>
            <Table />
          </div>
          </>
        ))}

    </div>
  )
}

export default Details