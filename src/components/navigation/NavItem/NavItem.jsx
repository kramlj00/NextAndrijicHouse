import Link from 'next/link';
import styles from './navItem.module.scss';

const NavItem = ({ text, activeTab, isScrolled, id }) => {
  return (
    <Link
      href={`#${id}`}
      className={`${styles.navItem} ${
        activeTab === text ? styles.active : ''
      } ${isScrolled ? styles.scrolled : ''}`}>
      {text}
    </Link>
  );
};

export default NavItem;
