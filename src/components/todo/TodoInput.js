import React, { useState } from "react";

const TodoInput = () => {
  const [todo, setTodo] = useState("");
  return (
    <form>
      <input className="todo-input" type="text" placeholder="Add Todo" onChange={(e)=>setTodo(e.target.value)}/>
      <button type="submit" className="add-button">
        Add
      </button>
    </form>
  );
};

export default TodoInput;
