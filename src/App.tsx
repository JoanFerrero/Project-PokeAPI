import React, { Suspense } from 'react';
import './App.css';
import Header from './components/Header/Header';
import { PokemonProvider  } from "./Context/PokemonProvider";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  const PokeList = React.lazy(() => import('./pages/PokePage'))
  const PokeDetails = React.lazy(() => import('./pages/PokePage'))

  return (
    <>
      <Suspense fallback={true}>
        <PokemonProvider>
          <div className="App">
            <Header />
            <BrowserRouter>
            <Routes>
              <Route path='/' element={<PokeList />} />
              <Route path='/detail/:id' element={<PokeDetails />} />
            </Routes>
            </BrowserRouter>
          </div>
        </PokemonProvider>
      </Suspense>
    </>
  );
}

export default App;
