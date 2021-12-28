import { gql } from '@apollo/client'

export const SIGN_UP = gql`
  mutation newUser($email: String!, $name: String!) {
    newUser(email: $email, name: $name) {
      id
      name
      email
    }
  }
`

export const NEW_ORDER = gql`
  mutation createNewOrder(
    $limit: String
    $price: String
    $quantity: Decimal
    $symbol: String
    $timeInForce: String
    $type: Enum
  ) {
    createNewOrder(
      limit: $limit
      price: $price
      quantity: $quantity
      symbol: $symbol
      timeInForce: $timeInForce
      type: $type
    ) {
      limit
      price
      quantity
      symbol
      timeInForce
      type
    }
  }
`
