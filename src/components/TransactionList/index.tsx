import {
  ArrowDownFromLine,
  ArrowUpFromLine,
  ListSortDescending,
  Trash,
} from 'lucide-react';

import styles from './styles.module.css';
import { useFinanceContext } from '../../contexts/useFinanceContext';
import { FinanceActionTypes } from '../../contexts/financeActions';
import { formatCurrency } from '../../utils/formatCurrency';
import { formatDate } from '../../utils/formatDate';

export function TransactionList() {
  const { state, dispatch } = useFinanceContext();

  const sortedTransactions = [...state.transactions].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );

  function handleDeleteTransaction(id: number) {
    dispatch({ type: FinanceActionTypes.DELETE_TRANSACTION, payload: id });
  }
  return (
    <div className={styles.container}>
      <div className={styles.headerContainer}>
        <ListSortDescending className={styles.listIcon} />
        <div className={styles.textContainer}>
          <h2>Transações</h2>
          <p>Lista das suas últimas movimentações</p>
        </div>
      </div>

      <ul>
        {sortedTransactions.map(transaction => (
          <li key={transaction.id}>
            <div className={styles.trasationLeft}>
              {transaction.type === 'income' ? (
                <ArrowUpFromLine className={styles.arrowUpIcon} />
              ) : (
                <ArrowDownFromLine className={styles.arrowDownIcon} />
              )}
              <div className={styles.transationDetails}>
                <span>{transaction.description}</span>
                <p>{transaction.category}</p>
              </div>
            </div>

            <div className={styles.trasationMiddle}>
              {transaction.type === 'income' ? (
                <span className={styles.amountPositive}>
                  + {formatCurrency(transaction.amount)}
                </span>
              ) : (
                <span className={styles.amountNegative}>
                  - {formatCurrency(transaction.amount)}
                </span>
              )}
            </div>

            <div className={styles.trasationRight}>
              <span>{formatDate(transaction.date)}</span>
              <button
                className={styles.trashButton}
                type='button'
                onClick={() => handleDeleteTransaction(transaction.id)}
              >
                <Trash className={styles.trashIcon} />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
