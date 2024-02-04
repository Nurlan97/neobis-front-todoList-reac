import React, { useEffect, useState } from 'react';
import './Greetings.scss';

const Greetings = () => {
  
  const [userName, setUserName] = useState(localStorage.getItem('userName') || '');

  useEffect(() => {
    localStorage.setItem('userName', userName)
  }, [userName])

  const handleUserNameChange = (event) => {
    setUserName(event.target.value)
  }

  return (
    <div className='greetings'>
      <label htmlFor="greetings__input" className="greetings__title">What's up,</label>
      <input type="text" className="greetings__input" placeholder='Enter your name...' value={userName} onChange={handleUserNameChange}/>
    </div>
    // <div className={styles.greetings}>
    //     <label htmlFor={styles.greetings__input} className={styles.greetings__title}>What's up,</label>
    //     <input type="text" className={styles.greetings__input} placeholder='Enter your name...'/>
    // </div>
  )
}

export default Greetings
