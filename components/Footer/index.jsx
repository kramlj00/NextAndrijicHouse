import React from "react";
import styles from "./footer.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";
import en from "../../locales/en";
import hr from "../../locales/hr";

const Footer = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : hr;

  const footerItems = [
    { label: `${t.rooms}`, path: "/rooms" },
    { label: `${t.exterior}`, path: "/exterior" },
  ];

  return (
    <footer className={styles.footerContainer}>
      <section className={styles.separatorBar}>
        <div className={styles.horizontalLine} />
        <Link href={"/"}>
          <h1 className={styles.footerLogo}>Andrijić House</h1>
        </Link>
        <div className={styles.horizontalLine} />
      </section>
      <section className={styles.footerItemsContainer}>
        <div className={styles.itemContainer}>
          <Link href={"/contact"} legacyBehavior>
            <div className={styles.footerItemTitle}>{t.contactUs}</div>
          </Link>
          <div className={styles.footerItemSubtitle}>
            tonci.andrijic@gmail.com
          </div>
          <div className={styles.footerItemSubtitle}>+385 98 181 6135</div>
          <div className={styles.footerItemSubtitle}>
            Zaglav 20271, Blato Croatia
          </div>
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
          rel="noreferrer"
        >
          <div className={styles.footerItemTitle}>{t.bookNow}</div>
        </a>
      </section>
      <div className={styles.rightsContainer}>
        Andrijić House &copy; {new Date().getFullYear()} {t.rightsInfo}
        <span className={styles.createdBy}>
          Created by{" "}
          <span className={styles.createdByName}>Kristina Ramljak</span>{" "}
          (kristinaramljak5@gmail.com)
        </span>
      </div>
    </footer>
  );
};

export default Footer;
