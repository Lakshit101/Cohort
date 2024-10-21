import { useState,Fragment } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

let counter=4;
function App() {
   const [todos,setTodos]=useState([{
    id:1,
    title:"go to gym",
    description:"daily",
   },{
    id:2,
    title:"go to school",
    description:"weekly",
   },{
    id:3,
    title:"go to market",
    description:"monthly",
   }]);

   function addtodo(){
    setTodos([...todos,{
      id:counter++, //instead of 4
      title:Math.random(),
      description:"just numbers"
     
    }])
   
  //   both are same 

    // const newtodos=[]
    // for(let i=0;i<todos.length;i++){
    //   newtodos.push(todos[i]);
    // }
    // newtodos.push({
    //   id:4,
    //  title:Math.random(),
    //  description:"just numbers"
    // })
    // setTodos(newtodos)

   }
  return (
    <>
    <button onClick={addtodo}>Add to do</button>
    {todos.map(function(todo){
       return <Todo key={todo.id} title={todo.title} description={todo.description}></Todo>
    })}
    </>
  )
}

function Todo({title,description}){
  return<>
  <h1>{title}</h1>
  <h2>{description}</h2>
  </>
}
 

export default App
