import type { TransactionModel } from './transactionModel';

export type FinanceStateModel = {
  transactions: TransactionModel[];
  categories: string[];
  theme: 'light' | 'dark';
};
