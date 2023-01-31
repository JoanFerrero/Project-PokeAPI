/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import {DataList} from '../../types/pokemon'
import { useNavigate } from "react-router-dom";
import { FcLike, FcLikePlaceholder } from 'react-icons/fc';
import { useCustomDispatch, useCustomSelector } from '../../hooks/redux';
import { setLike, setIdDetails } from "../../redux/slice/poke";
import { useState, useEffect } from 'react';


const PokeList = ({name, url, details, likes}: DataList) => {

  const [heart, setHeart] = useState('FcLikePlaceholder')
  
  const id = url.split('/').slice(-2)[0]

  const navigate = useNavigate()
  const dispatch = useCustomDispatch();

  const detailsPoke = (id: number) => {
    dispatch(setIdDetails({ idDetail: id}))
    navigate("/detail")
  }

  const addLike = (id: string) => {
    if(likes !== undefined) {
      likes = [...likes, {id, name}]
      dispatch(setLike({ likes }))
    }
  }
  const removeLike = (id: string) => {
    if(likes !== undefined) {
      likes = likes.filter(e => e.id !== id)
      dispatch(setLike({ likes }))
    }
  }

  useEffect(() => {
    if(likes !== undefined) {
      if(likes.find(e => e.id === id)) {
        setHeart('a')
      } else {
        setHeart("FcLikePlaceholder")
      }
    }
  }, [id])

  const { poke } = useCustomSelector((state) => state);
  const mode = poke.mode

  return (
    <>
      {details === false ? (
        <div className={`w-full max-w-sm bg-${mode} border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700`}>
          <a onClick={() => detailsPoke(+url.split('/').slice(-2)[0])}>
              <img className="p-8 rounded-t-lg" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`} />
          </a>
          <div className="px-5 pb-5">
            <h5 className={`text-xl font-semibold tracking-tight ${mode === 'dark' ? 'text-white': 'text-gray-900'}`}>{name.toUpperCase()}</h5>
            <div className="flex items-center mt-2.5 mb-5">
              <a onClick={() => setHeart(heart === "FcLikePlaceholder" ? "a" : "FcLikePlaceholder")}>
                {heart === "FcLikePlaceholder" ? <FcLikePlaceholder onClick={() => addLike(id)}/> : <FcLike onClick={() => removeLike(id)}/>}
              </a>
            </div>
          </div>
        </div>
      ) : (
        <div className={`ml-32  max-w-sm bg-${mode} border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700`}>
          <a>
              <img className="p-8 rounded-t-lg" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${url.split('/').slice(-2)[0]}.png`} />
          </a>
          <div className="px-5 pb-5">
            <h5 className={`text-xl font-semibold tracking-tight ${mode === 'dark' ? 'text-white': 'text-gray-900'}`}>{name.toUpperCase()}</h5>
          </div>
        </div>
      )}
    </>
  )
}

export default PokeList