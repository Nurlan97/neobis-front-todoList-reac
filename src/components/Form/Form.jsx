import React, { useState } from 'react';
import './Form.scss';
import Category from '../Category';

const Form = ({addTask, businessActive, personalActive, handleCategoryClick}) => {
    const [task, setTask] = useState('');
    
    const handleSubmit = (event) => {
        event.preventDefault();
        addTask(task)

        setTask("")
        
    }

    const handleTaskChange = (event) => {
   
        if(event.target.value !== ''){
            setTask(event.target.value)
            // console.log('+')
        } else {
            alert('Напишите задачу!!!')
            // console.log('-')
        }
    }

    return (
        <form className='form' onSubmit={handleSubmit}>
            <h1 className="form__title">CREATE A TODO</h1>
            <label htmlFor="form__input" className="form__label">What's on your todo list?</label>
            <input 
                type="text" 
                className="form__input" 
                placeholder='e.g. get some milk' 
                value={task} 
                onChange={handleTaskChange}/>
            <Category 
                handleCategoryClick={handleCategoryClick} 
                businessActive={businessActive} 
                personalActive={personalActive}/>
            <button type="submit" className='form__btn'>Add todo</button>
        </form>

    )
}

export default Form
