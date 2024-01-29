import React, { useState, useEffect } from 'react'
import DeleteTask from '../DeleteTask/DeleteTask'
import './TodoItem.scss'
import EditButton from '../EditButton'

const TodoItem = ({ task, index, tasks_list, setTasks_list }) => {
    
    const [edit, setEdit] = useState(false)
    const [text, setText] = useState(task.task || '')

    const handleIpnutChange = (event) => {
        setText(event.target.value)
    }

    useEffect(() => {
        if (!edit) {
            setTasks_list((prev) => {
                return prev.map(item => (item.id === task.id ? {...item, task: text} : item))
            })
        } 
    }, [edit, setTasks_list])

    
    const handleTaskCompletion = () => {
        setTasks_list((prev) => {
            return prev.map(item => task.id === item.id ? { ...item, completed: !item.completed } : item);
        })

    }

    return (
        <li key={index} className='todoList__tasks_item'>

            <div className='todoList__tasks_item_info'
                onClick={() => handleTaskCompletion()} >
                <div className={`${tasks_list[index].category === 'business' ? `category__item-business` : `category__item-personal`} ${task.completed ? 'active' : ''}`}></div>
                {

                    !edit ? <p className={`todoList__tasks_item_text ${tasks_list[index].completed ? 'todoList__tasks_item_text_completed' : ''}`}>
                        {task.task}
                    </p> : <input className={`todoList__tasks_item_input ${tasks_list[index].completed ? 'todoList__tasks_item_text_completed' : ''}`} value={text} onChange={handleIpnutChange}></input>
                }

            </div>
            {/* <textarea className="todoList__tasks_item_text" value={task.task} /> */}
            {/* <div 
                className="todoList__tasks_item_text"
                contentEditable={true} 
                onInput={handleTaskChange}
                dangerouslySetInnerHTML={{ __html: task.task }}
              /> */}

            <EditButton setEdit={setEdit} edit={edit} />

            <DeleteTask
                taskId={tasks_list[index].id}
                tasks_list={tasks_list}
                setTasks_list={setTasks_list}
            />
            {/* {console.log(tasks_list[index].id)} */}
        </li>
    )
}

export default TodoItem
