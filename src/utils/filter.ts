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
  pair: String;
  lastPrice: String;
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
      const res = tokens.find((token: Token) => token.symbol === symbol.name);
      // debugger;
      return {
        ...symbol,
        ...res,
        pair: `${symbol.baseAsset}/${symbol.quoteAsset}`,
      };
    });
  }, [tokens, symbols]);
}
