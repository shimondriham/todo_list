import React, { useState } from 'react'
import { sortBy } from "lodash"
import TaskInput from './taskInput'
import TaskList from './taskList'

function AppTodo() {
    let [taskAr, setTaskAr] = useState([]);
    const addTask = (_itemTaske) => {
        let sortAr = [...taskAr, _itemTaske];
        sortAr = sortBy(sortAr , "time");
        setTaskAr(sortAr);
    }
    const removeAllTasks = () => {
        setTaskAr([]);
    }
    const removeSingleTasks = (_delID) => {
        let tempAr = taskAr.filter(item => item.id != _delID);
        setTaskAr(tempAr);
    }
    return (
        <div className='container'>
            <h1 className='display-4 text-center'>task Todo</h1>
            <div className='col-lg-6 p-3 mx-auto'>
                <TaskInput  removeAllTasks={removeAllTasks} addTask={addTask}/>
                <TaskList removeSingleTasks={removeSingleTasks}  taskAr={taskAr}  />
            </div>
        </div>
    )
}

export default AppTodo