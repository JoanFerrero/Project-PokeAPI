/* eslint-disable jsx-a11y/alt-text */
import { useCustomSelector } from '../../hooks/redux';
import { DataTablePokemons, DataPage } from "../../types/pokemon"

const TablePoke = (pokemon : DataTablePokemons) => {

  const { poke } = useCustomSelector((state) => state);
  const mode = poke.mode
  
  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto">
        <div className="p-1.5 w-full inline-block align-middle">
          <div className="overflow-hidden border rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className={`bg-gray-50 ml-6 ${mode === 'dark' ? 'text-white': 'text-gray-400'}`}>
                <tr>
                  <th scope="col" className={`px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase `}>
                    PokePage
                  </th>
                  <th scope="col" className={`px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase `}>
                    Name
                  </th>
                  <th scope="col" className={`px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase `}>
                    Image
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
              {pokemon.pokemon.map(
                ({
                  name,
                  url
                }: DataPage) => (
                  <tr>
                    <td className={`px-6 py-4 text-sm font-medium whitespace-nowrap ${mode === 'dark' ? 'text-white': 'text-gray-800'}`}>
                      {url.split('/').slice(-2)[0]}
                    </td>
                    <td className={`px-6 py-4 text-sm font-medium whitespace-nowrap ${mode === 'dark' ? 'text-white': 'text-gray-800'}`}>
                      {name}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                      <img className="w-10 h-10 rounded-full" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${url.split('/').slice(-2)[0]}.png`} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TablePoke