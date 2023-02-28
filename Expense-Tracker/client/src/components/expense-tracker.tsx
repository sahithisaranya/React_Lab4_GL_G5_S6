import React from "react";
import { useEffect } from "react";
import { getAllExpenseItems } from "../services/expense-service";
import { Container } from "react-bootstrap";
import ExpenseItems from "./expense-items";
const ExpenseTracker = () => {
    useEffect(() => {
        const invokeGetAllExpenseItems = async () => {
            try {
                const response = await getAllExpenseItems();
                console.log(response);
            }
            catch (error) {
                console.log(error);
            }
        }

        invokeGetAllExpenseItems();

    }, [])
    return (
        <Container>
            <h2>Expense Items</h2>
            <ExpenseItems></ExpenseItems>
        </Container>
    )
}
export { ExpenseTracker }