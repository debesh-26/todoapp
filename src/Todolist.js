import React from "react";
import "./Todolist.css";
import "./App.css"
const Todolist = (props) => {
  let date = new Date();
  let day = String(date.getDate()).padStart(2, "0");
  let month = String(date.getMonth() + 1).padStart(2, "0");
  let year = date.getFullYear();

  date = day + "/" + month + "/" + year;
  return (
    <div className="wraper">
      <div className="card">
        <div className="list">{props.list}</div>
        <div className="date">{date}</div>
      </div>
      <div className="btn">
        <button className="button button1 upper" onClick={()=>{props.delete(props.id)}}>Delete</button>
        <button className="button button1 lower" onClick={()=>{props.complete(props.id)}}>Completed</button>
      </div>
    </div>
  );
};

export default Todolist;
