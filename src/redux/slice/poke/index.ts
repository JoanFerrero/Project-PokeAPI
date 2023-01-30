import { createSlice } from "@reduxjs/toolkit";

export interface AuthState{
  mode: string,
  idDetail: String | null,
  likes: Array<Object>
}

const initialState: AuthState = {
  mode: "white",
  idDetail: null,
  likes: [],
}

const authSlice = createSlice({
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
      state.likes = action.payload.data;
    }
  },
})

export const { setMode, setIdDetails, setLike} = authSlice.actions

export default authSlice.reducer