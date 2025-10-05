import styles from './imageGallery.module.scss';
import SectionTitle from '../../../components/SectionTitle';
import { ImagesIcon } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';
import CustomLightbox from '../../../components/CustomLightbox';

const ImageGallery = ({ title, subTitle, sectionName, imagesList }) => {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Calculate pagination
  const totalPages = Math.ceil((imagesList?.length || 0) / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentImages = imagesList?.slice(startIndex, endIndex) || [];

  const openLightbox = (index) => {
    // Calculate the actual index in the full images array
    const actualIndex = startIndex + index;
    setCurrentImageIndex(actualIndex);
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
  };

  const handleIndexChange = (newIndex) => {
    setCurrentImageIndex(newIndex);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
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
        {currentImages && currentImages.length > 0 ? (
          currentImages.map((image, index) => (
            <button
              key={startIndex + index}
              onClick={() => openLightbox(index)}
              className={styles.imageButton}>
              <Image
                src={image.src || '/placeholder.svg'}
                alt={image.alt || `Image ${startIndex + index + 1}`}
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

      {/* Pagination */}
      {totalPages > 1 && (
        <div className={styles.pagination}>
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              className={`${styles.paginationButton} ${
                currentPage === index + 1 ? styles.active : ''
              }`}
              onClick={() => handlePageChange(index + 1)}>
              {index + 1}
            </button>
          ))}
        </div>
      )}

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
