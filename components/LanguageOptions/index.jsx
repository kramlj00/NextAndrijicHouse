import styles from "./language.module.scss";
import Image from "next/image";

export default function LanguageOptions() {
  const lngs = {
    en: { nativeName: "English" },
    hr: { nativeName: "Hrvatski" },
  };

  return (
    <section className={styles.languageOptions}>
      {Object.keys(lngs).map((lng) => (
        <div className={styles.option}>
          <Image
            key={lng}
            width={40}
            height={23}
            src={`/images/${lng}-flag.png`}
            alt={`${lng.nativeName}-img`}
          />
        </div>
      ))}
    </section>
  );
}
