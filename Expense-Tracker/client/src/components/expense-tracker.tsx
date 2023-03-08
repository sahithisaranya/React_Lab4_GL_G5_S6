import React from "react";
import { useEffect, useState } from "react";
import { getAllExpenseItems } from "../services/expense-service";
import { Container } from "react-bootstrap";
import ExpenseItems from "./expense-items";
import IExpenseItem from "../models/expense";
import ExpenseEachSummary from "./expense-each-summary";
import ExpenseByPendingAmount from "./expense-by-pending-amount";
import CreateExpense from "./create-expense";
const ExpenseTracker = () => {

    const [expenseItems,setExpenseItems]=
    useState<IExpenseItem[]>([])


    useEffect(() => {
        const invokeGetAllExpenseItems = async () => {
            try {
                const response = await getAllExpenseItems();
                console.log(response);
                setExpenseItems(response);
            }
            catch (error) {
                console.log(error);
            }
        }

        invokeGetAllExpenseItems();

    }, [])

    const refreshParentAfterNewAdd=(newlyCreatedExpenseItem:IExpenseItem)=>{
        setExpenseItems(
            [
                newlyCreatedExpenseItem,
                ...expenseItems
            ]
        )
    }
    return (
        <Container>
            <h2>Expense Items     
                <CreateExpense expenseItems={expenseItems} refreshParent={refreshParentAfterNewAdd}></CreateExpense>
            </h2>
            <ExpenseItems expenseItems={expenseItems}></ExpenseItems>
            <ExpenseEachSummary expenseItems={expenseItems}></ExpenseEachSummary>
            <ExpenseByPendingAmount expenseItems={expenseItems}></ExpenseByPendingAmount>
        </Container>
    )
}
export { ExpenseTracker }