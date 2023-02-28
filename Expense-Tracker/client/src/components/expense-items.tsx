import React from "react";
import Table from 'react-bootstrap/Table';
import IExpenseItem from "../models/expense";
import {format} from "date-fns";


const ExpenseItems = () => {

    const defaultExpenseItems:IExpenseItem[]=[
        {
            "expenseDescription": "Bought Fridge",
            "payeeName": "Sahithi",
            "price": 15000,
            "date": new Date(),
            "id": 1
        },
        {
            "expenseDescription": "Paid Internet Bill",
            "payeeName": "Suchi",
            "price": 2000,
            "date": new Date(),
            "id": 2
        }
    ]

    const convertDateAsString=(date:Date)=>{
        return format(date,"yyyy-MM-dd");
    }
   
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Expense Description</th>
                    <th>Payee</th>
                    <th>Expense Date</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {
                    defaultExpenseItems.map((expenseItem: IExpenseItem,index) => {
                        return (
                            <tr>
                                <td>{index+1}</td>
                                <td>{expenseItem.expenseDescription}</td>
                                <td>{expenseItem.payeeName}</td>
                                <td>{convertDateAsString(expenseItem.date)}</td>
                                <td>{expenseItem.price}</td>
                            </tr>
                        )
                    })
                }

            </tbody>
        </Table>
    );
}
export default ExpenseItems;