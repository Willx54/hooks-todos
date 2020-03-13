import React, { useState, useEffect, useContext } from "react";
import TodosContext from "../context";

export default function TodoForm() {
  const [todo, setTodo] = useState();
  const {
    state: { currentTodo = {} },
    dispatch
  } = useContext(TodosContext);

  const handleSubmit = event => {
    event.preventDefault();
    console.log("currentTodo: ", currentTodo);
    console.log("todo (before): ", todo);
    if (currentTodo.text) {
      dispatch({ type: "UPDATE_TODO", payload: todo });
    } else {
      dispatch({ type: "ADD_TODO", payload: todo });
    }

    setTodo("");
    console.log("todo (after): ", todo);
  };

  useEffect(() => {
    if (currentTodo.text) {
      setTodo(currentTodo.text);
    } else {
      setTodo("");
    }
  }, [currentTodo.id]);

  return (
    <form onSubmit={handleSubmit} className="flex justify-center p-5">
      <input
        type="text"
        className="border-black border-solid border-2"
        onChange={event => setTodo(event.target.value)}
        value={todo}
      />
    </form>
  );
}
