import { useState } from "react"
import ExpenseForm from "./ExpenseForm"
import IncomeForm from "./IncomeForm"

export default function SubmissionForm() {
     const [OpenTab , setOpenTab] = useState('expense')
  return (
    <div className="p-6 py-8 bg-[#F9FAFB] border rounded-md">
    <h2 className="text-3xl font-semibold leading-7 text-gray-800 text-center">Expense Tracker</h2>
    <div
      className="flex divide-x divide-slate-400/20 overflow-hidden rounded-md bg-white text-[0.8125rem] font-medium leading-5 text-slate-700 shadow-sm ring-1 ring-slate-700/10 mt-6"
    >
      <div onClick={()=> setOpenTab('expense')} className={`cursor-pointer  text-center flex-1 px-4 py-2 hover:bg-slate-50 hover:text-slate-900 ${OpenTab
         == 'expense' ? 'active' : ''
      }`}>
        Expense
      </div>
      <div onClick={()=> setOpenTab('income')} className={`cursor-pointer text-center flex-1 px-4 py-2 hover:bg-slate-50 hover:text-slate-900 ${OpenTab == 'income' ? 'active' : ""}`}>
        Income
      </div>
    </div>
     {
      OpenTab == 'expense' && <ExpenseForm />
     }
     {
      OpenTab == 'income' && <IncomeForm />
     }
  </div>
  )
}
