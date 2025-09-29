import { useRouter } from 'next/router';
import React from 'react';
import en from '@locales/en';
import hr from '@locales/hr';
import styles from './amenities.module.scss';

const Amenities = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'en' ? en : hr;

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

  return (
    <section
      data-aos="fade-up"
      data-aos-duration="1000"
      className={styles.amenitiesContainer}>
      <h1>{t.amenitiesTitle}</h1>
      <p className={styles.amenitiesSubtitle}>{t.amenitiesSubtitle}</p>
      <div className={styles.amenitiesGrid}>
        {amenities.map((amenity) => (
          <div key={amenity.key} className={styles.amenityItem}>
            <div className={styles.amenityIcon}>{amenity.icon}</div>
            <h3 className={styles.amenityTitle}>{t.amenities[amenity.key]}</h3>
            <p className={styles.amenityDescription}>
              {t.amenitiesDescriptions[amenity.key]}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Amenities;
