import React, { useEffect, useState, useRef, useMemo } from 'react';
import '../styles/css/loader.css';

const CONFETTI_SHAPES = ['circle', 'square', 'triangle', 'heart'] as const;
const CONFETTI_COLORS = ['#FFB6C1', '#FFD700', '#87CEFA', '#FF9494', '#98FB98', '#FFA07A'] as const;
const BALLOON_COLORS = ['#FF9494', '#FFD166', '#06D6A0', '#118AB2'] as const;

type ConfettiShape = (typeof CONFETTI_SHAPES)[number];

interface ConfettiItem {
  key: number;
  shape: ConfettiShape;
  color: string;
  left: number;
  size: number;
  duration: number;
  delay: number;
  rotation: number;
}

interface BalloonItem {
  key: number;
  left: number;
  duration: number;
  delay: number;
  width: number;
  height: number;
  color: string;
}

function Loader(): JSX.Element | null {
  const [progress, setProgress] = useState<number>(0);
  const [exiting, setExiting] = useState<boolean>(false);
  const confettiRef = useRef<HTMLDivElement>(null);

  const confettiItems = useMemo<ConfettiItem[]>(() => {
    return Array.from({ length: 40 }).map((_, i) => {
      const left = Math.random() * 100;
      const size = 5 + Math.random() * 10;
      const duration = 2 + Math.random() * 3;
      const delay = Math.random() * 3;
      const rotation = Math.random() * 360;
      return {
        key: i,
        shape: CONFETTI_SHAPES[i % CONFETTI_SHAPES.length],
        color: CONFETTI_COLORS[i % CONFETTI_COLORS.length],
        left,
        size,
        duration,
        delay,
        rotation,
      };
    });
  }, []);

  const balloonItems = useMemo<BalloonItem[]>(() => {
    return Array.from({ length: 6 }).map((_, i) => {
      const left = 10 + i * 15;
      const duration = 15 + Math.random() * 10;
      const delay = Math.random() * 5;
      const size = 40 + Math.random() * 30;
      const color = BALLOON_COLORS[i % BALLOON_COLORS.length];
      return {
        key: i,
        left,
        duration,
        delay,
        width: size,
        height: size * 1.2,
        color,
      };
    });
  }, []);

  useEffect(() => {
    const totalTime = 2000;
    const start = Date.now();
    const intervalId = window.setInterval(() => {
      const pct = Math.min(100, ((Date.now() - start) / totalTime) * 100);
      setProgress(Math.floor(pct));
      if (pct >= 100) {
        window.clearInterval(intervalId);
        const timeoutId = window.setTimeout(() => setExiting(true), 300);
        return () => window.clearTimeout(timeoutId);
      }
    }, 50);

    return () => window.clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (progress === 100 && confettiRef.current) {
      confettiRef.current.classList.add('confetti-explosion');
      const timeoutId = window.setTimeout(() => setProgress(0), 1000);
      return () => window.clearTimeout(timeoutId);
    }
  }, [progress]);

  if (exiting && progress === 0) {
    return null;
  }

  return (
    <div className={`loader-container ${exiting ? 'loader-exit' : ''}`}>
      <div className="loader-background" />

      <div className="confetti-container" ref={confettiRef}>
        {confettiItems.map(item => (
          <div
            key={item.key}
            className={`confetti ${item.shape}`}
            style={
              {
                '--left': `${item.left}%`,
                '--size': `${item.size}px`,
                '--duration': `${item.duration}s`,
                '--delay': `${item.delay}s`,
                '--rotation': `${item.rotation}deg`,
                backgroundColor: item.color,
              } as React.CSSProperties
            }
          />
        ))}
      </div>

      <div className="balloon-container">
        {balloonItems.map(b => (
          <div
            key={b.key}
            className="balloon"
            style={
              {
                '--left': `${b.left}%`,
                '--duration': `${b.duration}s`,
                '--delay': `${b.delay}s`,
                '--width': `${b.width}px`,
                '--height': `${b.height}px`,
                backgroundColor: b.color,
              } as React.CSSProperties
            }
          >
            <div className="balloon-string" />
          </div>
        ))}
      </div>

      <div className="loader-content">
        <div className="loader-image-container">
          <img className="loader-image" src="/margarita.gif" alt="Loading" loading="lazy" />
        </div>
        <div className="loader-text-container">
          <h1 className="loader-title">¡Galia cumple 1 añito!</h1>
          <p className="loader-subtitle">Cargando invitación...</p>
        </div>
        <div className="loader-progress-container">
          <div className="loader-progress">
            <div className="loader-progress-bar" style={{ width: `${progress}%` }} />
          </div>
          <div className="loader-progress-text">{progress}%</div>
        </div>
      </div>
    </div>
  );
}

export default Loader;
