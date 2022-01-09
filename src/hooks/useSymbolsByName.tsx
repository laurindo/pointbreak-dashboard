import { request, gql } from 'graphql-request';
import useSWR from 'swr';

const query = gql`
  query ExampleQuery($symbol: String!) {
    listSymbolsByName(symbol: $symbol) {
      symbols
    }
  }
`;

const fetcher = (query, symbol) =>
  request(process.env.NEXT_PUBLIC_SERVER_URL, query, { symbol });

export default function useSymbolsByName(symbol: string) {
  const { data } = useSWR([query, symbol], fetcher);
  return data?.listSymbolsByName?.symbols;
}
