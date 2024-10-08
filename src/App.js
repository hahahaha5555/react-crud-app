//import { Component } from "react";
import { Component, useState } from "react"; // useState 추가
import "./App.css";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";

//export default class App extends Component {
const App = () => {
 /* constructor(props) {
    super(props);
    this.state = {
      expenses: [
        { id: 1, charge: '콜라', amount: '2000'},
        { id: 2, charge: '빵', amount: '1000'},
        { id: 3, charge: '맥북', amount: '20000'},
      ]
    }
  } */

  const [charge, setCharge] = useState("");
  const [amount, setAmount] = useState(0);
  
  const handleCharge = (e) => {
    setCharge(e.target.value);
  }

  const handleAmount = (e) => {
    setAmount(e.target.valueAsNumber);
  }

  const [expenses, setExpenses] = useState([
        { id: 1, charge: '콜라', amount: '2000'},
        { id: 2, charge: '빵', amount: '1000'},
        { id: 3, charge: '맥북', amount: '20000'},
  ])

  //handleDelete = (id) => {
  const handleDelete = (id) => {
    //const newExpense = this.state.expenses.filter(expense => expense.id !== id)
    const newExpense = expenses.filter(expense => expense.id !== id)
    //this.setState({ expenses: newExpense })
    setExpenses(newExpense)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(charge !=="" && amount > 0) {
      const newExpense = { id: crypto.randomUUID(), charge, amount }

      const newExpenses = [...expenses, newExpense];
      setExpenses(newExpenses);
      setCharge("");
      setAmount(0);
      
    } else {
      console.error('error');
    }
  }

  //render() {
    return (
      <main className="main-container">
        <div className="sub-container">
          <h1>장바구니</h1>

          <div style={{ width: '100%', backgroundColor: 'white', padding: '1rem'}}>
            {/* Expense Form */}
            <ExpenseForm charge={charge} handleSubmit={handleSubmit} handleCharge={handleCharge} amount={amount} handleAmount={handleAmount} />
          </div>

          <div style={{ width: '100%', backgroundColor: 'white', padding: '1rem'}}>
            {/* Expense List */}
            <ExpenseList initialExpenses={expenses} handleDelete={handleDelete} />
          </div>

          <div style={{ display: 'flex', justifyContent: 'start', marginTop: '1rem'}}>
            <p style={{ fontSize: '2rem' }}>
            총합계
            </p>
          </div>

        </div>
      </main>
    )
  //}
}

export default App;
