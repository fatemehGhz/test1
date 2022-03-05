import logo from './logo.svg';
import './App.css';
import ExpenseItem from "./component/ExpenseItem";

function App() {
  return (
    <div className="App">
       <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <ExpenseItem></ExpenseItem>

        <a
          className="App-link"
          href="https://reactjs.org"

          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

      </header>
      <ExpenseItem></ExpenseItem>
    </div>

  );
}

export default App;
