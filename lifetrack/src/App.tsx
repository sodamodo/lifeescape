import React from 'react';
import './App.css';
import TodoList from './TodoList'
import TodoListItem from './TodoList/TodoListItem'

function App() {
  return (
    <div className="App">
      <div className="App-title"><h1>LIFETRACKER ESCAPE</h1></div>
        <TodoList title="Tuckers Liffst" item_list={["once", "frunce", "lunch"]}/>
        
      </div>
  );
}

export default App;


{/* <TodoListItem text="win at liffffe" checked={false}/> */}
  {/* <TodoList/> */}
        {/* <TodoListItem checked={false} text={"Crushing life"} />   */}