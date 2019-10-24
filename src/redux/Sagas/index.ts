import { all } from "redux-saga/effects";
import { actionListTransactionWatcher } from "./AccountTransactionSaga";


export default function* indexWatcherSagas() {
    yield all([
        actionListTransactionWatcher(),
    ]);
 }