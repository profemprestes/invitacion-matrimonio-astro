import React, { useEffect, useState, useRef } from 'react';
import '../styles/loader.css';

function Loader() {
    const [loading, setLoading] = useState(true);
    const [progress, setProgress] = useState(0);
    const [animationComplete, setAnimationComplete] = useState(false);
    const confettiRef = useRef(null);
    const [confettiElements, setConfettiElements] = useState([]);
    const [balloonElements, setBalloonElements] = useState([]);

    useEffect(() => {
        // Preload critical assets
        const preloadImages = ['/margarita.gif', '/herogalia.gif', '/cake.svg'];
        preloadImages.forEach(src => {
            const img = new Image();
            img.src = src;
        });

        // Simulación de carga más realista
        let startTime = Date.now();
        const totalDuration = 2000;

        const interval = setInterval(() => {
            const elapsedTime = Date.now() - startTime;
            const progressPercentage = Math.min(100, Math.floor((elapsedTime / totalDuration) * 100));
            setProgress(progressPercentage);

            if (progressPercentage >= 100) {
                clearInterval(interval);
                setTimeout(() => {
                    setAnimationComplete(true);
                    setTimeout(() => {
                        setLoading(false);
                    }, 800);
                }, 300);
            }
        }, 50);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (progress === 100 && confettiRef.current) {
            confettiRef.current.classList.add('confetti-explosion');
        }
    }, [progress]);

    useEffect(() => {
        const shapes = ['circle', 'square', 'triangle', 'heart'];
        const colors = ['#FFB6C1', '#FFD700', '#87CEFA', '#FF9494', '#98FB98', '#FFA07A'];
        const newConfetti = Array.from({ length: 40 }, (_, i) => {
            const left = Math.random() * 100;
            const size = 5 + Math.random() * 10;
            const animationDuration = 2 + Math.random() * 3;
            const animationDelay = Math.random() * 3;
            const shape = shapes[Math.floor(Math.random() * shapes.length)];
            const color = colors[Math.floor(Math.random() * colors.length)];
            const rotation = Math.random() * 360;
            return (
                <div
                    key={i}
                    className={`confetti ${shape}`}
                    style={{
                        left: `${left}%`,
                        width: `${size}px`,
                        height: `${size}px`,
                        backgroundColor: color,
                        animationDuration: `${animationDuration}s`,
                        animationDelay: `${animationDelay}s`,
                        transform: `rotate(${rotation}deg)`
                    }}
                />
            );
        });
        setConfettiElements(newConfetti);

        const balloonColors = ['#FF9494', '#FFD166', '#06D6A0', '#118AB2'];
        const newBalloons = Array.from({ length: 6 }, (_, i) => {
            const left = 10 + (i * 15);
            const animationDuration = 15 + Math.random() * 10;
            const animationDelay = Math.random() * 5;
            const size = 40 + Math.random() * 30;
            const color = balloonColors[Math.floor(Math.random() * balloonColors.length)];
            return (
                <div
                    key={i}
                    className="balloon"
                    style={{
                        left: `${left}%`,
                        animationDuration: `${animationDuration}s`,
                        animationDelay: `${animationDelay}s`,
                        width: `${size}px`,
                        height: `${size * 1.2}px`,
                        backgroundColor: color
                    }}
                >
                    <div className="balloon-string"></div>
                </div>
            );
        });
        setBalloonElements(newBalloons);
    }, []);

    if (!loading) return null;

    return (
        <div className={`loader-container ${animationComplete ? 'loader-exit' : ''}`}>
            <div className="loader-background"></div>
            <div className="confetti-container" ref={confettiRef}>
                {confettiElements}
            </div>
            <div className="balloon-container">
                {balloonElements}
            </div>
            <div className="loader-content">
                <div className="loader-image-container">
                    <img className="loader-image" src="/margarita.gif" alt="Loading" />
                </div>
                <div className="loader-text-container">
                    <h1 className="loader-title">¡Galia cumple 1 añito!</h1>
                    <p className="loader-subtitle">Cargando invitación...</p>
                </div>
                <div className="loader-progress-container">
                    <div className="loader-progress">
                        <div
                            className="loader-progress-bar"
                            style={{ width: `${progress}%` }}
                        ></div>
                    </div>
                    <div className="loader-progress-text">{progress}%</div>
                </div>
            </div>
        </div>
    );
}

export default Loader;