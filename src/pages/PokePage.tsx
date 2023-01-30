/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState, useContext } from "react"
import PokeList from "../components/Poke/PokeList"
import { PokemonContext } from '../Context/PokemonContext';
import {PokeContextType, DataPage} from '../types/pokemon';

const PokePage = () => {

  const [page, setPage] = useState(1)
  const { count, setOffset, pokemons } = useContext(PokemonContext) as PokeContextType;

  const onChangePage = (next: number) => {
    if(page + next <= 0) return;
    if(page + next >= (count / 9)) return

    setPage(page + next)
    setOffset(page + next)
  }

  const detail:boolean = false

  return (
    <>
      <div className={`bg-light dark:bg-black`}>
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          {pokemons.map(
          ({
            name,
            url,
          }: DataPage) => (
            <>
              <PokeList name={name} url={url} details={detail}/>
            </>
          ))}
          </div>
        </div>
        <div className="grid justify-items-center">
          <ul className="inline-flex items-center -space-x-px">
            <li>
              <a onClick={() => onChangePage(-1)} className="block px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                <span className="sr-only">Previous</span>
                <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
              </a>
            </li>
            <li>
              <a className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">{page}</a>
            </li>
            <li>
              <a onClick={() => onChangePage(+1)} className="block px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                <span className="sr-only">Next</span>
                <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
    
  )
}

export default PokePage