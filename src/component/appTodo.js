import React, { useEffect, useState } from 'react'
import { sortBy } from "lodash"
import TaskInput from './taskInput'
import TaskList from './taskList'

function AppTodo() {
    let [taskAr, setTaskAr] = useState([]);

    useEffect(() => {
        if (localStorage["tasks"]){
            setTaskAr(JSON.parse(localStorage["tasks"]));  
        }
    }, [])

    const addTask = (_itemTaske) => {
        let sortAr = [...taskAr, _itemTaske];
        sortAr = sortBy(sortAr, "time");
        seveLocal(sortAr);

    }
    const removeAllTasks = () => {
        seveLocal([]);
    }
    const removeSingleTasks = (_delID) => {
        let tempAr = taskAr.filter(item => item.id != _delID);
        seveLocal(tempAr);

    }
    const seveLocal = (_ar) => {
        localStorage.setItem("tasks", JSON.stringify(_ar));
        setTaskAr(_ar);
    }
    return (
        <div className='container'>
            <h1 className='display-4 text-center'>task Todo</h1>
            <div className='col-lg-6 p-3 mx-auto'>
                <TaskInput removeAllTasks={removeAllTasks} addTask={addTask} />
                <TaskList removeSingleTasks={removeSingleTasks} taskAr={taskAr} />
            </div>
        </div>
    )
}

export default AppTodo