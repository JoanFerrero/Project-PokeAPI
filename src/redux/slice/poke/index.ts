import { createSlice } from "@reduxjs/toolkit";

export interface PokeState{
  mode: string,
  idDetail: String | null,
  likes: Array<likes>
}

const initialState: PokeState = {
  mode: "white",
  idDetail: null,
  likes: [],
}

export interface likes {
  id: String
  name: String
}

const pokeSlice = createSlice({
  name: 'poke',
  initialState,
  reducers: {
    setMode: (state) => {
      state.mode = state.mode === "light" ? "dark": "light"
    },
    setIdDetails: (state, action ) => {
      state.idDetail = action.payload.idDetail
    },
    setLike: (state, action) => {
      state.likes = action.payload.likes;
    }
  },
})

export const { setMode, setIdDetails, setLike} = pokeSlice.actions

export default pokeSlice.reducer