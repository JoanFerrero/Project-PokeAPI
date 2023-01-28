import { useEffect, useState, ReactNode } from "react";
import { PokemonContext } from "./PokemonContext";
import PokemonService from '../services/Pokemon/PokemonService'
import {PokeContextType, Data} from '../types/pokemon'

interface Props {
  children: ReactNode
}

export const PokemonProvider = ({ children }: Props) => {
  const [pokemons, setPokemons] = useState<Array<Data>>([])
  const [count, setCount] = useState<Data[]>([])
  const [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState(true);

  const getAllPokemons = (limit = 9) => {
    PokemonService.getAll(limit, offset * 9)
      .then(({data}) => {
        setCount(data.count)
        setPokemons(data.results)
      })
  }

  useEffect(() => {
    getAllPokemons()
  }, [offset])
  
  return (
    <PokemonContext.Provider value={{pokemons, offset, setOffset, loading, setLoading, getAllPokemons, count}}>
      {children}
    </PokemonContext.Provider>
  )
}