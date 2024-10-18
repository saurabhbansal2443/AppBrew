import React, {useState} from 'react'
import useTodoStore from './Store/todoStore'

const App = () => {
  const [todo , setTodo ] = useState("")

  const addTodo = useTodoStore((store)=> store.addTodo)
  const removeTodo = useTodoStore((store)=>store.removeTodo)
  const todos = useTodoStore((store)=> store.todos )

  const handleChange = (event : React.ChangeEvent<HTMLInputElement>)=> {
      setTodo(event.target.value)
  }

  const handleAddTodo  = () : void =>{
    addTodo({id : Date.now() , text : todo });
    setTodo("")
  }
  return (
    <div>
     <input value={todo} placeholder='write your todo here ' onChange={handleChange} /> 
     <button onClick={handleAddTodo}> Add Todo </button>

     {
      todos.map((todo) =><div key={todo.id}><p> {todo.text}</p> <button onClick={()=> removeTodo(todo.id )}> Delete</button></div> )
     }
    </div>
  )
}

export default App
