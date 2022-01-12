import { action } from 'easy-peasy';

// Actions
const toggleWalletModal = action((state, payload) => {
  state.isOpenModal = !payload;
});

const setOpenWalletModal = action((state) => {
  state.isOpenModal = true;
});

const setCloseWalletModal = action((state) => {
  state.isOpenModal = false;
});

const state = {
  isOpenModal: false,
  toggleWalletModal,
  setCloseWalletModal,
  setOpenWalletModal,
};

export default state;
