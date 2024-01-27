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

  const addTask = task => {
    setTasks_list([...tasks_list, {
      id: uuidv4(),
      task,
      completed: false,
      isEditing: false
    }])
  }



  const handleCategoryClick = (category) => {
    if (category === 'business') {
      setBusinessActive(!businessActive)
      setPersonalActive(false)

    } else {
      setPersonalActive(!personalActive)
      setBusinessActive(false)
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
        businessActive={businessActive}
        personalActive={personalActive}
      />
      {/* {tasks_list.map(task => <TodoList task={task}/>)} */}
    </div>
  );
}

export default App;
