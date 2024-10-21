// todos=[
    //   title:"",
    //   description:"",
    // todos is an array and other todo takes input that will mapped to toso that you are going to right in app.jsx
// ]
export function Todos({todos}){
      return <div>
       {todos.map(function(todo){
        return <div>
           <h1>{todo.title}</h1>
           <h1>{todo.description}</h1>
           <button>{todo.completed==true?"Completed":"Mark as Completed"}</button>
            </div>
       })}
      </div>

}
