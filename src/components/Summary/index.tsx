import { ArrowUpFromLine, Wallet, ArrowDownFromLine } from 'lucide-react';

import styles from './styles.module.css';

export function Summary() {
  return (
    <div className={styles.container}>
      <div className={styles.summary}>
        <span className={styles.title}>Saldo</span>
        <div className={styles.iconAmount}>
          <div className={styles.iconContainer}>
            <Wallet className={styles.greenIcon} />
          </div>
          <span className={styles.amount}>R$2900,00</span>
        </div>
        <p className={styles.footer}>Total disponível</p>
      </div>

      <div className={styles.summary}>
        <span className={styles.title}>Receitas</span>
        <div className={styles.iconAmount}>
          <div className={styles.iconContainer}>
            <ArrowUpFromLine className={styles.greenIcon} />
          </div>
          <span className={styles.amount}>R$3000,00</span>
        </div>
        <p className={styles.footer}>Total de entradas</p>
      </div>

      <div className={styles.summary}>
        <span className={styles.title}>Despesas</span>
        <div className={styles.iconAmount}>
          <div className={styles.iconContainer}>
            <ArrowDownFromLine className={styles.arrowDownFromLine} />
          </div>
          <span className={styles.spent}>R$100,00</span>
        </div>
        <p className={styles.footer}>Total de saídas</p>
      </div>
    </div>
  );
}
