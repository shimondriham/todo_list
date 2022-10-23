import React, { useRef } from 'react'

function TaskInput(props) {
    let nameRef = useRef()
    let timeRef = useRef()
    const onAddTaskKlick =()=>{
     let  todoItem = {
        name: nameRef.current.value,
        time: timeRef.current.value,
        id:Date.now()
     }   
     props.addTask(todoItem);
      
    }
    return (
        <div >
            <h3>Task Name:</h3>
            <input ref={nameRef} type="text" className='form-control' />
            <h3>Task Time:</h3>
            <input ref={timeRef} type="time" defaultValue="07:00" className='form-control' />
            <div className='my-3 text-center'>
                <button onClick={onAddTaskKlick} className='btn btn-success me-2'>Add task</button>
                <button onClick={()=>{props.removeAllTasks()}} className='btn btn-danger'>Reset task</button>
            </div>
        </div>
    )
}

export default TaskInput