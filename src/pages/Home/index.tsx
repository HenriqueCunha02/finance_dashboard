import { Header } from '../../components/Header';
import { Summary } from '../../components/Summary';
import { TransactionForm } from '../../components/TransactionForm';
import { TransactionList } from '../../components/TransactionList';

import styles from './styles.module.css';

export function Home() {
  return (
    <div>
      <Header />
      <Summary />
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
