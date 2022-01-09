import { request } from 'graphql-request';
import useSWR from 'swr';

const QUERY = `{
  allPrice {
    listAllPrice
  }
}`;

const fetcher = (query) => request(process.env.NEXT_PUBLIC_SERVER_URL, query);

export default function usePrices() {
  const { data } = useSWR(QUERY, fetcher);
  return data?.allPrice?.listAllPrice;
}
