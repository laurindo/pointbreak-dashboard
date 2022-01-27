import { request, gql } from 'graphql-request';
import useSWRImmutable from 'swr/immutable';

const query = gql`
  query PriceForSelectedPair($symbol: String!) {
    priceForSymbol(symbol: $symbol) {
      listPriceForSymbol
    }
  }
`;

const fetcher = (query, symbol) =>
  request(process.env.NEXT_PUBLIC_SERVER_URL, query, { symbol });

export default function usePriceSelectedPair(symbol: string) {
  const { data } = useSWRImmutable([query, symbol], fetcher);
  return data?.priceForSymbol?.listPriceForSymbol?.price;
}
