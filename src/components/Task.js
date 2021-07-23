import React from 'react'
import { FaTimes} from 'react-icons/fa' 
import { AiFillClockCircle } from "react-icons/ai";
const Task = ({task, onDelete,onToggle }) => {
    return (
        <div className={`task ${task.reminder? "reminder": ""} `} onDoubleClick={()=>onToggle(task.id)}>
            <h3>
                
                <div >
                    <span>{task.text}</span>
                    <span> {task.reminder ? <AiFillClockCircle /> : ' '}</span>
                </div>
                <FaTimes style={{ color: 'red', cursor: 'pointer' }}
                    onClick={() => onDelete(task.id)  }
                />
                
            </h3>
            <p>{task.day}</p>
        </div>
    )
}

export default Task
