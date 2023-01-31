/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState, useContext } from "react"
import PokeList from "../components/Poke/PokeList"
import TablePoke from "../components/Poke/TablePoke";
import { PokemonContext } from '../Context/PokemonContext';
import { useCustomSelector } from "../hooks/redux";
import {PokeContextType, DataPage} from '../types/pokemon';

const PokePage = () => {

  const [page, setPage] = useState(1)
  const [option, setOption] = useState('Grid') // List
  const { count, setOffset, pokemons } = useContext(PokemonContext) as PokeContextType;

  const onChangePage = (next: number) => {
    if(page + next <= 0) return;
    if(page + next >= (count / 9)) return

    setPage(page + next)
    setOffset(page + next)
  }

  const { poke } = useCustomSelector((state) => state);
  const likes = poke.likes
  
  const detail:boolean = false

  return (
    <>
    <div className={`bg-light dark:bg-black`}>
    <button onClick={() => {option === 'Grid' ? setOption('List') : setOption('Grid')}} className="mt-6 ml-6 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Change Mode</button>
      {option === "Grid" ? (
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
            {pokemons.map(
            ({
              name,
              url,
            }: DataPage) => (
              <>
                <PokeList name={name} url={url} details={detail} likes={likes}/>
              </>
            ))}
          </div>
        </div>
      ):(
        <>
          <TablePoke pokemon={pokemons}/>
        </>
      )}
        <div className="grid justify-items-center">
          <ul className="inline-flex items-center -space-x-px">
            <li>
              <a onClick={() => onChangePage(-1)} className="block px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                <span className="sr-only">Previous</span>
                <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </a>
            </li>
            <li>
              <a className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">{page}</a>
            </li>
            <li>
              <a onClick={() => onChangePage(+1)} className="block px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                <span className="sr-only">Next</span>
                <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
    
  )
}

export default PokePage