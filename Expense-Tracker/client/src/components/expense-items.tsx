import Table from 'react-bootstrap/Table';
import IExpenseItem from "../models/expense";
import {format} from "date-fns"; 

type ExpenseItemsModel={
    expenseItems:IExpenseItem[]; 
}
const ExpenseItems = ({expenseItems}:ExpenseItemsModel) => {
    const convertDateAsString=(date:string)=>{
        return format(new Date(date),"yyyy-MM-dd");
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

            </tbody>
        </Table>
    );
}
export default ExpenseItems;