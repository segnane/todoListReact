import React from "react";
import { useState } from "react";
import TodoItems from "./TodoItems";

function TodoList()
{
const [items,setItems]=useState([]);
const [text,setText]=useState('');
const addItem=(e)=>{
    e.preventDefault();
    if (text!==''){
        const newItem ={
            text:text,
            key:Date.now()
        };
       setItems([...items,newItem]);
       
      setText("");
      
    }

};
const deleteItem =(key)=>
{
    const filterItem=items.filter((item)=>item.key!==key);
    setItems(filterItem);

};
return(
    <div className="todoListMain">
        <div className="header">
            <form onSubmit={addItem}>
                <input type='text' value={text}  placeholder="Add a task" 
                onChange={(e)=>setText(e.target.value)}></input>
                <button type="submit">add</button>
            </form>
            <TodoItems entries ={items} delete={deleteItem}/>
           
        </div>
    </div>
    );

}
export default TodoList;