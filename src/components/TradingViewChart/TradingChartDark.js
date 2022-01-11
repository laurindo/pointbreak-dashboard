import React, { useState, useEffect } from 'react';
import TradingViewWidget, { Themes } from 'react-tradingview-widget';
import { useRouter } from 'next/router';

export default function TradingChart() {
  const router = useRouter();
  const [pair, setPair] = useState('BTCUSDT');

  useEffect(() => {
    if (router?.query?.pair) {
      setPair(router.query.pair.replace('_', ''));
    }
  }, [router]);

  return (
    <TradingViewWidget
      symbol={`${pair}`}
      theme={Themes.DARK}
      locale="en"
      autosize
    />
  );
}
