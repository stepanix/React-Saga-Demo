
import { ActionModel } from "../../shared/Models/ActionModel";
import { GET_TRANSACTIONS, GET_TRANSACTIONS_SUCCESS, GET_TRANSACTIONS_ERROR } from "../Actions/AccountTransactionAction";

export const initialTransactionState = {
   data: []
};

export const accountTransactionReducer = (state: any = initialTransactionState, action: ActionModel) => {
   switch (action.type) {
      case GET_TRANSACTIONS:
         return { ...state, loading: true };
      case GET_TRANSACTIONS_SUCCESS:
         return { ...state, loading: false, result: action.payLoad.result };
      case GET_TRANSACTIONS_ERROR:
               return { ...state, loading: false, result: action.payLoad.result };
      default:
         return state;
   }
};