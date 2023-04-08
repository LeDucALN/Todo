import React from "react";

function ToDoItem(props) {
  const DeleteTodo = () => {
    props.onChecked(props.id);
  };
  return (
    <div style={{
      display: "flex",
      justifyContent: "left",
    }}
    >
      <li style={{
        backgroundColor: "lightblue",
        borderRadius: "5px",
        display: "flex",
        justifyContent: "space-between",
        margin: "10px",
        padding: "10px",
        alignItems: "center",
        width: "100%",
      }}>
        {props.text}<button style={{
          backgroundColor: "red",
          color: "white",
          border: "none",
          borderRadius: "5px",
          padding: "5px",
          marginLeft: "10px",
          width: "48px",
          height: "29px",
          display: "flex",
          
        }} onClick={DeleteTodo}>Delete</button>  
      </li>
      
    </div>
  );
}

export default ToDoItem;
