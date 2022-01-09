import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  // If you want use others color who not Chakra's default
  colors: {
    yellow: {
      '900': 'rgb(252, 213, 53)'
    },
    gray: {
      '900': '#161A1E',
      '800': '#1E2026',
      '700': '#2A2D35',
      '600': '#4B4D63',
      '500': '#616480',
      '400': '#797D9A',
      '300': '#9699B0',
      '200': '#B3B5C6',
      '100': '#D1D2DC',
      '50': '#EEEEF2',
    },
    blue: {
      '500': '#0084EF',
    },
    red: {
      '900': '#2C1E24',
    },
    green: {
      '900': '#152B28',
    },
  },
  fonts: {
    heading: 'Roboto',
    body: 'Roboto',
  },
  styles: {
    global: {
      body: {
        bg: 'gray.900',
        color: 'gray.50',
      },
    },
  },
});
