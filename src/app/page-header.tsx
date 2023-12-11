import styles from "./Image.module.css";

const background = "/assets/img/background.png";

const PageHeader = () => {
  return (
    <article className={styles.article}>
      <picture className={styles.picture}>
        <source media="(min-width: 0px)" srcSet={background} />
        <img src={background} alt="background" />
      </picture>
      <div className={styles.headerName}>
        <div className={styles.box}>S</div>
        <div className={styles.box}>U</div>
        <div className={styles.box}>P</div>
        <div className={styles.box}>A</div>
        <div className={styles.box}>K</div>
        <div className={styles.box}>A</div>
        <div className={styles.box}>R</div>
        <div className={styles.box}>N</div>
      </div>

      <div className={`${styles.headerName} ${styles.headerBorder}`} >
        <div className={styles.boxBorder}>S</div>
        <div className={styles.boxBorder}>U</div>
        <div className={styles.boxBorder}>P</div>
        <div className={styles.boxBorder}>A</div>
        <div className={styles.boxBorder}>K</div>
        <div className={styles.boxBorder}>A</div>
        <div className={styles.boxBorder}>R</div>
        <div className={styles.boxBorder}>N</div>
      </div>
    </article>
  );
};

export default PageHeader;
