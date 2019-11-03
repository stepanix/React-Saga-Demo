import React from 'react';
import './App.css';
import AccountTransactions from './containers/AccountTransaction/Views/AccountTransactions';

const App: React.FC = () => {
 

  return (
    <div>
      <AccountTransactions address={"0xfFfa5813ED9a5DB4880D7303DB7d0cBe41bC771F"} />
    </div>
  );
}

export default App;
