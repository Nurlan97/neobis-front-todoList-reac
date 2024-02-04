import React, { useState } from 'react';
import Form from './components/Form';
import Greetings from './components/Greetings';
import TodoList from './components/TodoList';
import './index.css';
import { v4 as uuidv4 } from 'uuid';
import { handleGetFromLocalStorage, handleSetToLocalStorage } from './utils/localStorage';



function App() {
  const getFromLocalStorage = handleGetFromLocalStorage()
  const [tasks_list, setTasks_list] = useState(getFromLocalStorage || []);
  const [businessActive, setBusinessActive] = useState(false);
  const [personalActive, setPersonalActive] = useState(false);
  const [category, setCategory] = useState('')

  const addTask = (task) => {
    const newTask = {
      id: uuidv4(),
      task,
      category,
      completed: false,
      isEditing: false,
      checked: false
    };
    setTasks_list((prev) => {
      const updatedTasksList = [...prev, newTask]
      handleSetToLocalStorage(updatedTasksList)
      return updatedTasksList
    })
  }



  const handleCategoryClick = (category) => {
    if (category === 'business') {
      setBusinessActive(!businessActive)
      setPersonalActive(false)

      // временно
      setCategory('business')

    } else {
      setPersonalActive(!personalActive)
      setBusinessActive(false)

      // временно
      setCategory('personal')
    }

  }


  return (
    <div className="App">
      <Greetings />
      <Form
        addTask={addTask}
        businessActive={businessActive}
        personalActive={personalActive}
        handleCategoryClick={handleCategoryClick}
      />
      <TodoList
        tasks_list={tasks_list}
        setTasks_list={setTasks_list}
      />
    </div>
  );
}

export default App;
