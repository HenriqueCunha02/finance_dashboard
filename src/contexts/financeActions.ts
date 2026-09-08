import type { TransactionModel } from '../models/transactionModel';

export enum FinanceActionTypes {
  ADD_TRANSACTION = 'ADD_TRANSACTION',
  DELETE_TRANSACTION = 'DELETE_TRANSACTION',
  CREATE_CATEGORY = 'CREATE_CATEGORY',
}

export type FinanceActionModel =
  | { type: FinanceActionTypes.ADD_TRANSACTION; payload: TransactionModel }
  | { type: FinanceActionTypes.DELETE_TRANSACTION; payload: number }
  | { type: FinanceActionTypes.CREATE_CATEGORY; payload: string };
