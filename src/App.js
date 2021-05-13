import './App.css';
import AccountStatus from './components/AccountStatus';
import Auth from './components/Auth';
import Balance from './components/Balance';
import Banking from './components/Banking';



function App() {
  return (
    <div className="App">
     <Auth/>
     <AccountStatus/>
     <Balance/>
     <Banking/>
    </div> 
  );
}

export default App;

