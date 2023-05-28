import logo from './logo.svg';
import './App.css';
import AppBar from './components/appbar/AppBar';
import Payment from './components/payments/Payment';

function App() {
  return (
    <div className="App">
      <AppBar />
      <Payment />
    </div>
  );
}

export default App;
