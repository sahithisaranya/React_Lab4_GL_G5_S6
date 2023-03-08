import React from 'react';
import Table from 'react-bootstrap/Table';
import IExpenseItem from '../models/expense';
import {getUniquePayeeNames,getGrandTotal,getTotalByPayee} from '../services/expense-utils';


type ExpenseByPendingAmountModel={
    expenseItems:IExpenseItem[];
}

const ExpenseByPendingAmount=({expenseItems}:ExpenseByPendingAmountModel)=>{

    const uniquePayeeNames=getUniquePayeeNames(expenseItems);

    const getPendingAmount=(payeeName:string)=>{
        const totalExpenses=getGrandTotal(expenseItems);
        const totalExpenseByPayee=getTotalByPayee(payeeName,expenseItems);

        const halfAmount=totalExpenses/2;

        if(totalExpenseByPayee>=halfAmount){
            return 0;
        }
        else{
            return (halfAmount-totalExpenseByPayee);
        }
    }

    return(
        <Table striped bordered hover>
        <thead>
            <tr>
                <th>#</th>
                <th>Payee{`<=>`}Payee</th>
                <th>Pending Amount</th>
            </tr>
        </thead>
        <tbody>
            {
                uniquePayeeNames.map((payeeName,index) => {
                    return (
                        <tr>
                            <td>{index+1}</td>
                            <td>{payeeName}</td>
                           <td>{getPendingAmount(payeeName)}</td>
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
export default ExpenseByPendingAmount;