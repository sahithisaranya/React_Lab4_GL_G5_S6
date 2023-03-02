import React from 'react';
import Table from 'react-bootstrap/Table';
import IExpenseItem from '../models/expense';

type ExpenseEachModel={
    expenseItems:IExpenseItem[];
}

const ExpenseEachSummary=({expenseItems}:ExpenseEachModel)=>{

    const getUniquePayeeNames=(expenseItems:IExpenseItem[])=>{
        const uniqueNames:string[]=[];
        expenseItems.forEach((expenseItem)=>{
            let payeeName=expenseItem.payeeName;

        })
    }
    return(
        <Table striped bordered hover>
        <thead>
            <tr>
                <th>#</th>
                <th>Payee Name</th>
                <th>Total Contribution</th>
            </tr>
        </thead>
        {/* <tbody>
            {
                expenseItems.map((expenseItem: IExpenseItem,index) => {
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

        </tbody> */}
    </Table>
        
    );
}
export default ExpenseEachSummary;