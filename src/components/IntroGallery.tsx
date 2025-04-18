import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import '../styles/introgallery.css';

interface ImageData {
    src: string;
    caption: string;
}

const TRANSITION_PROPS = { duration: 0.7, ease: "easeInOut" };
const INITIAL_MOTION = { opacity: 0, scale: 1.05 };
const EXIT_MOTION = { opacity: 0, scale: 0.95 };
const CAPTION_INITIAL = { opacity: 0, y: 10 };
const CAPTION_ANIMATE = { opacity: 1, y: 0 };
const CAPTION_TRANSITION = { duration: 0.5 };
const AUTOPLAY_INTERVAL = 4000;
const PAUSE_DURATION = 10000;

const IntroGallery = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const galleryRef = useRef<HTMLDivElement>(null);
    const intervalRef = useRef<number | null>(null);

    const images: ImageData[] = [
        { src: '/galia4.webp', caption: 'Mi primer añito' },
        { src: '/galia/galiamaurogimeplaya.webp', caption: 'Momentos especiales' },
        { src: '/galia/galiarisa.webp', caption: 'Sonrisas de Galia' },
        { src: '/galia/galiahamaca.webp', caption: 'Celebrando juntos' },
    ];

    const handleNavigation = useCallback((direction: 'next' | 'prev' | number) => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }
        setCurrentImageIndex(prev =>
            typeof direction === 'number'
                ? direction
                : direction === 'next'
                ? (prev + 1) % images.length
                : prev === 0
                ? images.length - 1
                : prev - 1
        );
        setIsPaused(true);
    }, [images.length]);

    useEffect(() => {
        if (!isPaused) {
            intervalRef.current = window.setInterval(() => {
                setCurrentImageIndex(prev => (prev + 1) % images.length);
            }, AUTOPLAY_INTERVAL);
        }
        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, [images.length, isPaused]);

    useEffect(() => {
        if (isPaused) {
            const pauseTimer = setTimeout(() => setIsPaused(false), PAUSE_DURATION);
            return () => clearTimeout(pauseTimer);
        }
    }, [isPaused]);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'ArrowLeft') handleNavigation('prev');
            if (e.key === 'ArrowRight') handleNavigation('next');
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [handleNavigation]);

    return (
        <div className="intro-gallery-container" ref={galleryRef}>
            <div className="intro-gallery-viewport">
                <AnimatePresence initial={false} mode="wait">
                    {images.map((image, index) => (
                        <motion.div
                            key={index}
                            className={`intro-gallery-image ${index === currentImageIndex ? 'intro-gallery-image--active' : ''}`}
                            style={{ backgroundImage: `url(${image.src})` }}
                            initial={INITIAL_MOTION}
                            animate={{
                                opacity: index === currentImageIndex ? 1 : 0,
                                scale: index === currentImageIndex ? 1 : 1.05,
                                x: `${(index - currentImageIndex) * 100}%`,
                            }}
                            transition={TRANSITION_PROPS}
                            exit={EXIT_MOTION}
                        />
                    ))}
                </AnimatePresence>
            </div>

            <button
                className="intro-gallery-nav-button intro-gallery-nav-button--prev"
                onClick={() => handleNavigation('prev')}
                aria-label="Imagen anterior"
            >
                <ChevronLeft className="intro-gallery-nav-icon" />
            </button>
            <button
                className="intro-gallery-nav-button intro-gallery-nav-button--next"
                onClick={() => handleNavigation('next')}
                aria-label="Siguiente imagen"
            >
                <ChevronRight className="intro-gallery-nav-icon" />
            </button>

            <motion.div
                className="intro-gallery-caption"
                key={currentImageIndex}
                initial={CAPTION_INITIAL}
                animate={CAPTION_ANIMATE}
                transition={CAPTION_TRANSITION}
            >
                {images[currentImageIndex].caption}
            </motion.div>

            <div className="intro-gallery-dots">
                {images.map((_, index) => (
                    <button
                        key={index}
                        className={`intro-gallery-dot ${index === currentImageIndex ? 'intro-gallery-dot--active' : ''}`}
                        onClick={() => handleNavigation(index)}
                        aria-label={`Ver imagen ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default IntroGallery;