import { useRouter } from "next/router";
import React from "react";
import en from "../../locales/en";
import hr from "../../locales/hr";
import LanguageOptions from "../LanguageOptions";
import NavItem from "../NavItem/NavItem";
import styles from "./sidebar.module.scss";

const Sidebar = ({ activeTab }) => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : hr;

  const MENU_LIST = [
    { text: "Rooms", href: "/rooms" },
    { text: "Exterior", href: "/exterior" },
    { text: "Contact us", href: "/contact" },
  ];

  return (
    <div className={styles.sidebarContainer}>
      <div className={styles.menuList}>
        {MENU_LIST.map((menu) => (
          <NavItem key={menu.text} activeTab={activeTab} {...menu} />
        ))}
        <a
          href="https://www.booking.com/hotel/hr/apartment-zaglav-12208a.hr.html?aid=304142&label=gen173nr-1DCAEoggI46AdIM1gEaGWIAQGYARC4ARfIAQzYAQPoAQGIAgGoAgO4ApzdhZYGwAIB0gIkYjkwMjdjZjMtN2QwNC00M2YzLWIxYzctYTJiM2IxNTg3ZWY52AIE4AIB&sid=9ea2f99d2546ae5288cab2ad92918067&atlas_src=sr_iw_btn;dest_id=2017;dest_type=region;dist=0;group_adults=2;group_children=0;no_rooms=1;room1=A%2CA;sb_price_type=total;type=total;ucfs=1&#availability_target"
          target="_blank"
          rel="noreferrer"
        >
          <button className="bookNowBtn">{t.bookNow}</button>
        </a>
      </div>
      <LanguageOptions />
    </div>
  );
};

export default Sidebar;
