import { useState } from "react"

const Form = ({onAdd}) => {
    const [text ,setText]=useState('')
    const [day ,setDay]=useState('')
    const [reminder ,setReminder]=useState(false)

    const submited =(e)=>{
            e.preventDefault();
            if(!text){ alert('add text') 
            return
            }
            onAdd({text,day,reminder})
            setDay('')
            setText('')
            setReminder(false)
        }
  return (
    <form onSubmit={submited}>
        <div className="form-control">
            <label htmlFor="task">Task</label>
            <input type="text" name="task" placeholder="Add Task" 
                value={text}
                onChange={(e)=>setText(e.target.value)}

            />
        </div>
        <div className="form-control">
            <label htmlFor="day">Day & Time</label>
            <input type="text" name="day" placeholder="Add Day & Time" 
                value={day}
                onChange={(e)=>setDay(e.target.value)}
            />
        </div>
        <div className="form-control reminder-control">
            <label >Reminder</label>
            <input type="checkbox" 
                value={reminder}
                checked={reminder}
                onChange={(e)=>setReminder(e.currentTarget.checked)}
            />
        </div>
        <input type="submit" value='Save Task' />
    </form>
  )
}

export default Form