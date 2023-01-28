import './App.css';
import Header from './components/Header/Header';
import PokeList from './pages/PokePage';
import { PokemonProvider  } from "./Context/PokemonProvider";

function App() {
  return (
    <>
      <PokemonProvider>
        <div className="App">
          <Header />
          <PokeList />
        </div>
      </PokemonProvider>
    </>
  );
}

export default App;
