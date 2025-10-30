import styles from './sectionTitle.module.scss';

const SectionTitle = ({ title, subTitle, sectionName, icon }) => {
  return (
    <div className={styles.sectionTitleContainer}>
      <div className={styles.sectionName}>
        {icon}
        {sectionName}
      </div>
      <h1>{title}</h1>
      <p className={styles.sectionSubtitle}>{subTitle}</p>
    </div>
  );
};

export default SectionTitle;
