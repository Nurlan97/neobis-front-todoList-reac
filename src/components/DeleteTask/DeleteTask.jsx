import React from 'react'
import './DeleteTask.scss';
import { handleGetFromLocalStorage, handleSetToLocalStorage } from '../../utils/localStorage';

const DeleteTask = ({ taskId, tasks_list, setTasks_list }) => {
  // console.log(tasks_list)
  // return  tasks_list.filter(task => task.id !== taskId)

  const deleteTask = () => {
    const updatedTasksList = tasks_list.filter(task => task.id !== taskId)
    setTasks_list(updatedTasksList)
    handleSetToLocalStorage(updatedTasksList)
  }

  return (
    <button className='deleteTask' onClick={deleteTask}>Delete</button>
  )
}

export default DeleteTask
