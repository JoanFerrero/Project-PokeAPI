import { useContext } from "react";
import { PokemonContext } from "../../Context/PokemonContext";
import { useCustomSelector } from "../../hooks/redux";
import { PokeContextType, PokeOne } from "../../types/pokemon";

const Table = () => {

  const { ability } = useContext(PokemonContext) as PokeContextType;
  let num = 0

  const { poke } = useCustomSelector((state) => state);
  const mode = poke.mode

  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto">
        <div className="p-1.5 w-full inline-block align-middle">
          <div className="overflow-hidden border rounded-lg">
            <table className={`min-w-full divide-y divide-gray-200 bg-${mode}`}>
              <thead className={`bg-gray-50 ml-6 ${mode === 'dark' ? 'text-white': 'text-gray-400'}`}>
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                  >
                    ABILITY
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                  >
                    Is Hidden
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                  >
                    Slot
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
              {ability.map(
                ({
                  ability,
                  is_hidden,
                  slot
                }: PokeOne) => (
                  <tr>
                  <td className={`px-6 py-4 text-sm font-medium whitespace-nowrap ${mode === 'dark' ? 'text-white': 'text-gray-800'}`}>
                    {num = num +1}
                  </td>
                  <td className={`px-6 py-4 text-sm font-medium whitespace-nowrap ${mode === 'dark' ? 'text-white': 'text-gray-800'}`}>
                  {ability.name}
                  </td>
                  <td className={`px-6 py-4 text-sm font-medium whitespace-nowrap ${mode === 'dark' ? 'text-white': 'text-gray-800'}`}>
                    {is_hidden === true ? "Yes" : "No"}
                  </td>
                  <td className={`px-6 py-4 text-sm font-medium whitespace-nowrap ${mode === 'dark' ? 'text-white': 'text-gray-800'}`}>
                    {slot}
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

export default Table