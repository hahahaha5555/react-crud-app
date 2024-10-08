import React, { Component } from 'react'
import './ExpenseItem.css';
import { MdDelete, MdEdit } from 'react-icons/md';

//import React from 'react'

const ExpenseItem = (props) => {
  return (
    <li className='item'>
        <div className='info'>
            <span className='expense'>{props.expense.charge}</span>
            <span className='amount'>{props.expense.amount}</span>
        </div>
        <div>
            <button className='edit-btn'><MdEdit /></button>
            <button 
            onClick={() => props.handleDelete(props.expense.id)}
            className='clear-btn'><MdDelete /></button>
        </div>
      </li>
  )
}

export default ExpenseItem
/*
export default class ExpenseItem extends Component {
  render() {
    return (
      <li className='item'>
        <div className='info'>
            <span className='expense'>{this.props.expense.charge}</span>
            <span className='amount'>{this.props.expense.amount}</span>
        </div>
        <div>
            <button className='edit-btn'><MdEdit /></button>
            <button 
            onClick={() => this.props.handleDelete(this.props.expense.id)}
            className='clear-btn'><MdDelete /></button>
        </div>
      </li>
    )
  }
}
*/