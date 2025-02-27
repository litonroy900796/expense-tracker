import React from 'react'

export default function ExpenseForm() {
  return (
    <form>
   

   
    <div className="mt-3">
      <label htmlFor="category" className="block text-sm font-medium leading-6 text-gray-900">Category</label>
      <div className="mt-2">
        <select
          id="category"
          name="category"
          autoComplete="category-name"
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
        >
          <option>Education</option>
          <option>Food</option>
          <option>Health</option>
          <option>Bill</option>
          <option>Insurance</option>
          <option>Tax</option>
          <option>Transport</option>
          <option>Telephone</option>
        </select>
      </div>
    </div>

    <div className="mt-3">
      <label htmlFor="amount" className="block text-sm font-medium leading-6 text-gray-900">Amount</label>
      <div className="mt-2">
        <input
          type="number"
          name="amount"
          id="amount"
          autoComplete="off"
          placeholder="12931"
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
        />
      </div>
    </div>

    <div className="mt-3">
      <label htmlFor="date" className="block text-sm font-medium leading-6 text-gray-900">Date</label>
      <div className="mt-2">
        <input
          type="date"
          name="date"
          id="date"
          autoComplete="off"
          placeholder="12931"
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
        />
      </div>
    </div>

    <button
      type="submit"
      className="mt-6 rounded-md bg-teal-600 px-8 py-2 text-sm font-semibold text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600 w-full"
    >
      Save
    </button>
  </form>
  )
}
