import React from 'react';
import TradingViewWidget, { Themes } from 'react-tradingview-widget';

export default function TradingChart() {
  return (
    <TradingViewWidget
      symbol="BITSTAMP:BTCUSD"
      theme={Themes.DARK}
      locale="en"
      autosize
    />
  );
}
