import { createContext } from 'react';
import type { FinanceStateModel } from '../models/financeStateModel';
import type { FinanceActionModel } from './financeActions';

export type FinanceContextModel = {
  state: FinanceStateModel;
  dispatch: React.Dispatch<FinanceActionModel>;
};

export const FinanceContext = createContext<FinanceContextModel | null>(null);
