import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toogleAuth } from '../actions/bankingActions';

const Auth = () => {
  const auth = useSelector(state => state.auth);
  const dispatch = useDispatch()

const handleAuth = () => {
   dispatch(toogleAuth( ))
}
  return (
    <div className="mt-5">
      <button onClick={handleAuth}  className="btn btn-info">{auth.isLoggedIn ? "logout" :"login"}</button>
    </div>
  );
}

export default Auth;
