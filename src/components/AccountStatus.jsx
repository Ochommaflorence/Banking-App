import React from 'react';
import {useSelector} from 'react-redux';

const AccountStatus = () => {
  const isSavingsAccount = useSelector(state => state.banking.isSavingsAccount)
  return (
    <div>
      <h1>{isSavingsAccount? "Savings Account" : "checking Account"}</h1>
    </div>
  );
}

export default AccountStatus;
