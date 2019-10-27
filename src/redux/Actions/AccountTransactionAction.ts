import { ActionModel } from "../../shared/Models/ActionModel";

export const GET_TRANSACTIONS = 'GET_ALL_TRANSACTIONS';
export const GET_TRANSACTIONS_SUCCESS = 'GET_TRANSACTIONS_SUCCESS';
export const GET_TRANSACTIONS_ERROR = 'GET_TRANSACTIONS_ERROR';

export const getTransactions = (payload: string): ActionModel => {
    return { type: GET_TRANSACTIONS }
};

export const getTransactionsSuccess = (result: any) => {
    return { type: GET_TRANSACTIONS_SUCCESS, payload: result}
};

export const getTransactionsError = (result: any) => {
    return { type: GET_TRANSACTIONS_ERROR, payload: result}
};
