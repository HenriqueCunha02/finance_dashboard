import type { TransactionModel } from '../models/transactionModel';

export enum FinanceActionTypes {
  ADD_TRANSACTION = 'ADD_TRANSACTION',
}

export type FinanceActionModel = {
  type: FinanceActionTypes.ADD_TRANSACTION;
  payload: TransactionModel;
};
