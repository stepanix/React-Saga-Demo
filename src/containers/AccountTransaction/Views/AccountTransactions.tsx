import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { GET_TRANSACTIONS } from "../../../redux/Actions/AccountTransactionAction";
import { ActionModel } from "../../../shared/Models/ActionModel";
import { processAccountTransactions } from "../ViewModels/AccountTransactionViewModel";
import { AccountModel } from "../Models/AccountModel";

// function to dispatch account transaction action.
const accountTransactionAction = (data: string): ActionModel => ({
  type: GET_TRANSACTIONS,
  payload: data
});

const AccountTransactions = (props: any) => {
  // useDispatch hook is used to dispatch redux actions from presentation layer
  const dispatch = useDispatch();

  // useSelector hook is used to get data state from redux store.
  const transactions = useSelector((state: any) => state.accountTransactions.transactions);

  // useEffects hook is used for lifecycle management in Functional Components.
  useEffect(() => {
    // dispatch GET_TRANSACTIONS action.
    dispatch(accountTransactionAction(props.address));
  }, []);

  // function to render transaction list to be displayed.
  const renderTransactionList = () => {
    const processedTransactionList = processAccountTransactions(transactions, props.address);

    const listItems = processedTransactionList.map((item: AccountModel) => (
      <tr key={item.blockHash}>
        <td>{item.nonce}</td>
        <td>{item.to}</td>
        <td>{item.value}</td>
      </tr>
    ));

    return (
      <div className="table-responsive">
        <table className="table table-striped eth-table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Nonce</th>
              <th scope="col">To</th>
              <th scope="col">Value</th>
            </tr>
          </thead>
          <tbody>{listItems}</tbody>
        </table>
      </div>
    );
  };
  
  return <div>{renderTransactionList()}</div>;
};

export default AccountTransactions;
