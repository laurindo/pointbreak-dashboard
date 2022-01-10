import { action, createStore, persist } from 'easy-peasy';
import StatePairs from './pairs';

const store = createStore(
  persist({
    ...StatePairs,
    query: '',
    setQuery: action((state, payload) => {
      state.query = payload;
    }),
  }),
);

export default store;
