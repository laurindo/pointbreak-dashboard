import { useEffect, useState, useRef } from 'react';

const useTickerPrice = (pairName: string) => {
  const [pair, setPair] = useState(pairName);
  if (pairName != pair) {
    setPair(pairName);
  }
  const [price, setPrice] = useState(null);
  const [isPaused, setPause] = useState(false);
  const ws = useRef(null);

  useEffect(() => {
    ws.current = new WebSocket(process.env.NEXT_PUBLIC_STREAM_BINANCE_URL);
    ws.current.onopen = () => {
      console.log('ws opened');

      ws.current.send(
        JSON.stringify({
          id: 86,
          method: 'GET_PROPERTY',
          params: ['combined'],
        }),
      );

      ws.current.send(
        JSON.stringify({
          id: 1,
          method: 'SUBSCRIBE',
          params: [
            '!miniTicker@arr@3000ms',
            `${pair}@ticker`,
            `${pair}@aggTrade`,
            `${pair}@depth`,
            `${pair}@kline_4h`,
          ],
        }),
      );
    };

    ws.current.onclose = () => {
      console.log('ws closed');
      ws.current.send(
        JSON.stringify({
          id: 1,
          method: 'UNSUBSCRIBE',
          params: [
            '!miniTicker@arr@3000ms',
            `${pair}@ticker`,
            `${pair}@aggTrade`,
            `${pair}@depth`,
            `${pair}@kline_4h`,
          ],
        }),
      );
    };

    const wsCurrent = ws.current;

    return () => {
      wsCurrent.close();
    };
  }, [pair]);

  useEffect(() => {
    if (!ws.current) return;

    ws.current.onmessage = (e) => {
      if (isPaused) return;
      const message = JSON.parse(e.data);
      // console.log(message.data);

      switch (message.stream) {
        case '!miniTicker@arr@3000ms':
          // ...
          break;
        case `${pair}@ticker`:
          // debugger;
          setPrice(message.data);
          break;
        case `${pair}@aggTrade`:
          // ...
          break;
        case `${pair}@depth`:
          // ...
          break;
        case `${pair}@kline_4h`:
          // ...
          break;
      }
    };
  }, [isPaused, pair]);

  return price;
};

export default useTickerPrice;
