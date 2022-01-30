import { useState, useRef, useEffect } from 'react';
import NET from '@/lib/vanta.globe.min';
import * as THREE from 'three';

export default function Background({ width, height, children }) {
  const [vantaEffect, setVantaEffect] = useState(0);

  const vantaRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        NET({
          THREE,
          el: vantaRef.current,
        }),
      );
    }
    return () => {
      if (vantaEffect) setVantaEffect(0);
    };
  }, [vantaEffect]);

  return <div ref={vantaRef}>{children}</div>;
}
