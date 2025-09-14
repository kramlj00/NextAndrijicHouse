import Image from 'next/legacy/image';
import styles from './mainImage.module.scss';
import React from 'react';
import { useRouter } from 'next/router';
import en from '@locales/en';
import hr from '@locales/hr';

export default function MainImage({
  src,
  name,
  sayingFirstPart,
  sayingSecondPart,
}) {
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'en' ? en : hr;

  return (
    <div className={`${styles.imageContainer}`}>
      <Image
        priority
        src={src}
        placeholder="blur"
        blurDataURL={src}
        layout="fill"
        objectFit="cover"
        alt={name}
        unoptimized={true}
      />
      <div className={styles.imageMask}></div>
      <section className={styles.sayingWrapper}>
        <h1 className={styles.saying}>
          {t.homeWelcomeTitle}{' '}
          <p className={styles.sayingSpan}>Andrijić House</p>
        </h1>
        <p className={styles.sayingText}>{t.homeWelcomeText}</p>
        <div className={styles.propertyDetails}>
          <span className={styles.detailItem}>📍 Zaglav, Korčula, Croatia</span>
          <span className={styles.detailSeparator}>•</span>
          <span className={styles.detailItem}>⭐ 5/5 {t.rating}</span>
          <span className={styles.detailSeparator}>•</span>
          <span className={styles.detailItem}>🏖️ {t.privateBeachAccess}</span>
        </div>
      </section>

      <div className={styles.bookNowContainer}>
        <a
          href="https://www.booking.com/hotel/hr/apartment-zaglav-12208a.hr.html?aid=304142&label=gen173nr-1DCAEoggI46AdIM1gEaGWIAQGYARC4ARfIAQzYAQPoAQGIAgGoAgO4ApzdhZYGwAIB0gIkYjkwMjdjZjMtN2QwNC00M2YzLWIxYzctYTJiM2IxNTg3ZWY52AIE4AIB&sid=9ea2f99d2546ae5288cab2ad92918067&atlas_src=sr_iw_btn;dest_id=2017;dest_type=region;dist=0;group_adults=2;group_children=0;no_rooms=1;room1=A%2CA;sb_price_type=total;type=total;ucfs=1&#availability_target"
          target="_blank"
          rel="noreferrer"
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="1000"
          data-aos-delay="1000">
          <button className={styles.bookNowHomeBtn}>{t.bookNow}</button>
        </a>
      </div>
    </div>
  );
}
