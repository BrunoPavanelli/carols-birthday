import React, { useEffect, useState } from 'react';
import { Heart, HeartContainer } from './styles';

const HeartsRain = () => {
  const [hearts, setHearts] = useState([]);
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    // Parar de adicionar corações após 250ms
    const rainTimeout = setTimeout(() => {
      setIsRunning(false);
    }, 1000 * 1000 * 1000);

    // Intervalo para gerar corações enquanto isRunning for true
    const interval = setInterval(() => {
      if (!isRunning) return;
      const id = Date.now();
      setHearts((prev) => [
        ...prev,
        { id, left: Math.random() * 100, size: 10 + Math.random() * 20 },
      ]);
      setTimeout(() => {
        setHearts((prev) => prev.filter((h) => h.id !== id));
      }, 4000);
    }, 150); // Quanto menor, mais corações aparecem em 250ms

    return () => {
      clearTimeout(rainTimeout);
      clearInterval(interval);
    };
  }, [isRunning]);

  return (
    <HeartContainer>
      {hearts.map((heart) => (
        <Heart
          key={heart.id}
          style={{
            left: `${heart.left}%`,
            fontSize: `${heart.size}px`,
          }}
        >
          💜
        </Heart>
      ))}
    </HeartContainer>
  );
};

export default HeartsRain;
