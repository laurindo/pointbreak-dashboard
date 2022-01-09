import { useMemo } from 'react';

type Symbol = {
  baseAsset: String;
  id: String;
  name: String;
  quoteAsset: String;
};

type Token = {
  price: String;
  symbol: String;
};

type ResponseJoinSymbols = {
  baseAsset: String;
  id: String;
  name: String;
  quoteAsset: String;
  price: String;
  symbol: String;
};

export function joinSymbols(tokens = [], symbols: []): ResponseJoinSymbols[] {
  return useMemo(() => {
    if (!tokens || tokens.length === 0) {
      return [];
    }
    if (!symbols || symbols.length === 0) {
      return [];
    }
    return symbols.map((symbol: Symbol) => {
      return {
        ...symbol,
        ...tokens.find((token: Token) => token.symbol === symbol.name),
      };
    });
  }, [tokens, symbols]);
}
