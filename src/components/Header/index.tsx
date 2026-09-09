import { MoonIcon, SunIcon } from 'lucide-react';
import styles from './styles.module.css';
import { useFinanceContext } from '../../contexts/useFinanceContext';
import { FinanceActionTypes } from '../../contexts/financeActions';
import toast from 'react-hot-toast';

export function Header() {
  const { state, dispatch } = useFinanceContext();

  function handleToggleTheme() {
    dispatch({ type: FinanceActionTypes.TOGGLE_THEME });

    return state.theme !== 'dark'
      ? toast('Escureceu!', {
          icon: '🌑',
          style: {
            borderRadius: '6px',
            background: '#f8f9fa',
            color: '#000',
          },
        })
      : toast('Clareou!', {
          icon: '🌞',
          style: {
            borderRadius: '6px',
            background: '#f8f9fa',
            color: '#000',
          },
        });

    toast('Hello Darkness!', {
      icon: '👏',
      style: {
        borderRadius: '10px',
        background: '#333',
        color: '#fff',
      },
    });
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
