import React, { useEffect, useState } from 'react';
import './TodoList.scss';

const TodoList = ({ tasks_list, businessActive, personalActive }) => {
  let business
  let personal

  const [category, setCategory] = useState('')
  // const [businessCategory, setBusinessCategory] = useState('')
  // const [personalCategory, setPersonalCategory] = useState('')


  useEffect(() => {
    if(businessActive) {
      setCategory('category__item-business')
    } else if (personalActive) {
      setCategory('category__item-personal')
    } else {
      setCategory('');
    }
  }, [businessActive, personalActive])

  // useEffect(() => {
  //   if (businessActive) {
  //     setBusinessCategory('category__item-business')
  //     console.log(businessActive)
  //   } else {
  //     setPersonalCategory('category__item-personal')
  //   } 
  // }, [businessCategory, personalCategory])


  return (
    <div className='todoList'>
      <h2 className="todoList__title">TODO LIST</h2>
      <ul className="todoList__tasks_list">
        {tasks_list.map((task, index) => {
          return (
            <li key={index}>
              <div className={category}></div>
              {/* <div className={businessActive ? businessCategory : personalCategory}></div> */}
              {task.task}

            </li>
          )
        })}

      </ul>
    </div>
  )
}

export default TodoList
