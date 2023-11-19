import { useRouter } from 'next/router';
import styles from './contactUs.module.scss';
import en from '@locales/en';
import hr from '@locales/hr';
import ContactForm from '../ContactForm/ContactForm';

const ContactUs = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'en' ? en : hr;

  return (
    <div>
      <div className={styles.contactContainer}>
        <h1 data-aos="zoom-in" data-aos-duration="1000">
          {t.contactUs}
        </h1>
        <div
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-delay="800"
          className={styles.contentWrapper}>
          <div className={styles.contactInfoContainer}>
            <div className={styles.contactInfoItem}>
              {t.emailAddress}
              <a
                href="mailto:tonci.andrijic@gmail.com"
                className={styles.contactInfoSubitemTwo}>
                tonci.andrijic@gmail.com
              </a>
            </div>
            <div className={styles.contactInfoItem}>
              {t.phoneNumber} (Tonči Andrijić)
              <div className={styles.contactInfoSubitemTwo}>
                +385 98 181 6135
              </div>
            </div>
            <div className={styles.contactInfoItem}>
              {t.address}
              <a
                href="https://www.google.com/maps/dir//Andriji%C4%87+House+Zaglav+27+20271,+Blato/@42.9202342,16.7158599,14z/data=!4m8!4m7!1m0!1m5!1m1!1s0x134a720c5f6330cf:0x810796f65a20ec98!2m2!1d16.7158599!2d42.9202342?entry=ttu"
                target="_blank"
                rel="noreferrer"
                className={styles.contactInfoSubitemTwo}>
                Zaglav 27, 20271 Blato Croatia
              </a>
            </div>
          </div>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
