import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import '../styles/introgallery.css';

interface ImageData {
    src: string;
    caption: string;
}

const IntroGallery = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isLoaded, setIsLoaded] = useState(false);
    const [isPaused, setIsPaused] = useState(false);
    const intervalRef = useRef<number | null>(null);

    // List of images from the public/img directory with captions
    const images: ImageData[] = [
        { src: '/galia1.webp', caption: 'Mi primer añito' },
        { src: '/galia2.webp', caption: 'Momentos especiales' },
        { src: '/galia3.webp', caption: 'Sonrisas de Galia' },
        { src: '/galia4.webp', caption: 'Celebrando juntos' },
    ];

    // Memoized navigation functions to prevent unnecessary re-renders
    const goToImage = useCallback((index: number) => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }
        setCurrentImageIndex(index);
        setIsPaused(true);
    }, []);

    const goToPrevious = useCallback(() => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }
        setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
        setIsPaused(true);
    }, [images.length]);

    const goToNext = useCallback(() => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }
        setCurrentImageIndex((prevIndex) =>
            (prevIndex + 1) % images.length
        );
        setIsPaused(true);
    }, [images.length]);

    // Auto-rotate images
    useEffect(() => {
        setIsLoaded(true);

        if (!isPaused) {
            intervalRef.current = window.setInterval(() => {
                setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
            }, 4000);
        }

        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, [images.length, isPaused]);

    // Reset auto-rotation after 10 seconds of inactivity
    useEffect(() => {
        if (isPaused) {
            const pauseTimer = setTimeout(() => {
                setIsPaused(false);
            }, 10000);
            
            return () => clearTimeout(pauseTimer);
        }
    }, [isPaused]);

    return (
        <div className="gallery-container mt-6">
            <div className="gallery-wrapper">
                <AnimatePresence initial={false} mode="wait">
                    {images.map((image, index) => (
                        <motion.div
                            key={index}
                            className={`gallery-image ${index === currentImageIndex ? 'active' : ''}`}
                            style={{ backgroundImage: `url(${image.src})` }}
                            initial={{ opacity: 0, scale: 1.05 }}
                            animate={{
                                opacity: index === currentImageIndex ? 1 : 0,
                                scale: index === currentImageIndex ? 1 : 1.05,
                                x: `${(index - currentImageIndex) * 100}%`,
                                transition: { duration: 0.7, ease: "easeInOut" },
                            }}
                            exit={{ opacity: 0, scale: 0.95 }}
                        />
                    ))}
                </AnimatePresence>
            </div>

            <button
                className="gallery-nav-button prev"
                onClick={goToPrevious}
                aria-label="Previous image"
            >
                <ChevronLeft className="h-6 w-6" />
            </button>
            <button
                className="gallery-nav-button next"
                onClick={goToNext}
                aria-label="Next image"
            >
                <ChevronRight className="h-6 w-6" />
            </button>

            <motion.div 
                className="gallery-caption"
                key={currentImageIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                {images[currentImageIndex].caption}
            </motion.div>

            <div className="gallery-dots">
                {images.map((_, index) => (
                    <button
                        key={index}
                        className={`gallery-dot ${index === currentImageIndex ? 'active' : ''}`}
                        onClick={() => goToImage(index)}
                        aria-label={`View image ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default IntroGallery;

