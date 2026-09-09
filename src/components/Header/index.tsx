import { MoonIcon, SunIcon } from 'lucide-react';
import styles from './styles.module.css';
import { useFinanceContext } from '../../contexts/useFinanceContext';
import { FinanceActionTypes } from '../../contexts/financeActions';

export function Header() {
  const { state, dispatch } = useFinanceContext();

  function handleToggleTheme() {
    dispatch({ type: FinanceActionTypes.TOGGLE_THEME });
  }

  return (
    <div className={styles.container}>
      <span className={styles.title}>
        <span className={styles.bold}>Dashboard</span> Financeiro
      </span>
      {state.theme === 'dark' ? (
        <button
          className={styles.buttonTheme}
          type='button'
          onClick={handleToggleTheme}
        >
          <SunIcon className={styles.icon} strokeWidth={3} />
        </button>
      ) : (
        <button
          className={styles.buttonTheme}
          type='button'
          onClick={handleToggleTheme}
        >
          <MoonIcon className={styles.icon} strokeWidth={3} />
        </button>
      )}
    </div>
  );
}
