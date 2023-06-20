import { useState } from 'react'
import './App.css'

function App() {
  const [todoList, setTodoList] = useState([])
  const [taskId, setTaskId] = useState(1)
  const [input, setInput] = useState({id: 1, content: "", completed: false})

  function handleChange(e) {
    e.preventDefault()
    setInput({...input,
      id: taskId,
      [e.target.name] : e.target.value
    })
  }

  function handleSubmit(e){
    e.preventDefault()
    if(input.content ===""){
      alert("Por favor, escriba una tarea")
    }else{
      setTodoList([...todoList, input])
      setInput({id: taskId + 1, content: "", completed: false})
      setTaskId(taskId + 1)
    }
  }

  function handleToggleComplete(id){
    setTodoList(
      todoList.map(t => t.id === id ? {...t, completed: !t.completed} : t)
    )
  }

  function handleDelete(id){
    setTodoList(todoList.filter(t => t.id !== id))
  }

  return (
    <div className='container'>
      <h1>Todo App</h1>
      <form
        onSubmit={(e) => handleSubmit(e)}
      >
        <input 
          type='text'
          name='content'
          value={input.content}
          onChange={(e) => handleChange(e)}
        />
        <button type="submit">Add</button>
      </form>
      <div className='toDoList'>
        {todoList.length ? 
        todoList.map((t) => (
          <div
            className={t.completed === false ? 'toDoContainer' : "toDoContainer completed"} 
            key={t.id}
          >
            <p>{t.content}</p>
            <button value={t.id} onClick={() => handleDelete(t.id)}>Delete</button>
            <button className='checkButton' onClick={() => handleToggleComplete(t.id)}>
              {t.completed === true ? "s" : "n"}
            </button>
          </div>
        )):
        (<div>Sin tareas</div>)
        }
      </div>
    </div>
  )
}

export default App
