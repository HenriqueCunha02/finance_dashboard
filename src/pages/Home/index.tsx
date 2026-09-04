import { useState } from 'react';
import { Header } from '../../components/Header';
import { Summary } from '../../components/Summary';
import { TransactionForm } from '../../components/TransactionForm';
import { TransactionList } from '../../components/TransactionList';

import styles from './styles.module.css';
import type { TransactionModel } from '../../models/transactionModel';

export function Home() {
  const [transactions, setTransactions] = useState<TransactionModel[]>([
    {
      id: 1,
      description: 'Sálario',
      amount: 3500,
      type: 'income',
      category: 'Trabalho',
      date: '12/08/2026',
    },
    {
      id: 2,
      description: 'Mercado',
      amount: 123.56,
      type: 'expense',
      category: 'Alimentacao',
      date: '11/08/2026',
    },
  ]);

  function handleDeleteTransaction(id: number) {
    setTransactions(prevTransactions =>
      prevTransactions.filter(transaction => transaction.id !== id),
    );
  }

  return (
    <div>
      <Header />
      <Summary />
      <div className={styles.container}>
        <TransactionForm setTransactions={setTransactions} />
        <TransactionList
          transactions={transactions}
          onRemoveTransaction={handleDeleteTransaction}
        />
      </div>

      <div className={styles.div}>
        <footer>2026 Finance Dashboard. Todos os direitos reservados.</footer>
      </div>
    </div>
  );
}
