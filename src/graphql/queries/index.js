import { gql } from '@apollo/client'

export const CURRENT_ORDER = gql`
  query {
    currentOrder {
      bids
      asks
    }
  }
`

export const GET_ALL_USERS = gql`
  query {
    allListUser {
      id
      name
      email
    }
  }
`

export const RECENT_TRADE_LIST = gql`
  query {
    recentTradeList {
      list
    }
  }
`

export const ALL_PRICE = gql`
  query {
    allPrice {
      listAllPrice
    }
  }
`

export const CURRENT_PRICE_FOR_SYMBOL = gql`
  query ($symbol: String!) {
    priceForSymbol(symbol: $symbol) {
      listPriceForSymbol
    }
  }
`

export const BALANCE_ACCOUNT = gql`
  query {
    accountInfo {
      info
    }
  }
`
