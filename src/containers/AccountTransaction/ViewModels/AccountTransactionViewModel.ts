import { AccountModel } from "../Models/AccountModel";

/* *
 * View Models should be used for simple or complex business logic and return result(s) to 
 * the view layer.
 * The aim is to keep the presentation layer as dumb / thin as possible.
 * */


export const processAccountTransactions = (transactions: AccountModel[], address: string): any[] => {
  if(transactions.length > 0) {
    let myOutGoingTransactions: Array<AccountModel> =  transactions.filter((trans: AccountModel) => trans.from.toLowerCase() === address.toLowerCase());
    let myTopTenOutGoingTransactions = getTopTenTransactions(myOutGoingTransactions);
    return myTopTenOutGoingTransactions.sort((a: AccountModel, b: AccountModel) => a.nonce < b.nonce ? -1: 1).reverse();
  }
  return [];
}

const getTopTenTransactions = (trans: Array<AccountModel>) => {
    return trans.sort((a: AccountModel, b: AccountModel) => a.value < b.value ? -1 : 1).reverse().slice(0, 10);
}

