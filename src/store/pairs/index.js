import { action } from 'easy-peasy';

// Actions
const setSelectedPair = action((state, payload) => {
  state.selectedPair = payload;
});

const setValueSelectedPair = action((state, payload) => {
  state.valueSelectedPair = payload;
});

const setPairs = action((state, payload) => {
  state.pairs = payload;
});

const setFavoritePairs = action((state, payload) => {
  const exists = state.favoritesPairs.some((pair) => pair.pair === payload.pair);
  const newPairs = state.favoritesPairs.filter((pair) => pair.pair !== payload.pair);
  const result = exists ? [...newPairs] : [...state.favoritesPairs, payload];
  state.favoritesPairs = result;
});

const state = {
  favoritesPairs: [],
  setFavoritePairs,

  pairs: [],
  setPairs,

  selectedPair: null,
  setSelectedPair,

  valueSelectedPair: '',
  setValueSelectedPair,
};

export default state;
