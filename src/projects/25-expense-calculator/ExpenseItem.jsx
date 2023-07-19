import React from 'react'
import {MdEdit, MdDelete} from 'react-icons/md'
import { ExpenseItemStyle } from './style/ExpenseItemStyle'
const ExpenseItem = ({expense,handleItemEdit,handleItemDelete}) => {
  return (
    <ExpenseItemStyle className='  my-3 flex items-center justify-between'>
      <div className="flex flex-col items-start">
        <h4 className=' font-bold'>{expense.name}</h4>
        <small className=' text-red-500'>{expense.date}</small>
      </div>
      <div className="">
        <p className=' text-green-600'>{expense.amount}</p>
      </div>
      <div className=" flex gap-3">
        <button className=' btn btn-primary' onClick={()=>handleItemEdit(expense.id)}><MdEdit/></button>
        <button className=' btn btn-danger' onClick={()=>handleItemDelete(expense.id)}><MdDelete/></button>
      </div>
    </ExpenseItemStyle>
  )
}

export default ExpenseItem
