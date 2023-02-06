import style from './global.css'
import { Header } from './components/Header'
import { List } from './components/List'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

export function App () {
  const [task, setTask] = useState([])

  function handleCreateCard (desafio) {
    setTask([...task, {id: uuidv4(), desafio: desafio, isCheck: false}])
  }

  function handleCheckTask (taskTarget) {
    const taskCheck = task.map(item => {
      if(item.id === taskTarget) {
        return {...item, check: !item.check}
      } return item
    })
    setTask(taskCheck)
  }

  function handleDeleteTask (taskDelete) {
    const deleteTask = task.filter(task => {return task != taskDelete})
    setTask(deleteTask)
  }

  return (
    <>
      <Header 
        handleCreateCard={handleCreateCard}
      />
      <List 
        task={task} 
        handleCheckTask={handleCheckTask}
        handleDeleteTask={handleDeleteTask}
      />
    </>  
  )
}