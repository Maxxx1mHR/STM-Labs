import styles from './Loader.module.scss';
export const Loader = () => {
  return (
    <div className={styles.loading__spinner}>
      <div className={styles.loading__spinner_item}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};
