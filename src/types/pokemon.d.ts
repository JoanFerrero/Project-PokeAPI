interface Data {
  count: Number;
  next: String;
  previous: String;
  results: [Pokemons];
}

interface Pokemons {
  name: String
  url: String
}

export default interface PokeContextType {
  pokemons: Array<Data>
  getAllPokemons: (value: Array<Data>) => void
}