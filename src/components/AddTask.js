import Task from "./Task"
import { useState } from 'react'

const AddTask = ({onAdd }) => {
    const[text, setText] = useState('')
    const[day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)
    const onSubmit = (e) => {
        e.preventDefault()
        if (!text) {
            alert('Cannot enter empty task ')
            return;
        } 
        onAdd({ text, day, reminder })
        setText('')
        setText('')
        setText(false)
    }
    return (
        <form className="add-form" onSubmit={onSubmit}>
            <div className="form-control">
                <label htmlFor="">Task</label>
                <input type="text" placeholder="add task"
                    value={text}
                    onChange={(e)=> setText(e.target.value)}/>
            </div>
            <div className="form-control">
                <label htmlFor="">Day & Time</label>
                <input type="text" placeholder="add day&time"
                    value={day} 
                    onChange={(e)=> setDay(e.target.value)}/>
            </div>
            <div className="form-control form-control-check">
                <label htmlFor="">Set Reminder </label>
                <input type="checkbox" placeholder="add task"
                    value={reminder} checked={reminder}
                    onChange={(e)=> setReminder(e.currentTarget.checked )}/>
            </div>
            <button className="btn btn-block">Save </button>
        </form>
    )
}

export default AddTask
