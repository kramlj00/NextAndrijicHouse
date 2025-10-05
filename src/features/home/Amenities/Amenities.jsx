import { useRouter } from 'next/router';
import React, { useState } from 'react';
import en from '@locales/en';
import hr from '@locales/hr';
import styles from './amenities.module.scss';
import {
  Anchor,
  BathIcon,
  BedIcon,
  CarIcon,
  ChefHatIcon,
  Flame,
  GiftIcon,
  HouseIcon,
  RockingChairIcon,
  ShipIcon,
  ShowerHeadIcon,
  SnowflakeIcon,
  TvIcon,
  UmbrellaIcon,
  WavesIcon,
  WifiIcon,
} from 'lucide-react';

const Amenities = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'en' ? en : hr;
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const amenities = [
    { key: 'wifi', icon: WifiIcon },
    { key: 'parking', icon: CarIcon },
    { key: 'beach', icon: WavesIcon },
    { key: 'kitchen', icon: ChefHatIcon },
    { key: 'terrace', icon: HouseIcon },
    { key: 'barbecue', icon: Flame },
    { key: 'canoe', icon: ShipIcon },
    { key: 'boat', icon: Anchor },
    { key: 'sunbeds', icon: RockingChairIcon },
    { key: 'umbrella', icon: UmbrellaIcon },
    { key: 'shower', icon: ShowerHeadIcon },
    { key: 'bedrooms', icon: BedIcon },
    { key: 'tv', icon: TvIcon },
    { key: 'airConditioning', icon: SnowflakeIcon },
    { key: 'bathroom', icon: BathIcon },
    { key: 'welcomeGift', icon: GiftIcon },
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
            <div className={styles.amenityIcon}>
              <amenity.icon color="#1277b0" size={24} />
            </div>
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
