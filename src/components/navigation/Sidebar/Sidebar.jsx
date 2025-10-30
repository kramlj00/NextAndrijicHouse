import { useRouter } from 'next/router';
import React from 'react';
import { usePathname } from 'next/navigation';
import en from '@locales/en';
import hr from '@locales/hr';
import LanguageOptions from '../../LanguageOptions/LanguageOptions';
import styles from './sidebar.module.scss';

const Sidebar = ({ active, setActive, isOpen, setIsOpen }) => {
  const router = useRouter();
  const pathname = usePathname();
  const { locale } = router;
  const t = locale === 'en' ? en : hr;

  const MENU_LIST = [
    { text: `${t.amenitiesSectionName}`, id: t.amenitiesHref },
    { text: `${t.exterior}`, id: t.exteriorHref },
    { text: `${t.interior}`, id: t.interiorHref },
    { text: `${t.testimonials}`, id: t.testimonialsHref },
    { text: `${t.contact}`, id: t.contactHref },
  ];

  const handleNavLinkClick = (id) => {
    setActive(id);
    setIsOpen(false);
    if (pathname !== '/') {
      window.location.href = `/#${id}`;
    }
  };

  return (
    <div
      className={`${styles.sidebarContainer} ${
        isOpen ? styles.openSidebar : styles.closeSidebar
      }`}>
      <ul className={styles.menuList}>
        {MENU_LIST.map((menu) => (
          <li
            key={menu.id}
            className={`${styles.menuItem} ${
              active === menu.id ? styles.active : ''
            }`}
            onClick={() => handleNavLinkClick(menu.id)}>
            <a href={`#${menu.id}`}>{menu.text}</a>
            {active === menu.id && <div className={styles.activeLine} />}
          </li>
        ))}
      </ul>
      <div className={styles.sidebarActions}>
        <a
          href="https://www.booking.com/hotel/hr/apartment-zaglav-12208a.hr.html?aid=304142&label=gen173nr-1DCAEoggI46AdIM1gEaGWIAQGYARC4ARfIAQzYAQPoAQGIAgGoAgO4ApzdhZYGwAIB0gIkYjkwMjdjZjMtN2QwNC00M2YzLWIxYzctYTJiM2IxNTg3ZWY52AIE4AIB&sid=9ea2f99d2546ae5288cab2ad92918067&atlas_src=sr_iw_btn;dest_id=2017;dest_type=region;dist=0;group_adults=2;group_children=0;no_rooms=1;room1=A%2CA;sb_price_type=total;type=total;ucfs=1&#availability_target"
          target="_blank"
          rel="noreferrer">
          <button className="bookNowBtn">{t.bookNow}</button>
        </a>
        <LanguageOptions />
      </div>
    </div>
  );
};

export default Sidebar;
