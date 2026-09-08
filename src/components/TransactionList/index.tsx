import {
  ArrowDownFromLine,
  ArrowUpFromLine,
  ListSortDescending,
  Trash,
} from 'lucide-react';

import styles from './styles.module.css';
import { useFinanceContext } from '../../contexts/useFinanceContext';
import { FinanceActionTypes } from '../../contexts/financeActions';

export function TransactionList() {
  const { state, dispatch } = useFinanceContext();

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
        {state.transactions.map(transaction => (
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
                  {' '}
                  + R${transaction.amount}{' '}
                </span>
              ) : (
                <span className={styles.amountNegative}>
                  {' '}
                  - R${transaction.amount}{' '}
                </span>
              )}
            </div>

            <div className={styles.trasationRight}>
              <span>{transaction.date}</span>
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
