import Balance from "./Balance";
import ExpenseList from "./Expense-List";
import IncomeList from "./Income-List";

export default function RightSection() {
  return (
    <div className="lg:col-span-2">
      {/*
    <!-- Total Balance Stat-->
    */}
      <div className="bg-white">
        <div className="mx-auto max-w-7xl">
           <Balance />
        </div>
      </div>

      {/*
    <!-- List Down -->
    */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-8">
        {/*
        <!-- Income -->
        */}
        <IncomeList />

        {/*
        <!-- expensive -->
        */}
        <ExpenseList />
      </div>
    </div>
  );
}
