import './App.css';
import Header from './components/Header/Header';
import PokeList from './pages/PokePage';

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <PokeList />
      </div>
    </>
  );
}

export default App;
