import { useState } from "react";
import "./App.css";
import Todolist from "./Todolist";


function App() {
  const [input, setinput] = useState("");
  const [task, settask] = useState([]);
  const[completedlist,setcompletedlist] = useState([]);
  console.log(task);
  const onchangeevent = (event) => {
    setinput(event.target.value);
  };
  const clickevent = () => {
    settask((oldlist) => {
      return [...oldlist, input];
    });
    setinput("");
  };
  const deleteitem = (id) => {
    settask((oldlist) => {
      return oldlist.filter((item, index) => { 
        return index !== id;
      });
    });
  };
  const completeditem=(id)=>{
    setcompletedlist((old) => {
      return [...old,task.filter((item, index) => { 
        if (index === id)
        return item;
      })];
    });
     
    settask((oldlist) => {
      return oldlist.filter((item, index) => { 
        return index !== id;
      });
    });
    
   }
   
  return (
    
    <div className="App">
      <h1 className="heading">Todo App</h1>
      <div>
        <input
          type="text"
          placeholder="Add Task"
          className="input"
          value={input}
          onChange={onchangeevent}
        />
        <button className="button" onClick={clickevent}>
          Add task
        </button>
        <div>
          <h3>Pending Tasks</h3>
          {task.map((e, index) => {
            return (
              <Todolist list={e} delete={deleteitem} key={index} id={index} complete={completeditem} />
            );
          })}
        </div>
        <div>
          <h3>Completed Tasks</h3>
          <div className="complete">
          {completedlist.map((e, index) => {
            return (
              <Todolist list={e} key={index} id={index}  />
            );
          })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
