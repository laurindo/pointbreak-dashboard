import { action, createStore, persist } from 'easy-peasy';
import StatePairs from './pairs';
import StateModals from './modals';

const store = createStore(
  persist({
    ...StatePairs,
    ...StateModals,
    query: '',
    setQuery: action((state: any, payload) => {
      state.query = payload;
    }),
  }),
);

export default store;
