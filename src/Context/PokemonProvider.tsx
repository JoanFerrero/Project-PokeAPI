import { useEffect, useState, ReactNode } from "react";
import { PokemonContext } from "./PokemonContext";
import PokemonService from '../services/Pokemon/PokemonService'
import { Data} from '../types/pokemon'

interface Props {
  children: ReactNode
}

export const PokemonProvider = ({ children }: Props) => {
  const [pokemons, setPokemons] = useState<Array<Data>>([])
  const [count, setCount] = useState<Data[]>([])
  const [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState(true);

  const getAllPokemons = (limit = 9) => {
    setLoading(false)
    PokemonService.getAll(limit, offset * 9)
      .then(({data}) => {
        setCount(data.count)
        setPokemons(data.results)
        setTimeout(() => {
          setLoading(true)
        }, 500);
      })
  }

  useEffect(() => {
    getAllPokemons()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [offset])
  
  return (
    <PokemonContext.Provider value={{pokemons, offset, setOffset, loading, getAllPokemons, count}}>
      {children}
    </PokemonContext.Provider>
  )
}