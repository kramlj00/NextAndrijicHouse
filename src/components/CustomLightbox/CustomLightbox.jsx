import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import styles from './customLightbox.module.scss';

const CustomLightbox = ({
  isOpen,
  onClose,
  images,
  currentIndex,
  onIndexChange,
}) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      switch (e.key) {
        case 'Escape':
          onClose();
          break;
        case 'ArrowLeft':
          if (currentIndex > 0) {
            onIndexChange(currentIndex - 1);
          }
          break;
        case 'ArrowRight':
          if (currentIndex < images.length - 1) {
            onIndexChange(currentIndex + 1);
          }
          break;
        default:
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, currentIndex, images.length, onIndexChange, onClose]);

  // Reset loading state when image changes
  useEffect(() => {
    if (isOpen) {
      setIsLoading(true);
    }
  }, [currentIndex, isOpen]);

  if (!isOpen || !images || images.length === 0) {
    return null;
  }

  const currentImage = images[currentIndex];

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  const handleImageError = () => {
    setIsLoading(false);
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    if (currentIndex > 0) {
      onIndexChange(currentIndex - 1);
    }
  };

  const handleNext = (e) => {
    e.stopPropagation();
    if (currentIndex < images.length - 1) {
      onIndexChange(currentIndex + 1);
    }
  };

  const lightboxContent = (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.container} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={onClose}>
          <X size={24} />
        </button>

        {currentIndex > 0 && (
          <button className={styles.prevBtn} onClick={handlePrev}>
            <ChevronLeft size={32} />
          </button>
        )}

        {currentIndex < images.length - 1 && (
          <button className={styles.nextBtn} onClick={handleNext}>
            <ChevronRight size={32} />
          </button>
        )}

        <div className={styles.imageWrapper}>
          {isLoading && <div className={styles.spinner}></div>}
          <Image
            src={currentImage.src}
            alt={currentImage.alt || `Image ${currentIndex + 1}`}
            width={800}
            height={600}
            style={{
              objectFit: 'contain',
              maxWidth: '100%',
              maxHeight: '100%',
              borderRadius: '16px',
            }}
            onLoad={handleImageLoad}
            onError={handleImageError}
            className={styles.lightboxImage}
          />
        </div>

        <div className={styles.counter}>
          {currentIndex + 1} / {images.length}
        </div>
      </div>
    </div>
  );

  // Render lightbox directly to document.body using portal
  return createPortal(lightboxContent, document.body);
};

export default CustomLightbox;
