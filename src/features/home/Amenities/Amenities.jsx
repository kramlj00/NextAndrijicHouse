import { useRouter } from 'next/router';
import React, { useState } from 'react';
import en from '@locales/en';
import hr from '@locales/hr';
import styles from './amenities.module.scss';

const Amenities = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'en' ? en : hr;
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const amenities = [
    { key: 'wifi', icon: '📶' },
    { key: 'parking', icon: '🚗' },
    { key: 'beach', icon: '🏖️' },
    { key: 'kitchen', icon: '🍳' },
    { key: 'terrace', icon: '🏠' },
    { key: 'barbecue', icon: '🔥' },
    { key: 'canoe', icon: '🛶' },
    { key: 'boat', icon: '⛵' },
    { key: 'sunbeds', icon: '🪑' },
    { key: 'umbrella', icon: '☂️' },
    { key: 'shower', icon: '🚿' },
    { key: 'bedrooms', icon: '🛏️' },
    { key: 'tv', icon: '📺' },
    { key: 'airConditioning', icon: '❄️' },
    { key: 'bathroom', icon: '🛁' },
    { key: 'welcomeGift', icon: '🎁' },
  ];

  const totalPages = Math.ceil(amenities.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentAmenities = amenities.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <section
      data-aos="fade-up"
      data-aos-duration="1000"
      className={styles.amenitiesContainer}>
      <h1>{t.amenitiesTitle}</h1>
      <p className={styles.amenitiesSubtitle}>{t.amenitiesSubtitle}</p>
      <div className={styles.amenitiesGrid}>
        {currentAmenities.map((amenity) => (
          <div key={amenity.key} className={styles.amenityItem}>
            <div className={styles.amenityIcon}>{amenity.icon}</div>
            <h3 className={styles.amenityTitle}>{t.amenities[amenity.key]}</h3>
            <p className={styles.amenityDescription}>
              {t.amenitiesDescriptions[amenity.key]}
            </p>
          </div>
        ))}
      </div>
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
    </section>
  );
};

export default Amenities;
