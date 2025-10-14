import styles from './navItem.module.scss';

const NavItem = ({ text, isActive, isScrolled, id }) => {
  return (
    <a
      href={`#${id}`}
      className={`${styles.navItem} ${isActive ? styles.active : ''} ${
        isScrolled ? styles.scrolled : ''
      }`}>
      {text}
      <div className={styles.line} />
    </a>
  );
};

export default NavItem;
