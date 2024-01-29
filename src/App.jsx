import React, { useState } from 'react';
import Form from './components/Form';
import Greetings from './components/Greetings';
import TodoList from './components/TodoList';
import './index.css';
import { v4 as uuidv4 } from 'uuid';


function App() {

  const [tasks_list, setTasks_list] = useState([]);
  const [businessActive, setBusinessActive] = useState(false);
  const [personalActive, setPersonalActive] = useState(false);
  const [category, setCategory] = useState('')
  
  const addTask = task => {
    setTasks_list([...tasks_list, {
      id: uuidv4(),
      task,
      category,
      completed: false,
      isEditing: false,
      checked: false
    }])
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
