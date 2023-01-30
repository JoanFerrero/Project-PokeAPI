import React, { Suspense } from 'react';
import './App.css';
import Header from './components/Header/Header';
import { Provider } from 'react-redux';
import store, { persistor }from "./redux/store"
import { PokemonProvider  } from "./Context/PokemonProvider";
import { PersistGate } from 'redux-persist/lib/integration/react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  const PokeList = React.lazy(() => import('./pages/PokePage'))
  const PokeDetails = React.lazy(() => import('./pages/PokeDetails'))

  return (
    <>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Suspense fallback={true}>
          <PokemonProvider>
            <div className="App">
              <Header />
              <BrowserRouter>
              <Routes>
                <Route path='/' element={<PokeList />} />
                <Route path='/detail' element={<PokeDetails />} />
              </Routes>
              </BrowserRouter>
            </div>
          </PokemonProvider>
        </Suspense>
      </PersistGate>
    </Provider>
    </>
  );
}

export default App;
