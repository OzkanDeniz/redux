import React from "react";

import deleteLogo from "../../assets/delete.png";



const TodoItem = () => {



  return (
    <div
    style={{textDecoration:gorev.completed ? "line-through": "none",
    background:gorev.completed ? "lightgray": "orange"
    
    
    }}
      className="todo-list"
    >
      <h2 className="todoText"></h2>
      <div>
        <span>
          <img
            src={okLogo}
            className="ok-logo"
            alt="ok logo"
           

          
          />
        </span>
        <span>
          <img
            src={deleteLogo}
            className="delete-logo"
            alt="delete logo"

            
          />
        </span>
      </div>
    </div>
  );
};

export default TodoItem;
