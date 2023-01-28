import Api from "../Api"

const getAll = (limit: number, offset: number) => {
  return Api().get(`?limit=${limit}&offset=${offset}`)
}

const getOne = (id: string) => {
  return Api().get(`/pokemon/${id}`)
}

const PokemonService = {
  getAll,
  getOne
}

export default PokemonService