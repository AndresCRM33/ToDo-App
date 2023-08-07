import { useState } from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, deleteToDo, updateToDo } from './redux/actions'
import { NavBar } from './components/NavBar/NavBar'
import {AiFillDelete, AiOutlineCheck, AiOutlineClose} from "react-icons/ai"
import Swal from "sweetalert2"
import { ProgressBar } from './components/ProgressBar/ProgressBar'

function App() {

  const dispatch = useDispatch()
  const listToDo = useSelector(state => state.todoList)
  const completedTasks = listToDo.filter(t => t.completed !== false)
  const taskId = useSelector(state => state.todoId)
  // const [todoList, setTodoList] = useState([])
  // const [taskId, setTaskId] = useState(1)
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
      Swal.fire('Por favor, escriba una tarea', '', 'info')
    }else{
      dispatch(addTodo(input))
      // setTodoList([...todoList, input])
      setInput({id: taskId, content: "", completed: false})
      // setTaskId(taskId + 1)
    }
  }

  function handleToggleComplete(id){
    dispatch(updateToDo(id))
    // setTodoList(
    //   todoList.map(t => t.id === id ? {...t, completed: !t.completed} : t)
    // )
  }

  function handleDelete(id){

    Swal.fire({
      title: 'Estás seguro de eliminar la tarea?',
      showDenyButton: true,
      // showCancelButton: true,
      confirmButtonText: 'Conservar',
      denyButtonText: `Eliminar`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire('No se eliminó la tarea!', '', 'info')
      } 
      else if (result.isDenied) {
        Swal.fire('Tarea eliminada!', '', 'success')
        dispatch(deleteToDo(id))
        // setTodoList(todoList.filter(t => t.id !== id))
      }
    })
  }

  return (
    <div className='containerApp'>
      <NavBar/>
      <div className='progressBarContainer'>
        <span className='progressBarText'>Tareas completadas: {completedTasks.length} de {listToDo.length}</span>
        <ProgressBar listToDo={listToDo.length} completedTasks={completedTasks.length}/>
      </div>
      {/* <h1>Todo App</h1> */}
      <div className='containerForm'>
        {/* <span>Tareas totales: {listToDo.length}</span> */}
        {/* <span>Tareas completadas: {completedTasks.length}</span> */}
        <form
          onSubmit={(e) => handleSubmit(e)}
          className='formContainer'
        >
          <input 
            type='text'
            name='content'
            value={input.content}
            className='inputText'
            onChange={(e) => handleChange(e)}
          />
          <button className='inputSubmit' type="submit">Add</button>
        </form>
        <div className='toDoList'>
          {listToDo.length ? 
          listToDo.map((t) => (
            <div
              className={t.completed === false ? 'toDoContainer' : "toDoContainer completed"} 
              key={t.id}
            >
              <p>{t.content}</p>
              <button value={t.id} className="deleteButton" onClick={() => handleDelete(t.id)}><AiFillDelete size="1.7em" color="rgb(224, 78, 78)"/></button>
              <button className='checkButton' onClick={() => handleToggleComplete(t.id)}>
                {t.completed === true ? <AiOutlineCheck size="2em" color='green'/> : <AiOutlineClose size="2em" color='red'/>}
              </button>
            </div>
          )):
          (<div>
            <h3>Sin tareas.</h3></div>)
          }
        </div>
      </div>
    </div>
  )
}

export default App
