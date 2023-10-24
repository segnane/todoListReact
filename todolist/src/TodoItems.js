import React from "react";


function TodoItems(props) {
    
    const createTasks=(item)=>{
        return (
            <li key={item.key} onClick={()=>deleteTask(item.key)}>{item.text}</li>
        );
    };
    const deleteTask=(key)=>{
        props.delete(key); 
    };

    const todoEntries=props.entries;
    const listItems=todoEntries && Array.isArray(todoEntries)? todoEntries.map(createTasks): [];


    return(
     <ul className="theList">{listItems}</ul>
    )

};
export default TodoItems;