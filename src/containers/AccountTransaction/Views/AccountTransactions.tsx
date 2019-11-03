import React from "react";
import { filterAccountTransactions } from "../ViewModels/AccountTransactionViewModel";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as selectors from '../../../redux/Selectors/AccountTransactionSelector';

const AccountTransactions: React.FC = () => {

  return (
    <div>
      
    </div>
  );
}

const mapStateToProps = (state: any) => ({
  // get state from account transaction selector
  accountTransactions: selectors.accountTransactions(state)
});

const mapDispatchToProps = (dispatch: any) => ({
  boardClicked: bindActionCreators(actions.boardClicked, dispatch),
  jumpTo: bindActionCreators(UndoActionCreators.jump, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(AccountTransactions);