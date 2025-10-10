import { LocateIcon } from 'lucide-react';
import SectionTitle from '../SectionTitle';
import styles from './location.module.scss';
import { useRouter } from 'next/router';
import en from '@locales/en';
import hr from '@locales/hr';

const Location = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'en' ? en : hr;

  return (
    <div
      data-aos="fade-up"
      data-aos-duration="1000"
      className={styles.locationContainer}>
      <SectionTitle
        title={t.locationTitle}
        subTitle={t.locationSubtitle}
        sectionName={t.locationSectionName}
        icon={<LocateIcon color="#1277b0" size={20} />}
      />
      <div className={styles.locationMapContainer}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2921.753562941688!2d16.7132849763236!3d42.920238099527104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x134a720c5f6330cf%3A0x810796f65a20ec98!2sAndriji%C4%87%20House!5e0!3m2!1sen!2shr!4v1760079476176!5m2!1sen!2shr&t=m&z=15"
          className={styles.locationMap}
          style={{
            border: 0,
            filter: 'invert(1) hue-rotate(180deg)',
          }}
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
};

export default Location;
