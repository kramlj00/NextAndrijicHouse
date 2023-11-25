import { useRouter } from 'next/router';
import { useState } from 'react';
import Image from 'next/image';
import en from '@locales/en';
import hr from '@locales/hr';
import styles from './reviews.module.scss';

const SingleReview = ({ review }) => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'en' ? en : hr;

  const [showMore, setShowMore] = useState(false);

  const reviewSubstring = t.reviews[review.key].comment.substring(0, 150);
  const otherReviewSubstring = t.reviews[review.key].comment.slice(150);
  const hasMoreReview = !!otherReviewSubstring;

  return (
    <div
      className={`${styles.singleReviewContainer} ${
        showMore && styles.singleReviewContainerOpened
      }`}>
      <div>
        <div className={styles.authorContainer}>
          <div
            className={styles.authorLogo}
            style={{ backgroundColor: review.logoColor }}>
            <h1 className={styles.logoLetter}>{review.authorName[0]}</h1>
          </div>
          <div className={styles.authorInfo}>
            <p className={styles.authorName}>{review.authorName}</p>
            <div className={styles.authorCountryContainer}>
              <Image
                key={review.authorCountrySymbol}
                width={26}
                height={15}
                src={`/images/${review.authorCountrySymbol}-flag.png`}
                alt={`${review.authorCountrySymbol}-img`}
              />
              <p className={styles.authorCountryName}>
                {t.reviews[review.key].country}
              </p>
            </div>
          </div>
        </div>
        <div className={styles.authorReview}>
          <span>
            „
            {`${reviewSubstring}${
              hasMoreReview && !showMore ? '...' : otherReviewSubstring
            }`}
            ”
          </span>
          {hasMoreReview && (
            <span
              className={styles.showMore}
              onClick={() => setShowMore(!showMore)}>
              {!showMore ? 'Show more' : 'Show Less'}
            </span>
          )}
        </div>
      </div>
      <p className={styles.dateContainer}>{review.date}</p>
    </div>
  );
};

export default SingleReview;
