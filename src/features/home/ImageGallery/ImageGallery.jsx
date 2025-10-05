import styles from './imageGallery.module.scss';
import SectionTitle from '../../../components/SectionTitle';
import { ImagesIcon } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';
import CustomLightbox from '../../../components/CustomLightbox';

const ImageGallery = ({ title, subTitle, sectionName, imagesList }) => {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openLightbox = (index) => {
    setCurrentImageIndex(index);
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
  };

  const handleIndexChange = (newIndex) => {
    setCurrentImageIndex(newIndex);
  };

  return (
    <section
      data-aos="fade-up"
      data-aos-duration="1000"
      className={styles.imageGalleryContainer}>
      <SectionTitle
        title={title}
        subTitle={subTitle}
        sectionName={sectionName}
        icon={<ImagesIcon color="#1277b0" size={20} />}
      />

      <div className={styles.imageGrid}>
        {imagesList && imagesList.length > 0 ? (
          imagesList.map((image, index) => (
            <button
              key={index}
              onClick={() => openLightbox(index)}
              className={styles.imageButton}>
              <Image
                src={image.src || '/placeholder.svg'}
                alt={image.alt || `Image ${index + 1}`}
                className={styles.imageThumbnail}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className={styles.imageOverlay} />
            </button>
          ))
        ) : (
          <p>No images available</p>
        )}
      </div>

      <CustomLightbox
        isOpen={isLightboxOpen}
        onClose={closeLightbox}
        images={imagesList}
        currentIndex={currentImageIndex}
        onIndexChange={handleIndexChange}
      />
    </section>
  );
};

export default ImageGallery;
