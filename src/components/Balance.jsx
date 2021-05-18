import React  from 'react';
import { useSelector} from "react-redux";

const Balance = () => {
const balance = useSelector((state) => state.banking.balance);
// console.log(store);
  return (
    <div>
      <h1>${balance}</h1>
    </div>
  );
}

export default Balance;
