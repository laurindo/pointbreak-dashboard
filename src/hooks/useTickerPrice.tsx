import { useEffect, useState, useRef } from 'react';

const useTickerPrice = (pair: string) => {
  const [price, setPrice] = useState(null);
  const [isPaused, setPause] = useState(false);
  const ws = useRef(null);

  useEffect(() => {
    ws.current = new WebSocket(
      `wss://stream.binance.com:9443/ws/${pair}@miniTicker`,
    );
    ws.current.onopen = () => console.log('ws opened');
    ws.current.onclose = () => console.log('ws closed');

    const wsCurrent = ws.current;

    return () => {
      wsCurrent.close();
    };
  }, []);

  useEffect(() => {
    if (!ws.current) return;

    ws.current.onmessage = (e) => {
      if (isPaused) return;
      const message = JSON.parse(e.data);
      console.log(message);
      setPrice(message);
    };
  }, [isPaused]);

  return price;
};

export default useTickerPrice;
