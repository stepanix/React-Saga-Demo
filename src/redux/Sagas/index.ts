/**
 *  Saga watchers listen to actions dispatched from components and take action based on
 *  the particular action dispatched.
 */

import { all } from "redux-saga/effects";
import { actionListTransactionWatcher } from "./AccountTransactionSaga";

/**
 *  setup all saga watchers
 */
export default function* appWatcherSagas() {
    yield all([
        actionListTransactionWatcher(),
    ]);
 }