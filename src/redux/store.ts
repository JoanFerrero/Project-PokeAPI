import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer} from 'redux-persist'
import storage from "redux-persist/lib/storage";
import pokeReducer from './slice/poke'

const persistAuthConfig = {
  key: 'poke',
  storage,
  whitelist: ['mode','idDetail', 'likes']
}

export const store = configureStore({
  reducer: {
    poke: persistReducer<ReturnType<typeof pokeReducer>>(persistAuthConfig, pokeReducer)
  },
  middleware: (defaultMiddleware) => defaultMiddleware({
    serializableCheck: false
  })
})

export type RootState = ReturnType<typeof store.getState>
export type Dispatch = typeof store.dispatch

export const persistor = persistStore(store)

export default store