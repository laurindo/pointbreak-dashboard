import { request, gql } from 'graphql-request';

const query = gql`
  query AccountInfo($email: String!) {
    accountInfo(email: $email) {
      info
    }
  }
`;

export const validateBinanceKey = async (email) => {
  return request(process.env.NEXT_PUBLIC_SERVER_URL, query, { email });
};
