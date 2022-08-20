import { useRouter } from "next/router";
import React from "react";
import en from "../../locales/en";
import hr from "../../locales/hr";
import TransitionedCardFan from "../TransitionedCardFan";
import styles from "./homeCard.module.scss";

const HomeCard = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : hr;

  return (
    <div>
      <section
        data-aos="fade-right"
        data-aos-duration="1000"
        className={styles.cardContainer}
      >
        <div className={styles.leftSide}>
          <h1>{t.welcomeTitle}</h1>
          <p className={styles.description}>
            {t.houseInfo}{" "}
            <a
              className={styles.clickHere}
              href="https://www.booking.com/hotel/hr/apartment-zaglav-12208a.hr.html?aid=304142&label=gen173nr-1DCAEoggI46AdIM1gEaGWIAQGYARC4ARfIAQzYAQPoAQGIAgGoAgO4ApzdhZYGwAIB0gIkYjkwMjdjZjMtN2QwNC00M2YzLWIxYzctYTJiM2IxNTg3ZWY52AIE4AIB&sid=9ea2f99d2546ae5288cab2ad92918067&atlas_src=sr_iw_btn;dest_id=2017;dest_type=region;dist=0;group_adults=2;group_children=0;no_rooms=1;room1=A%2CA;sb_price_type=total;type=total;ucfs=1&#availability_target"
              target="_blank"
              rel="noreferrer"
            >
              {t.here}
            </a>.
          </p>
        </div>
        <div className={styles.rightSide}>
          <TransitionedCardFan />
        </div>
      </section>
      <section
        data-aos="fade-left"
        data-aos-duration="1000"
        className={styles.locationContainer}
      >
        <h1>{t.locationTitle}</h1>
        <iframe
          className={styles.map}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11686.976429150827!2d16.715967!3d42.9204375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x134a720c5f6330cf%3A0x810796f65a20ec98!2sAndriji%C4%87%20House!5e0!3m2!1shr!2shr!4v1613756560386!5m2!1shr!2shr"
        />
      </section>
    </div>
  );
};

export default HomeCard;
