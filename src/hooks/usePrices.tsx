import { request } from 'graphql-request';
import useSWRImmutable from 'swr/immutable';

const QUERY = `{
  allPrice {
    listAllPrice
  }
}`;

const fetcher = (query) => request(process.env.NEXT_PUBLIC_SERVER_URL, query);

export default function usePrices() {
  const { data } = useSWRImmutable(QUERY, fetcher);
  return data?.allPrice?.listAllPrice;
}
