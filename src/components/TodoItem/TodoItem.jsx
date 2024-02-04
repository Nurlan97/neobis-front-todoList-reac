import React, { useState, useEffect } from 'react'
import DeleteTask from '../DeleteTask/DeleteTask'
import './TodoItem.scss'
import EditButton from '../EditButton'
import { handleSetToLocalStorage } from '../../utils/localStorage'

const TodoItem = ({ task, index, tasks_list, setTasks_list }) => {

    const [edit, setEdit] = useState(false)
    const [text, setText] = useState(task.task || '')

    const handleIpnutChange = (event) => {
        setText(event.target.value)
    }

    useEffect(() => {
        if (!edit) {

            setTasks_list((prev) => {
                const updatedTasksList = prev.map(item => (item.id === task.id ? { ...item, task: text } : item))
                handleSetToLocalStorage(updatedTasksList)
                return updatedTasksList
            })
         
        }
    }, [edit])


    const handleTaskCompletion = () => {
        
        setTasks_list((prev) => {
            const updatedTasksList = prev.map(item => task.id === item.id ? { ...item, completed: !item.completed } : item);
            handleSetToLocalStorage(updatedTasksList) 
            return updatedTasksList
        })
        

    }



    return (
        <li key={index} className='todoList__tasks_item'>

            <div className='todoList__tasks_item_info'>
                <div
                    className={`${tasks_list[index].category === 'business' ? `category__item-business` : `category__item-personal`} 
                    ${task.completed ? 'active' : ''}`}
                    onClick={() => handleTaskCompletion()}>

                </div>
                {

                    !edit ? <p className={`todoList__tasks_item_text ${tasks_list[index].completed ? 'todoList__tasks_item_text_completed' : ''}`}>
                        {task.task}
                    </p> : <input className={`todoList__tasks_item_input ${tasks_list[index].completed ? 'todoList__tasks_item_text_completed' : ''}`} value={text} onChange={handleIpnutChange}></input>
                    
                }

            </div>

            <div className="todoList__tasks_btns">

                <EditButton setEdit={setEdit} edit={edit} />

                <DeleteTask
                    taskId={tasks_list[index].id}
                    tasks_list={tasks_list}
                    setTasks_list={setTasks_list}
                />
            </div>


        </li>
    )
}

export default TodoItem
