import { useEffect, useState, ReactNode } from "react";
import { PokemonContext } from "./PokemonContext";
import PokemonService from '../services/Pokemon/PokemonService'
import PokeContextType from '../types/pokemon'

interface Props {
  children: ReactNode
}

export const PokemonProvider = ({ children }: Props) => {
  const [pokemons, setPokemons] = useState<Array<PokeContextType>>([])
  const [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState(true);

  const getAllPokemons = (limit = 8) => {
    PokemonService.getAll(limit, offset)
      .then(({data}) => {
        setPokemons(data.results)
      })
  }

  useEffect(() => {
    getAllPokemons(10)
  }, [offset])
  
  return (
    <PokemonContext.Provider value={{pokemons, setPokemons, offset, setOffset, loading, setLoading, getAllPokemons}}>
      {children}
    </PokemonContext.Provider>
  )
}