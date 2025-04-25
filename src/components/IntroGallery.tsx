// IntroGallery.tsx
import { motion } from 'framer-motion';
import { useEffect } from 'react';

interface IntroGalleryProps {
  onIntroComplete?: () => void;
}

const galleryImages = ['/galia1.webp', '/galia2.webp', '/galia1.webp', '/galia2.webp'];

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

export default function IntroGallery({ onIntroComplete }: IntroGalleryProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onIntroComplete?.();
    }, galleryImages.length * 200 + 600); // Tiempo total de las animaciones

    return () => clearTimeout(timer);
  }, [onIntroComplete]);

  return (
    <div className="grid grid-cols-2 gap-4 px-4 md:grid-cols-4 md:px-0">
      {galleryImages.map((src, index) => (
        <motion.div
          className="overflow-hidden rounded-xl shadow-lg"
          key={src}
          custom={index}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <img
            src={src}
            alt={`Galia ${index + 1}`}
            className="h-48 w-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </motion.div>
      ))}
    </div>
  );
}
