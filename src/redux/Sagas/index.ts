import { all } from "redux-saga/effects";
import { actionListTransactionWatcher } from "./AccountTransactionSaga";


export default function* appWatcherSagas() {
    yield all([
        actionListTransactionWatcher(),
    ]);
 }