export interface Data  {
  count: number;
  next: String;
  previous: String;
  results: Pokemons[];
}

export interface Pokemon {
  id: number
  name: string
  growth_time: number
  max_harvest: number
  natural_gift_power: number
  size: number
  smoothness: number
  soil_dryness: number
  firmness: Array<Pokemons>
  flavors: Array<flavors>
}

export interface flavors {
  potency: number
  flavor: object
}

export interface Pokemons {
  name: String
  url: String
}

export interface PokeContextType {
  count: number
  pokemons: Array<Pokemons>
  pokemon: Array<DataPage>
  ability: Array<PokeOne>
  getAllPokemons: (value: Array<Data>) => void
  offset: number
  setOffset:(value: number) => void
  loading: boolean
  setLoading: (value: boolean) => void
  getOnePokemon: (value: Array) => void
}

export interface DataList {
  name: String
  url: String
  details: Boolean
  likes? : Object[]
}

export interface DataPage {
  name: String
  url: String
}

// Interface One Pokemon //

export interface PokeOne {
  ability: DataPage;
  is_hidden: boolean;
  slot:      number;
}

