import React, { useEffect, useState } from 'react';
import '../styles/loader.css';

function Loader() {
    const [loading, setLoading] = useState(true);
    const [progress, setProgress] = useState(0);

    // Create confetti elements
    const createConfetti = () => {
        const confetti = [];
        for (let i = 0; i < 30; i++) {
            const left = Math.random() * 100;
            const animationDuration = 3 + Math.random() * 2;
            const animationDelay = Math.random() * 3;
            
            confetti.push(
                <div 
                    key={i}
                    className="confetti"
                    style={{
                        left: `${left}%`,
                        animationDuration: `${animationDuration}s`,
                        animationDelay: `${animationDelay}s`
                    }}
                />
            );
        }
        return confetti;
    };

    useEffect(() => {
        // Simulate loading progress
        const interval = setInterval(() => {
            setProgress(prev => {
                const newProgress = prev + 10;
                if (newProgress >= 100) {
                    clearInterval(interval);
                    // Add a small delay before hiding loader
                    setTimeout(() => {
                        setLoading(false);
                    }, 500);
                    return 100;
                }
                return newProgress;
            });
        }, 100);

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            {loading && (
                <div className={`loader-container ${progress === 100 ? 'loader-exit' : ''}`}>
                    {createConfetti()}
                    <div className="loader-content">
                        <img className="loader-image" src="/margarita.gif" alt="Loading" />
                        <div className="loader-text">¡Galia cumple 1 añito!</div>
                        <div className="loader-progress">
                            <div 
                                className="loader-progress-bar" 
                                style={{ width: `${progress}%` }}
                            ></div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default Loader;