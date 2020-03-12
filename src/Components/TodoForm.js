import React, { useState, useContext } from 'react';
import TodosContext from '../context';

export default function TodoForm() {
    const [todo, setTodo] = useState();

    const handleSubmit = event => {
        event.preventDefault();

    }

    return (
        <form onSubmit={handleSubmit} className="flex justify-center p-5">
            <input 
                type="text"
                className="border-black border-solid border-2"
                onChange={event => setTodo(event.target.value)}
            />
        </form>
    )
}

