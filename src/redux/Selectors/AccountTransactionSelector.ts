/** 
 * It is a best practice to keep your Redux store state minimal and derive data from the state as needed 
 * Selectors play a major role in achieving this.
 * */
import { createSelector } from 'reselect';

/* *
 * accountTransactionsDataSelector is used to get data from the accountTransactions state 
 * */
const accountTransactionsDataSelector = (state: any) => state.accountTransactions;

/* *
 * accountTransactions is a function that returns data from account transactions state
 * via the accountTransactionsDataSelector
 * */
export const accountTransactions = createSelector(
    accountTransactionsDataSelector,
    (state: any) => state.transactions
);