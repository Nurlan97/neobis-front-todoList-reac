import React from 'react'

const EditButton = ({setEdit, edit}) => {
  
  const handleEditBtnClick = () => {
    setEdit((prev) => !prev)

  }

  

  return (
    <button className='todoList__edit_btn' onClick={handleEditBtnClick}>
        {
          !edit ? 'Edit' : 'Save'
        }
        
    </button>
  )
}

export default EditButton
