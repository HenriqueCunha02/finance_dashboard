import styles from './styles.module.css';

export function Summary() {
  return (
    <div className={styles.container}>
      <div className={styles.summary}>
        <span className={styles.title}>Saldo</span>
        <span className={styles.amount}>R$2900,00</span>
        <p className={styles.footer}>Total disponível</p>
      </div>

      <div className={styles.summary}>
        <span className={styles.title}>Receitas</span>
        <span className={styles.amount}>R$3000,00</span>
        <p className={styles.footer}>Total de entradas</p>
      </div>

      <div className={styles.summary}>
        <span className={styles.title}>Despesas</span>
        <span className={styles.spent}>R$100,00</span>
        <p className={styles.footer}>Total de saídas</p>
      </div>
    </div>
  );
}
