import Link from 'next/link';
import styles from './navItem.module.scss';

const NavItem = ({ text, href, activeTab, isScrolled }) => {
  return (
    <Link
      href={href}
      className={`${styles.navItem} ${
        activeTab === text ? styles.active : ''
      } ${isScrolled ? styles.scrolled : ''}`}>
      {text}
    </Link>
  );
};

export default NavItem;
