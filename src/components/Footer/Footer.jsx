import React from 'react';
import Wave from 'react-wavify';
import styles from './footer.module.scss';
import Link from 'next/link';
import { useRouter } from 'next/router';
import en from '@locales/en';
import hr from '@locales/hr';

const Footer = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'en' ? en : hr;

  const footerItems = [
    { label: `${t.rooms}`, path: '/rooms' },
    { label: `${t.exterior}`, path: '/exterior' },
  ];

  return (
    <footer className={styles.footerContainer}>
      <div className={styles.waveContainer}>
        <Wave
          mask="url(#mask)"
          fill="#1277b0"
          style={{ display: 'flex', height: '100%' }}>
          <defs>
            <linearGradient id="gradient" gradientTransform="rotate(90)">
              <stop offset="0" stopColor="white" />
              <stop offset="0.75" stopColor="black" />
            </linearGradient>
            <mask id="mask">
              <rect
                x="0"
                y="0"
                width="2000"
                height="800"
                fill="url(#gradient)"
              />
            </mask>
          </defs>
        </Wave>
      </div>
      <section className={styles.separatorBar}>
        <div className={styles.horizontalLine} />
        <Link href={'/'}>
          <h1 className={styles.footerLogo}>Andrijić House</h1>
        </Link>
        <div className={styles.horizontalLine} />
      </section>
      <section className={styles.footerItemsContainer}>
        <div className={styles.itemContainer}>
          <Link href={'/contact'} legacyBehavior>
            <div className={styles.footerItemTitle}>{t.contactUs}</div>
          </Link>
          <a
            href="mailto:tonci.andrijic@gmail.com"
            className={styles.footerItemSubtitle}>
            tonci.andrijic@gmail.com
          </a>
          <div className={styles.footerItemSubtitle}>+385 98 181 6135</div>
          <a
            href="https://www.google.com/maps/dir//Andriji%C4%87+House+Zaglav+27+20271,+Blato/@42.9202342,16.7158599,14z/data=!4m8!4m7!1m0!1m5!1m1!1s0x134a720c5f6330cf:0x810796f65a20ec98!2m2!1d16.7158599!2d42.9202342?entry=ttu"
            target="_blank"
            rel="noreferrer"
            className={styles.footerItemSubtitle}>
            Zaglav 20271, Blato Croatia
          </a>
        </div>
        {footerItems.map((footerItem) => (
          <div className={styles.itemContainer} key={footerItem.path}>
            <Link href={footerItem.path} legacyBehavior>
              <div className={styles.footerItemTitle}>{footerItem.label}</div>
            </Link>
          </div>
        ))}
        <a
          href="https://www.booking.com/hotel/hr/apartment-zaglav-12208a.hr.html?aid=304142&label=gen173nr-1DCAEoggI46AdIM1gEaGWIAQGYARC4ARfIAQzYAQPoAQGIAgGoAgO4ApzdhZYGwAIB0gIkYjkwMjdjZjMtN2QwNC00M2YzLWIxYzctYTJiM2IxNTg3ZWY52AIE4AIB&sid=9ea2f99d2546ae5288cab2ad92918067&atlas_src=sr_iw_btn;dest_id=2017;dest_type=region;dist=0;group_adults=2;group_children=0;no_rooms=1;room1=A%2CA;sb_price_type=total;type=total;ucfs=1&#availability_target"
          target="_blank"
          rel="noreferrer">
          <div className={styles.footerItemTitle}>{t.bookNow}</div>
        </a>
      </section>
      <div className={styles.rightsContainer}>
        &copy; {new Date().getFullYear()} Andrijić House
        <span className={styles.createdBy}>
          Created by{' '}
          <a
            href="mailto:kristinaramljak5@gmail.com"
            className={styles.createdByName}>
            Kristina Ramljak
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
