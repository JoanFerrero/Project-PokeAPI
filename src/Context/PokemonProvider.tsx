import { useEffect, useState, ReactNode } from "react";
import { PokemonContext } from "./PokemonContext";
import PokemonService from '../services/Pokemon/PokemonService'
import { Data, PokeOne, DataPage } from '../types/pokemon'

interface Props {
  children: ReactNode
}

export const PokemonProvider = ({ children }: Props) => {
  const [pokemons, setPokemons] = useState<Array<Data>>([])
  const [pokemon, setPokemon] = useState<Array<PokeOne>>([])
  const [ability, setAbility] = useState<Array<DataPage>>([])
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

  const getOnePokemon = (id: string) => {
    PokemonService.getOne(id)
      .then(({data}) => {
        setPokemon(data.forms)
        setAbility(data.abilities)
      })
  }

  useEffect(() => {
    getAllPokemons()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [offset])
  
  return (
    <PokemonContext.Provider value={{pokemons, offset, setOffset, loading, getAllPokemons, getOnePokemon, count, pokemon, ability}}>
      {children}
    </PokemonContext.Provider>
  )
}