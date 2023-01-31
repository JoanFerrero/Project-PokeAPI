/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import {DataList} from '../../types/pokemon'
import { useNavigate } from "react-router-dom";
import { FcLike, FcLikePlaceholder } from 'react-icons/fc';
import { useCustomDispatch } from '../../hooks/redux';
import { setLike, setIdDetails } from "../../redux/slice/poke";
import { useState } from 'react';

const PokeList = ({name, url, details, likes}: DataList) => {

  const [heart, setHeart] = useState('FcLikePlaceholder')
  const id = url.split('/').slice(-2)[0]

  const navigate = useNavigate()
  const dispatch = useCustomDispatch();

  const detailsPoke = (id: number) => {
    dispatch(setIdDetails({ idDetail: id}))
    navigate("/detail")
  }

  const addRemovelike = (id: String) => {
//    if(likes.includes({id})){
//      console.log('remove')
      // eslint-disable-next-line no-self-compare
//      likes = likes.filter((id) => id !== id)
//    } else {
//      console.log('add')
//      likes.push({id})
//    }
//    console.log(likes)
//    dispatch(setLike({likesRedux: likes}))
  }

  return (
    <>
      {details === false ? (
        <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a onClick={() => detailsPoke(+url.split('/').slice(-2)[0])}>
              <img className="p-8 rounded-t-lg" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${url.split('/').slice(-2)[0]}.png`} />
          </a>
          <div className="px-5 pb-5">
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{name.toUpperCase()}</h5>
            <div className="flex items-center mt-2.5 mb-5">
              <a onClick={() => setHeart(heart === "FcLikePlaceholder" ? "a" : "FcLikePlaceholder")}>
                {heart === "FcLikePlaceholder" ? <FcLikePlaceholder onClick={() => addRemovelike(id)}/> : <FcLike onClick={() => addRemovelike(id)}/>}
              </a>
            </div>
          </div>
        </div>
      ) : (
        <div className="ml-32  max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a>
              <img className="p-8 rounded-t-lg" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${url.split('/').slice(-2)[0]}.png`} />
          </a>
          <div className="px-5 pb-5">
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{name.toUpperCase()}</h5>
          </div>
        </div>
      )}
    </>
  )
}

export default PokeList