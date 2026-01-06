import React, { useState } from 'react'

interface OrderFormProps {
    onSubmit(order: { name: String; cups: Number }): void
}

const OrderForm = ({ onSubmit }: OrderFormProps) => {
    const [name, setName] = useState<string>("Masala");
    const [cups, setCups] = useState<number>(1);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSubmit({ name, cups })
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Name:</label>
            <input
                type='text'
                value={name}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
            />
            <label>Cups:</label>
            <input
                type='number'
                value={cups}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCups(Number(e.target.value))} // so as usual input always return a string for safety we just bounded this
            />
            <button type='submit'>Submit</button>
        </form>
    )
}

export default OrderForm