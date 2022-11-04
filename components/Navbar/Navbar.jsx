import Link from "next/link";
import React from "react";
import NavItem from "../NavItem/NavItem";
import Logo from "../commons/Logo";
import styles from "./navBar.module.scss";
import LanguageOptions from "../LanguageOptions";
import { useRouter } from "next/router";
import en from "../../locales/en";
import hr from "../../locales/hr";

const Navbar = ({ activeTab, toggle, isOpen }) => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : hr;

  const MENU_LIST = [
    { text: `${t.rooms}`, href: "/rooms" },
    { text: `${t.exterior}`, href: "/exterior" },
    { text: `${t.contact}`, href: "/contact" },
  ];

  return (
    <header className={styles.navHeader}>
      <Link href={"/"}>
        <a>
          <Logo />
        </a>
      </Link>
      <div
        className={`${styles.hamburgerBar} ${
          isOpen && styles.openHamburgerBar
        }`}
        onClick={toggle}
      >
        <div
          className={`${styles.menuIconLine} ${
            isOpen ? styles.menuIconLineFirstX : styles.menuIconLineFirstXClose
          }`}
        ></div>
        <div
          className={`${styles.menuIconLine} ${
            isOpen ? styles.menuIconLineSecondHidden : styles.menuIconLineSecond
          }`}
        ></div>
        <div
          className={`${styles.menuIconLine} ${
            isOpen ? styles.menuIconLineThirdHidden : styles.menuIconLineThird
          }`}
        ></div>
        <div
          className={`${styles.menuIconLine} ${
            isOpen
              ? styles.menuIconLineSecondX
              : styles.menuIconLineSecondXClose
          }`}
        ></div>
      </div>
      <div className={styles.menuList}>
        {MENU_LIST.map((menu) => (
          <div key={menu.text}>
            <NavItem activeTab={activeTab} {...menu} />
          </div>
        ))}
        <a
          href="https://www.booking.com/hotel/hr/apartment-zaglav-12208a.hr.html?aid=304142&label=gen173nr-1DCAEoggI46AdIM1gEaGWIAQGYARC4ARfIAQzYAQPoAQGIAgGoAgO4ApzdhZYGwAIB0gIkYjkwMjdjZjMtN2QwNC00M2YzLWIxYzctYTJiM2IxNTg3ZWY52AIE4AIB&sid=9ea2f99d2546ae5288cab2ad92918067&atlas_src=sr_iw_btn;dest_id=2017;dest_type=region;dist=0;group_adults=2;group_children=0;no_rooms=1;room1=A%2CA;sb_price_type=total;type=total;ucfs=1&#availability_target"
          target="_blank"
          rel="noreferrer"
        >
          <button className="bookNowBtn">{t.bookNow}</button>
        </a>
      </div>
      <div className={styles.languageOptionsContainer}>
        <LanguageOptions />
      </div>
    </header>
  );
};

export default Navbar;
