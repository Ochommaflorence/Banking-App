import React from 'react';

const Banking = () => {
  return (
    <div className="form-group">
        <input type="text" className="form-control"/>
        <button className="btn btn-success">Deposit</button>
        <button className="btn btn-primary">Withdrawel</button>
        <button className="btn btn-warning">collect intrest</button>
        <button className="btn btn-danger">Delete Account</button>
        <button className="btn btn-secondary">Change Account Type</button>
      
    </div>
  );
}

export default Banking;
