import { Header } from '../../components/Header';
import { Summary } from '../../components/Summary';
import { TransactionForm } from '../../components/TransactionForm';
import { TransactionList } from '../../components/TransactionList';

import styles from './styles.module.css';
import { useFinanceContext } from '../../contexts/useFinanceContext';

export function Home() {
  const { state } = useFinanceContext();

  return (
    <div>
      <Header />
      <Summary transactions={state.transactions} />
      <div className={styles.container}>
        <TransactionForm />
        <TransactionList />
      </div>

      <div className={styles.div}>
        <footer>2026 Finance Dashboard. Todos os direitos reservados.</footer>
      </div>
    </div>
  );
}
