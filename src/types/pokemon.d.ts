export interface Data  {
  count: number;
  next: String;
  previous: String;
  results: Pokemons[];
}

export interface Pokemons {
  name: String
  url: String
}

export interface PokeContextType {
  count: number
  pokemons: Array<Pokemons>
  getAllPokemons: (value: Array<Data>) => void
  offset: number
  setOffset:(value: number) => void
  loading: boolean
  setLoading: (value: boolean) => void
}