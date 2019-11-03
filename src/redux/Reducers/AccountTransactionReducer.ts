import { ActionModel } from "../../shared/Models/ActionModel";
import {
  GET_TRANSACTIONS,
  GET_TRANSACTIONS_SUCCESS,
  GET_TRANSACTIONS_ERROR
} from "../Actions/AccountTransactionAction";

export const initialTransactionState = {
  transactions: []
};

export const accountTransactionReducer = (
  state: any = initialTransactionState,
  action: ActionModel
) => {
  switch (action.type) {
    case GET_TRANSACTIONS:
      return { ...state };
    case GET_TRANSACTIONS_SUCCESS:
      return { ...state, transactions: action.payload.result };
    case GET_TRANSACTIONS_ERROR:
      return { ...state, transactions: action.payload.result };
    default:
      return state;
  }
};
