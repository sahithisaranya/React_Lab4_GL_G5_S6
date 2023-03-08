import Button from 'react-bootstrap/Button';
import React, { useState, useRef } from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { getUniquePayeeNames } from '../services/expense-utils';
import IExpenseItem, { IExpenseCreateItem } from '../models/expense';
import { FormEvent } from 'react';
import { postExpenseItem } from '../services/expense-service';

type ExpenseCreatorModel = {
    expenseItems: IExpenseItem[];
    refreshParent:(newlyCreatedExpenseItem:IExpenseItem)=>void;
}
const CreateExpense = ({ expenseItems, refreshParent }: ExpenseCreatorModel) => {
    const expenseDescRef = useRef<HTMLInputElement>(null);
    const payeeNameRef = useRef<HTMLSelectElement>(null);
    const priceRef = useRef<HTMLInputElement>(null);
    const expenseDateRef = useRef<HTMLInputElement>(null);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const uniquePayeeNames = getUniquePayeeNames(expenseItems);

    const handleAddExpenseItem = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const expenseDesc = expenseDescRef?.current?.value as string;
        const payeeName = payeeNameRef?.current?.value as string;
        const price = parseFloat(priceRef?.current?.value as string);
        const expenseDate = (new Date(expenseDateRef?.current?.value as string)).toDateString();
        console.log(expenseDesc);
        console.log(payeeName);
        console.log(price);
        console.log(expenseDate);

        const newExpenseItem: IExpenseCreateItem = {
            expenseDescription: expenseDesc,
            payeeName: payeeName,
            price: price,
            date: expenseDate
        }

        //post api
        const newlyCreatedExpenseItem= await postExpenseItem(newExpenseItem);

        console.log("New expense item object = "+JSON.stringify(newlyCreatedExpenseItem));
        
        refreshParent(newlyCreatedExpenseItem);
        
        handleClose();
    }

    return (
        <>
            <Button variant="primary" className='float-end' onClick={handleShow}>Add Expense Item</Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Expense Item</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Form onSubmit={handleAddExpenseItem}>

                        <Form.Group className="mb-3" controlId="expenseDescription">
                            <Form.Label>Expense Description</Form.Label>
                            <Form.Control type="text" placeholder="Enter expense description" ref={expenseDescRef} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="payeeName">
                            <Form.Label>Payee</Form.Label>
                            <Form.Select aria-label="Default select example" ref={payeeNameRef}>
                                <option>--select payee--</option>
                                {
                                    uniquePayeeNames.map((payeeName) => {
                                        return (
                                            <option value={payeeName}>{payeeName}</option>
                                        )
                                    })
                                }
                            </Form.Select>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="price">
                            <Form.Label>Price</Form.Label>
                            <Form.Control type="number" placeholder="Enter price" ref={priceRef} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="expenseDate">
                            <Form.Label>Expense Date</Form.Label>
                            <Form.Control type="date" ref={expenseDateRef} />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Add
                        </Button>

                        <Button variant="secondary" className='float-end' onClick={handleClose}>
                            Close
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>

        </>
    )
}

export default CreateExpense;