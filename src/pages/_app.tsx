import { AppProps } from 'next/app';
import dynamic from 'next/dynamic';
import { ChakraProvider } from '@chakra-ui/react';
import { SessionProvider } from 'next-auth/react';
import { StoreProvider } from 'easy-peasy';
import { Web3ReactProvider } from '@web3-react/core';
import getLibrary from '@/utils/getLibrary';
import { theme } from '../styles/theme';

const Web3ProviderNetwork = dynamic(
  () => import('@/components/Web3ProviderNetwork'),
  { ssr: false },
);

import store from '@/store';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <SessionProvider session={pageProps.session}>
        <StoreProvider store={store}>
          <Web3ReactProvider getLibrary={getLibrary}>
            <Web3ProviderNetwork getLibrary={getLibrary}>
              <Component {...pageProps} />
            </Web3ProviderNetwork>
          </Web3ReactProvider>
        </StoreProvider>
      </SessionProvider>
    </ChakraProvider>
  );
}

export default MyApp;
