import { useEffect, useReducer } from 'react';

import { FinanceReducer } from '../reducers/financeReducer';
import { FinanceContext } from './FinanceContext';

import type { FinanceStateModel } from '../models/financeStateModel';

type FinanceProviderProps = {
  children: React.ReactNode;
};

const defaultState: FinanceStateModel = {
  transactions: [],
  categories: ['Salário'],
  theme: 'dark',
};

localStorage.removeItem('finance-dashboard');

export function FinanceProvider({ children }: FinanceProviderProps) {
  const [state, dispatch] = useReducer(FinanceReducer, defaultState);

  useEffect(() => {
    document.documentElement.dataset.theme = state.theme;
  }, [state.theme]);

  useEffect(() => {
    localStorage.setItem('finance-dashboard', JSON.stringify(state));
  }, [state]);

  return (
    <FinanceContext.Provider value={{ state, dispatch }}>
      {children}
    </FinanceContext.Provider>
  );
}
