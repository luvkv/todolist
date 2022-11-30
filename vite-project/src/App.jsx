import { useState, useRef, Children } from 'react'
import './App.css'

export default function App() {
  //useRef : a hook provided by react that will return an object, can be used the entire time. //
       //--> main purpose is to access DOM child directly//
  const todoListRef = useRef();
  const [todoList, setTodoList] = useState(['Pay Rent',]);

  return (
    <div className="App">
      <input type="text" ref = {todoListRef}/>
      <button onClick={function (){
        setTodoList([...todoList, todoListRef.current.value])
      }}>Add todo</button>
      <ul>
        {
          todoList.map(function (value, index) {
            return <li>{ value }</li>
          })
        }
      </ul>
    </div>
  )
}


