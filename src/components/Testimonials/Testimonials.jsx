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

  const [expandedTestimonials, setExpandedTestimonials] = useState({});

  const StarRating = ({ rating = 5 }) => {
    return (
      <div className={styles.starRating}>
        {[...Array(rating)].map((_, index) => (
          <span key={index} className={styles.star}>
            ★
          </span>
        ))}
      </div>
    );
  };

  return (
    <section
      id={t.testimonialsHref}
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
          const isExpanded = expandedTestimonials[testimonial.key] || false;

          const toggleExpanded = () => {
            setExpandedTestimonials((prev) => ({
              ...prev,
              [testimonial.key]: !prev[testimonial.key],
            }));
          };

          return (
            <div
              key={testimonial.key}
              className={`${styles.testimonialCard} ${
                isExpanded ? styles.expanded : ''
              }`}>
              <div className={styles.decorativeDot}></div>

              <StarRating rating={5} />

              <div className={styles.testimonialText}>
                <span>
                  &ldquo;
                  {`${testimonialSubstring}${
                    hasMoreTestimonial && !isExpanded
                      ? '...'
                      : otherTestimonialSubstring
                  }`}
                  &rdquo;
                </span>
                {hasMoreTestimonial && (
                  <span className={styles.showMore} onClick={toggleExpanded}>
                    {!isExpanded ? 'Show more' : 'Show Less'}
                  </span>
                )}
              </div>

              <div className={styles.authorName}>{testimonial.authorName}</div>

              <div className={styles.authorLocation}>
                {t.reviews[testimonial.key].country}
              </div>

              <div className={styles.reviewDate}>{testimonial.date}</div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Testimonials;
