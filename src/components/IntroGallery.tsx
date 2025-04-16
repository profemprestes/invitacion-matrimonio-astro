import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
// import { Button } from '@/components/ui/button';  // Asegúrate de que la ruta sea correcta
import { ChevronLeft, ChevronRight } from 'lucide-react'; // Importa los íconos
// import { cn } from "@/lib/utils"; // Importa la utilidad para combinar clases
import '../styles/introgallery.css';

interface ImageData {
    src: string;
    caption: string;
}

const IntroGallery = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isLoaded, setIsLoaded] = useState(false);
    const intervalRef = useRef<number | null>(null);

    // List of images from the public/img directory with captions
    const images: ImageData[] = [
        { src: '/img/Galia1.png', caption: 'Mi primer añito' },
        { src: '/img/Galia2.png', caption: 'Momentos especiales' },
        { src: '/img/Galia3.png', caption: 'Sonrisas de Galia' },
        { src: '/img/Galia4.png', caption: 'Celebrando juntos' },
    ];

    // Auto-rotate images
    useEffect(() => {
        setIsLoaded(true);

        intervalRef.current = window.setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 4000);

        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, [images.length]);  // Dependencia de images.length

    // Handle manual navigation
    const goToImage = (index: number) => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }
        setCurrentImageIndex(index);
    };

    const goToPrevious = () => {
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
        }
        setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    const goToNext = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }
        setCurrentImageIndex((prevIndex) =>
            (prevIndex + 1) % images.length
        );
    };

    return (
        <div className="gallery-container mt-6">
            <div className="gallery-wrapper">
                <AnimatePresence initial={false}>
                    {images.map((image, index) => (
                        <motion.div
                            key={index}
                            className={`gallery-image ${index === currentImageIndex ? 'active' : ''}`}
                            style={{ backgroundImage: `url(${image.src})` }}
                            initial={{ opacity: 0, x: index === currentImageIndex ? 0 : 50 }}
                            animate={{
                                opacity: index === currentImageIndex ? 1 : 0,
                                x: `${(index - currentImageIndex) * 100}%`,
                                transition: { duration: 0.5, ease: "easeInOut" },
                            }}
                            exit={{ opacity: 0, x: -50 }}
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

            <div className="gallery-caption">
                {images[currentImageIndex].caption}
            </div>

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

