import { createSlice } from '@reduxjs/toolkit'

const testReducer = createSlice({
   name: 'test',
   initialState: {
      popular: {},
      image: {},
      person: {},
      nowPlaying: {},
      film: {},
      token: {},
      findValue: "",
      foundFilm: {},
   },
   reducers: {
      setPopular: (state, { payload }) => {
         state.popular = payload
      },
      setNowPlaying: (state, { payload }) => {
         state.nowPlaying = payload
      },
      setImage: (state, { payload }) => {
         state.image[payload.id] = payload
      },
      setPerson: (state, { payload }) => {
         state.person[payload.id] = payload
      },
      setFilm: (state, { payload }) => {
         state.film[payload.id] = payload
      },
      setToken: (state, { payload }) => {
         state.token = payload
      },
      setFindValue: (state, { payload }) => {
         state.findValue = payload
      },
      setFoundFilm: (state, { payload }) => {
         state.foundFilm = payload
      },
   },
})

export const { setPopular, setImage, setNowPlaying, setFilm, setPerson, setToken, setUser, setFindValue, setFoundFilm, setHeaderSearchButton } = testReducer.actions
export const selectPopular = (state) => state.testReducer.popular
export const selectNowPlaying = (state) => state.testReducer.nowPlaying
export const selectImage = (state, id) => state.testReducer.image[id]
export const selectPerson = (state, id) => state.testReducer.person[id]
export const selectFilm = (state, id) => state.testReducer.film[id]
export const selectToken = (state) => state.testReducer.token
export const selectFindValue = (state) => state.testReducer.findValue
export const selectFoundFilm = (state) => state.testReducer.foundFilm

export default testReducer.reducer
