import React from 'react'

function TaskItem(props) {
   let {name , time , id } = props.item; 
  return (
    <div className='shadow my-2 p-2  border rounded'>
        <button onClick={() => {props.removeSingleTasks(id)}} className='btn btn-danger float-end '>X</button>
        <h4>{name} - {time}</h4>
    </div>
  )
}

export default TaskItem