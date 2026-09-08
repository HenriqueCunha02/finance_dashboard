import {
  FinanceActionTypes,
  type FinanceActionModel,
} from '../contexts/financeActions';
import type { FinanceStateModel } from '../models/financeStateModel';

export function FinanceReducer(
  state: FinanceStateModel,
  action: FinanceActionModel,
) {
  switch (action.type) {
    case FinanceActionTypes.ADD_TRANSACTION: {
      return {
        ...state,
        transactions: [...state.transactions, action.payload],
      };
    }
    default:
      return state;
  }
}
