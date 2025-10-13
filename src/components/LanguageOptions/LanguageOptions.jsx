import styles from './language.module.scss';
import Image from 'next/legacy/image';
import { useRouter } from 'next/router';
import { useState, useRef, useEffect } from 'react';
import { ChevronDown, Globe } from 'lucide-react';

export default function LanguageOptions({ isScrolled }) {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const lngs = {
    en: { nativeName: 'EN' },
    hr: { nativeName: 'HR' },
  };

  const currentLocale = router.locale || 'en';

  const handleLanguageChange = (lng) => {
    const locale = lng;
    router.push(router.pathname, router.route, { locale });
    setIsOpen(false);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <section className={styles.languageOptions} ref={dropdownRef}>
      <div
        className={`${styles.currentLanguage} ${
          isOpen ? styles.currentLanguageOpen : ''
        } ${isScrolled ? styles.scrolled : ''}`}
        onClick={toggleDropdown}>
        <Globe size={20} color={isScrolled ? '#333' : 'white'} />
        <span
          className={`${styles.languageCode} ${
            isScrolled ? styles.scrolled : ''
          }`}>
          {currentLocale.toUpperCase()}
        </span>
        <ChevronDown
          className={`${styles.chevron} ${isOpen ? styles.chevronOpen : ''} ${
            isScrolled ? styles.scrolled : ''
          }`}
          size={16}
        />
      </div>

      {isOpen && (
        <div className={styles.dropdown}>
          {Object.keys(lngs)
            .filter((lng) => lng !== currentLocale)
            .map((lng) => (
              <div
                key={lng}
                className={styles.option}
                onClick={() => handleLanguageChange(lng)}>
                <Image
                  width={32}
                  height={18}
                  src={`/images/${lng}-flag.png`}
                  alt={`${lngs[lng].nativeName}-img`}
                />
                <span className={styles.languageName}>
                  {lngs[lng].nativeName}
                </span>
              </div>
            ))}
        </div>
      )}
    </section>
  );
}
