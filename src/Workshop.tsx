
import React from "react";
import { useState, useEffect } from "react";

function Workshop() {


    const [inputValue, setInputValue] = useState<string>("");
    const [todos, setTodos] = useState<string[]>([]);
  
    const handleChange = (e:any) => {
      setInputValue(e.target.value);
    };
  
    const addTodos = () => {
      setTodos([...todos, inputValue]);
      setInputValue("");
    };
  
    const removeTodos = (index:number) => {
      let updatedTodos = todos.filter((_,i)=> i !== index)
      setTodos(updatedTodos);
    }


  

    return(<>
        <div className="center">
          <p>To Do List</p>
          <input type="text" value={inputValue} onChange={handleChange} />
          <button type="button" onClick={()=> { addTodos()}} className="addButton, btn btn-primary">
            Add
          </button>
          <ul>
            {todos.map((todo, index) => (
              <li key={index} >
               <span>{todo}</span> 
                <span className="delete"><button onClick={() => {return removeTodos(index)}} className="btn btn-primary">Delete</button></span>
              </li>
            ))}
          </ul>
        </div>
      </>);
}

export default Workshop;