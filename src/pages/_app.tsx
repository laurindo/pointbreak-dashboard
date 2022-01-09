import { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { StoreProvider } from 'easy-peasy';
import { theme } from '../styles/theme';

import store from '@/store';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <StoreProvider store={store}>
        <Component {...pageProps} />
      </StoreProvider>
    </ChakraProvider>
  );
}

export default MyApp;
