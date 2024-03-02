import styles from './Footer.module.scss';
import stmLabs from '@assets/icons/stm.svg';
import gitHub from '@assets/icons/github.svg';

export const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className="container">
        <div className={styles.footer__wrapper}>
          <a href="https://github.com/Maxxx1mHR">
            <img src={gitHub} alt="github" className={styles.github_img} />
          </a>
          <a className={styles.telegram} href="https://t.me/mvpudeev">
            mvpudeev
          </a>
          <a href="https://stm-labs.ru/ru/">
            <img
              src={stmLabs}
              alt="stmLabs_logo"
              className={styles.stmlabs_img}
            />
          </a>
        </div>
        <div className={styles.year}>2024</div>
      </div>
    </div>
  );
};
