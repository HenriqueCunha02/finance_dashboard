import { ArrowUpFromLine, Wallet, ArrowDownFromLine } from 'lucide-react';

import styles from './styles.module.css';
import { useFinanceContext } from '../../contexts/useFinanceContext';
import { formatCurrency } from '../../utils/formatCurrency';

export function Summary() {
  const { state } = useFinanceContext();

  const income = state.transactions.reduce((acc, transaction) => {
    if (transaction.type === 'income') {
      return acc + transaction.amount;
    }
    return acc;
  }, 0);

  const expense = state.transactions.reduce((acc, transaction) => {
    if (transaction.type === 'expense') {
      return acc + transaction.amount;
    }
    return acc;
  }, 0);

  const balance = income - expense;

  return (
    <div className={styles.container}>
      <div className={styles.summary}>
        <span className={styles.title}>Saldo</span>
        <div className={styles.iconAmount}>
          <div className={styles.iconContainer}>
            <Wallet className={styles.greenIcon} />
          </div>
          <span className={styles.amount}>{formatCurrency(balance)}</span>
        </div>
        <p className={styles.footer}>Total disponível</p>
      </div>

      <div className={styles.summary}>
        <span className={styles.title}>Receitas</span>
        <div className={styles.iconAmount}>
          <div className={styles.iconContainer}>
            <ArrowUpFromLine className={styles.greenIcon} />
          </div>
          <span className={styles.amount}>{formatCurrency(income)}</span>
        </div>
        <p className={styles.footer}>Total de entradas</p>
      </div>

      <div className={styles.summary}>
        <span className={styles.title}>Despesas</span>
        <div className={styles.iconAmount}>
          <div className={styles.iconContainer}>
            <ArrowDownFromLine className={styles.arrowDownFromLine} />
          </div>
          <span className={styles.spent}>{formatCurrency(expense)}</span>
        </div>
        <p className={styles.footer}>Total de saídas</p>
      </div>
    </div>
  );
}
