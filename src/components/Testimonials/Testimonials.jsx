import Image from 'next/image';
import { useRouter } from 'next/router';
import en from '@locales/en';
import hr from '@locales/hr';
import styles from './testimonials.module.scss';
import { TESTIMONIALS } from './constants';
import { useState } from 'react';
import SectionTitle from '../SectionTitle';
import { Speech } from 'lucide-react';

const Testimonials = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'en' ? en : hr;

  const [showMore, setShowMore] = useState(false);

  return (
    <section
      data-aos="fade-right"
      data-aos-duration="1000"
      className={styles.testimonialsSection}>
      <SectionTitle
        title={t.testimonialsTitle}
        subTitle={t.testimonialsSubtitle}
        sectionName={t.testimonialsSectionName}
        icon={<Speech color="#1277b0" size={20} />}
      />
      <div className={styles.testimonialsContainer}>
        {TESTIMONIALS.map((testimonial) => {
          const testimonialSubstring = t.reviews[
            testimonial.key
          ].comment.substring(0, 200);
          const otherTestimonialSubstring =
            t.reviews[testimonial.key].comment.slice(200);
          const hasMoreTestimonial = !!otherTestimonialSubstring;
          return (
            <div
              key={testimonial.key}
              className={`${styles.singleTestimonialContainer} ${
                showMore && styles.singleTestimonialContainerOpened
              }`}>
              <div>
                <div className={styles.authorContainer}>
                  <div
                    className={styles.authorLogo}
                    style={{ backgroundColor: testimonial.logoColor }}>
                    <h1 className={styles.logoLetter}>
                      {testimonial.authorName[0]}
                    </h1>
                  </div>
                  <div className={styles.authorInfo}>
                    <p className={styles.authorName}>
                      {testimonial.authorName}
                    </p>
                    <div className={styles.authorCountryContainer}>
                      <Image
                        key={testimonial.authorCountrySymbol}
                        width={26}
                        height={15}
                        src={`/images/${testimonial.authorCountrySymbol}-flag.png`}
                        alt={`${testimonial.authorCountrySymbol}-img`}
                      />
                      <p className={styles.authorCountryName}>
                        {t.reviews[testimonial.key].country}
                      </p>
                    </div>
                  </div>
                  <p className={styles.dateContainer}>{testimonial.date}</p>
                </div>
                <div className={styles.authorTestimonial}>
                  <span>
                    „
                    {`${testimonialSubstring}${
                      hasMoreTestimonial && !showMore
                        ? '...'
                        : otherTestimonialSubstring
                    }`}
                    ”
                  </span>
                  {hasMoreTestimonial && (
                    <span
                      className={styles.showMore}
                      onClick={() => setShowMore(!showMore)}>
                      {!showMore ? 'Show more' : 'Show Less'}
                    </span>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Testimonials;
