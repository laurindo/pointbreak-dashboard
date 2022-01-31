import { useState, useRef, useEffect } from 'react';
import * as THREE from 'three';

import NET from '@/lib/vanta.globe.min';

export default function BackgroundAnimated({ width, height, children }) {
  const [vantaEffect, setVantaEffect] = useState(0);

  const vantaRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        NET({
          THREE,
          el: vantaRef.current,
          backgroundColor: '#161A1E',
          color: '#0084EF',
          points: 20.0,
        }),
      );
    }
    return () => {
      if (vantaEffect) setVantaEffect(0);
    };
  }, [vantaEffect]);

  return <div ref={vantaRef}>{children}</div>;
}
