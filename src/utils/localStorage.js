

export const handleSetToLocalStorage = (tasks_list) => {
    localStorage.setItem('tasks', JSON.stringify(tasks_list));
    
}

export const handleGetFromLocalStorage = () => {
    const toDoList = JSON.parse(localStorage.getItem('tasks')) ;
    if(toDoList) {
        return toDoList;
    }

    return [];
}
