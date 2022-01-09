import { action } from 'easy-peasy'

// Actions
const setSelectedPair = action((state, payload) => {
  state.selectedPair = payload
})

const setPairs = action((state, payload) => {
  state.pairs = payload
})

const setFavoritePairs = action((state, payload) => {
  debugger
  const exists = state.favoritesPairs.some((pair) => pair === payload)
  const newPairs = state.favoritesPairs.filter((pair) => pair !== payload)
  const result = exists ? [...newPairs] : [...state.favoritesPairs, payload]
  state.favoritesPairs = result
})

const state = {
  favoritesPairs: [],
  setFavoritePairs,

  pairs: [],
  setPairs,

  selectedPair: null,
  setSelectedPair,
}

export default state
