import { useEffect, useReducer } from 'react';
import { FinanceReducer } from '../reducers/financeReducer';
import { FinanceContext } from './FinanceContext';
import type { FinanceStateModel } from '../models/financeStateModel';

const initialState: FinanceStateModel = {
  transactions: [],
  categories: ['Mercado', 'Salário'],
  theme: 'dark',
};

type FinanceProviderProps = {
  children: React.ReactNode;
};

export function FinanceProvider({ children }: FinanceProviderProps) {
  const [state, dispatch] = useReducer(FinanceReducer, initialState);

  useEffect(() => {
    document.documentElement.dataset.theme = state.theme;
  }, [state.theme]);

  return (
    <FinanceContext.Provider value={{ state, dispatch }}>
      {children}
    </FinanceContext.Provider>
  );
}
