import { useState, useEffect } from 'react';
import '../styles/introgallery.css';

const IntroGallery = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  
  // List of images from the public/img directory with captions
  const images = [
    { src: '/img/Galia.png', caption: 'Mi primer añito' },
    { src: '/img/Galia.png', caption: 'Momentos especiales' },
    { src: '/img/Galia.png', caption: 'Sonrisas de Galia' },
    { src: '/img/Galia.png', caption: 'Celebrando juntos' },
  ];
  
  // Auto-rotate images
  useEffect(() => {
    setIsLoaded(true);
    
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);
    
    return () => clearInterval(interval);
  }, []);
  
  // Handle manual navigation
  const goToImage = (index) => {
    setCurrentImageIndex(index);
  };
  
  const goToPrevious = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };
  
  const goToNext = () => {
    setCurrentImageIndex((prevIndex) => 
      (prevIndex + 1) % images.length
    );
  };
  
  return (
    <div className={`gallery-container mt-6 ${isLoaded ? 'loaded' : ''}`}>
      <div className="gallery-wrapper">
        {images.map((image, index) => (
          <div 
            key={index} 
            className={`gallery-image ${index === currentImageIndex ? 'active' : ''}`}
            style={{ 
              backgroundImage: `url(${image.src})`,
              transform: `translateX(${(index - currentImageIndex) * 100}%)` 
            }}
          />
        ))}
      </div>
      
      <button 
        className="gallery-nav-button prev" 
        onClick={goToPrevious}
        aria-label="Previous image"
      />
      
      <button 
        className="gallery-nav-button next" 
        onClick={goToNext}
        aria-label="Next image"
      />
      
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