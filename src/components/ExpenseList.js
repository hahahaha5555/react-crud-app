import React, { Component } from 'react'
import { MdDelete } from 'react-icons/md'; // 추가된 import 문
import './ExpenseList.css';
import ExpenseItem from './ExpenseItem';


//import React from 'react'

const ExpenseList = ({ expenses, initialExpenses, handleDelete, handleEdit, clearItems }) => {
  return (
    <>
        <ul className='list'>
          {initialExpenses.map(expense => {
            return (
                <ExpenseItem key={expense.id} expense={expense} 
                handleDelete={handleDelete} handleEdit={handleEdit}
                />
            )
          })}  
        </ul>
        {expenses.length > 0 ? 
        <button className='btn' onClick={clearItems}>
          목록 지우기
          <MdDelete className='btn-icon' />
        </button>
        : null
        }
      </>
  )
}

export default ExpenseList
/*
export default class ExpenseList extends Component {
  render() {
    return (
      <>
        <ul className='list'>
          {this.props.initialExpenses.map(expense => {
            return (
                <ExpenseItem key={expense.id} expense={expense} 
                handleDelete={this.props.handleDelete}
                />
            )
          })}  
        </ul>
        <button className='btn'>
            목록 지우기
        </button>
      </>
    )
  }
}
*/