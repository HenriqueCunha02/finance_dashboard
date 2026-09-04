import {
  ArrowDownFromLine,
  ArrowUpFromLine,
  ListSortDescending,
  Trash,
} from 'lucide-react';

import type { TransactionModel } from '../../models/transactionModel';

import styles from './styles.module.css';

type TransactionListProps = {
  transactions: TransactionModel[];
};

export function TransactionList({ transactions }: TransactionListProps) {
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
        {transactions.map(transaction => (
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
              <button className={styles.trashButton} type='button'>
                <Trash className={styles.trashIcon} />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
