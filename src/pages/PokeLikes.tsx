import PokeList from "../components/Poke/PokeList"
import { useCustomSelector } from "../hooks/redux";
import { DataLikePage } from "../types/pokemon"

const PokeLikes = () => {
  const { poke } = useCustomSelector((state) => state);
  const likes = poke.likes
  const mode = poke.mode
  const pokemons = poke.likes
  
  
  return (
    <>
    <div className={`bg-${mode}`}>
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          {pokemons.map(
          ({
            id,
            name,
          }: DataLikePage) => (
            <>
              <PokeList name={name} url={id} details={false} likes={likes}/>
            </>
          ))}
        </div>
      </div>
    </div>
    </>
    
  )
}

export default PokeLikes