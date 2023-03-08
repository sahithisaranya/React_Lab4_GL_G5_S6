import IExpenseItem from "../models/expense";

const getUniquePayeeNames=(expenseItems:IExpenseItem[])=>{
    const uniqueNames:string[]=[];
    expenseItems.forEach((expenseItem)=>{
        let payeeName=expenseItem.payeeName;
        if(!uniqueNames.includes(payeeName)){
            uniqueNames.push(payeeName);
        }
    })
    return uniqueNames;
}

const getGrandTotal=(expenseItems:IExpenseItem[])=>{
    let grandTotalAmount=0;

    expenseItems.forEach((expenseItem)=>{
        grandTotalAmount+=expenseItem.price;
    })
    return grandTotalAmount;
   }

const getTotalByPayee=(payeeName:string,expenseItems:IExpenseItem[])=>{
    let totalAmount=0;

    expenseItems.forEach((expenseItem)=>{
        if(expenseItem.payeeName===payeeName){
            totalAmount+=expenseItem.price;
        }
    })
    return totalAmount;
}

export {getUniquePayeeNames};
export { getGrandTotal};
export{getTotalByPayee};