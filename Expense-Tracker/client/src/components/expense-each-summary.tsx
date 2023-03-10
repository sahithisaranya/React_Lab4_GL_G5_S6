import React from 'react';
import Table from 'react-bootstrap/Table';
import IExpenseItem from '../models/expense';
import {getUniquePayeeNames,getGrandTotal,getTotalByPayee} from '../services/expense-utils';


type ExpenseEachModel={
    expenseItems:IExpenseItem[];
}

const ExpenseEachSummary=({expenseItems}:ExpenseEachModel)=>{

    const uniquePayeeNames=getUniquePayeeNames(expenseItems);

    return(
        <Table striped bordered hover>
        <thead>
            <tr>
                <th>#</th>
                <th>Payee Name</th>
                <th>Total Contribution</th>
            </tr>
        </thead>
        <tbody>
            {
                uniquePayeeNames.map((payeeName,index) => {
                    return (
                        <tr>
                            <td>{index+1}</td>
                            <td>{payeeName}</td>
                           <td>{getTotalByPayee(payeeName,expenseItems)}</td>
                        </tr>
                    )
                })
            }
             <tr>
                <td> </td>
                <td>GRAND TOTAL</td>
                <td>{getGrandTotal(expenseItems)}</td>
            </tr>
        </tbody> 
    </Table>
        
    );
}
export default ExpenseEachSummary;