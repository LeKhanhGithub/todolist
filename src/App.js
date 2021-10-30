
import './App.css';
import Todolist from './component/todolist';
import { useState } from 'react';
import Todofrom from './component/todoform';



function App() {
  const [todolist, setTodolist] = useState([
    { id: 1, title: "i love Le Cong Khanh" },
    { id: 2, title: "i will become developer frontend" },
    { id: 3, title: "i love my family"},
  ])

 function handleClick(todoclick){
   const filter = todolist.filter((todo) => {
     return todo.id !== todoclick.id;
   });
   setTodolist(filter);
 }

 function handleOnsubmit(formValue){
    const newTodo = {
      id: todolist.length + 1,
      ...formValue,
    };
    setTodolist([...todolist, newTodo]);
 }


  return (
    <div className="App">
      <h1> Wellcome to reactjs the second project</h1>
      <Todofrom onsubmit = {handleOnsubmit}/>
      <h2> Below is your to do list</h2>
      <Todolist todos={todolist} onTodoClick = {handleClick} />
    </div>
  );
}

export default App;
