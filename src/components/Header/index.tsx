import styles from './styles.module.css';

export function Header() {
  return (
    <div className={styles.container}>
      <span className={styles.title}>
        <span className={styles.bold}>Dashboard</span> Financeiro
      </span>
    </div>
  );
}
