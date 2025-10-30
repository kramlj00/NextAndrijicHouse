import { useState, useEffect, useRef } from 'react';
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
  const [dragState, setDragState] = useState({
    isDragging: false,
    startX: 0,
    startY: 0,
    currentX: 0,
    currentY: 0,
    deltaX: 0,
    deltaY: 0,
  });
  const imageRef = useRef(null);

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

  // Drag event handlers
  const getClientX = (event) => {
    return event.touches ? event.touches[0].clientX : event.clientX;
  };

  const getClientY = (event) => {
    return event.touches ? event.touches[0].clientY : event.clientY;
  };

  const handleDragStart = (event) => {
    const clientX = getClientX(event);
    const clientY = getClientY(event);

    setDragState({
      isDragging: true,
      startX: clientX,
      startY: clientY,
      currentX: clientX,
      currentY: clientY,
      deltaX: 0,
      deltaY: 0,
    });
  };

  const handleDragMove = (event) => {
    if (!dragState.isDragging) return;

    event.preventDefault();
    const clientX = getClientX(event);
    const clientY = getClientY(event);

    setDragState((prev) => ({
      ...prev,
      currentX: clientX,
      currentY: clientY,
      deltaX: clientX - prev.startX,
      deltaY: clientY - prev.startY,
    }));
  };

  const handleDragEnd = () => {
    if (!dragState.isDragging) return;

    const { deltaX, deltaY } = dragState;
    const minSwipeDistance = 50; // Minimum distance to trigger image switch
    const maxVerticalSwipe = 100; // Maximum vertical movement to allow horizontal swipe

    // Check if it's a horizontal swipe (not vertical)
    if (
      Math.abs(deltaX) > Math.abs(deltaY) &&
      Math.abs(deltaY) < maxVerticalSwipe
    ) {
      if (Math.abs(deltaX) > minSwipeDistance) {
        if (deltaX > 0) {
          // Swipe right - go to previous image
          if (currentIndex > 0) {
            onIndexChange(currentIndex - 1);
          }
        } else {
          // Swipe left - go to next image
          if (currentIndex < images.length - 1) {
            onIndexChange(currentIndex + 1);
          }
        }
      }
    }

    // Reset drag state
    setDragState({
      isDragging: false,
      startX: 0,
      startY: 0,
      currentX: 0,
      currentY: 0,
      deltaX: 0,
      deltaY: 0,
    });
  };

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

        <div
          className={styles.imageWrapper}
          onMouseDown={handleDragStart}
          onMouseMove={handleDragMove}
          onMouseUp={handleDragEnd}
          onMouseLeave={handleDragEnd}
          onTouchStart={handleDragStart}
          onTouchMove={handleDragMove}
          onTouchEnd={handleDragEnd}
          style={{
            cursor: dragState.isDragging ? 'grabbing' : 'grab',
            userSelect: 'none',
          }}>
          {isLoading && <div className={styles.spinner}></div>}
          <Image
            ref={imageRef}
            src={currentImage.src}
            alt={currentImage.alt || `Image ${currentIndex + 1}`}
            fill
            style={{
              objectFit: 'contain',
              maxWidth: '100%',
              maxHeight: '100%',
              borderRadius: '16px',
              transform: dragState.isDragging
                ? `translateX(${dragState.deltaX * 0.3}px)`
                : 'translateX(0)',
              transition: dragState.isDragging
                ? 'none'
                : 'transform 0.2s ease-out',
            }}
            onLoad={handleImageLoad}
            onError={handleImageError}
            className={styles.lightboxImage}
            draggable={false}
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
