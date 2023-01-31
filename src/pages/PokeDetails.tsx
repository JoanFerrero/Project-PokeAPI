import { useContext, useEffect } from "react"
import PokeDetail from "../components/Poke/Details"
import { PokemonContext } from "../Context/PokemonContext";
import { useCustomSelector } from "../hooks/redux";
import { PokeContextType } from "../types/pokemon";

const PokeDetails = () => {

  const { poke } = useCustomSelector((state) => state);
  const { getOnePokemon } = useContext(PokemonContext) as PokeContextType;

  useEffect(()=> {
    getOnePokemon(poke.idDetail)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <PokeDetail />
  )
}

export default PokeDetails