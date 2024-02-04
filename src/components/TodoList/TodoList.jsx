import React from 'react';
import './TodoList.scss';
import TodoItem from '../TodoItem/TodoItem';

const TodoList = ({ tasks_list, setTasks_list }) => {
  
  return (
    <div className='todoList'>
      <h2 className="todoList__title">TODO LIST</h2>
      <ul className="todoList__tasks_list">
        {tasks_list.map((task, index) => {
          return (
            <TodoItem key={index} task={task} index={index} tasks_list={tasks_list} setTasks_list={setTasks_list}/>
          )
        })}

      </ul>
    </div>
  )
}

export default TodoList
