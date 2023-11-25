import { useRouter } from 'next/router';
import React from 'react';
import en from '@locales/en';
import hr from '@locales/hr';
import styles from './reviews.module.scss';
import SingleReview from './SingleReview';
import { REVIEWS } from './constants';

const Reviews = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'en' ? en : hr;

  return (
    <section className={styles.reviewsSection}>
      <h1>{t.reviewsTitle}</h1>
      <div className={styles.reviewsContainer}>
        {REVIEWS.map((review) => (
          <SingleReview key={review.key} review={review} />
        ))}
      </div>
    </section>
  );
};

export default Reviews;
