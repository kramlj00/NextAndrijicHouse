import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import NavItem from '../NavItem';
import Logo from '@components/Logo';
import styles from './navBar.module.scss';
import LanguageOptions from '@components/LanguageOptions';
import { useRouter } from 'next/router';
import en from '@locales/en';
import hr from '@locales/hr';
import { usePathname } from 'next/navigation';

const Navbar = ({ toggle, isOpen }) => {
  const pathname = usePathname();
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'en' ? en : hr;

  const [isScrolled, setIsScrolled] = useState(false);
  const [active, setActive] = useState('');

  const MENU_LIST = [
    { text: `${t.amenitiesSectionName}`, id: 'amenities' },
    { text: `${t.exterior}`, id: 'exterior' },
    { text: `${t.interior}`, id: 'interior' },
    { text: `${t.testimonials}`, id: 'testimonials' },
    { text: `${t.contact}`, id: 'contact' },
  ];

  useEffect(() => {
    setActive(window.location.hash.slice(1) || '');

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const viewportHeight = window.innerHeight;
      setIsScrolled(scrollTop >= viewportHeight);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        const intersectingSection = entries.find(
          (entry) => entry.isIntersecting,
        );
        if (intersectingSection) {
          const id = intersectingSection.target.id;
          setActive(id);
          window.history.replaceState(null, '', `#${id}`);
        } else {
          setActive('');
          window.history.replaceState(null, '', '/');
        }
      },
      {
        rootMargin: '-50% 0px -50% 0px',
      },
    );

    MENU_LIST.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleNavLinkClick = (id) => {
    setActive(id);
    if (pathname !== '/') {
      window.location.href = `/#${id}`;
    }
  };

  return (
    <header
      className={`${styles.navHeader} ${isScrolled ? styles.scrolled : ''}`}>
      <Link href={'/'}>
        <Logo />
      </Link>
      <button
        type="button"
        className={`${styles.hamburgerBar} ${
          isOpen && styles.openHamburgerBar
        }`}
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          toggle();
        }}>
        <div
          className={`${styles.menuIconLine} ${
            isScrolled ? styles.scrolled : ''
          } ${
            isOpen ? styles.menuIconLineFirstX : styles.menuIconLineFirstXClose
          }`}></div>
        <div
          className={`${styles.menuIconLine} ${
            isScrolled ? styles.scrolled : ''
          } ${
            isOpen ? styles.menuIconLineSecondHidden : styles.menuIconLineSecond
          }`}></div>
        <div
          className={`${styles.menuIconLine} ${
            isScrolled ? styles.scrolled : ''
          } ${
            isOpen ? styles.menuIconLineThirdHidden : styles.menuIconLineThird
          }`}></div>
        <div
          className={`${styles.menuIconLine} ${
            isScrolled ? styles.scrolled : ''
          } ${
            isOpen
              ? styles.menuIconLineSecondX
              : styles.menuIconLineSecondXClose
          }`}></div>
      </button>
      <ul className={styles.menuList}>
        {MENU_LIST.map((menu) => (
          <li key={menu.text} onClick={() => handleNavLinkClick(menu.id)}>
            <NavItem
              isActive={active === menu.id}
              isScrolled={isScrolled}
              {...menu}
            />
          </li>
        ))}
      </ul>
      <div className={styles.navbarActionsContainer}>
        <LanguageOptions isScrolled={isScrolled} />
        <a
          href="https://www.booking.com/hotel/hr/apartment-zaglav-12208a.hr.html?aid=304142&label=gen173nr-1DCAEoggI46AdIM1gEaGWIAQGYARC4ARfIAQzYAQPoAQGIAgGoAgO4ApzdhZYGwAIB0gIkYjkwMjdjZjMtN2QwNC00M2YzLWIxYzctYTJiM2IxNTg3ZWY52AIE4AIB&sid=9ea2f99d2546ae5288cab2ad92918067&atlas_src=sr_iw_btn;dest_id=2017;dest_type=region;dist=0;group_adults=2;group_children=0;no_rooms=1;room1=A%2CA;sb_price_type=total;type=total;ucfs=1&#availability_target"
          target="_blank"
          rel="noreferrer">
          <button className="bookNowBtn">{t.bookNow}</button>
        </a>
      </div>
    </header>
  );
};

export default Navbar;
