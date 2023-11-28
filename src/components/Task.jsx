import {FaTimes} from 'react-icons/fa'
import {BsAlarm} from 'react-icons/bs'

const Task = ({task,onDelete,onReminder}) => {
    return (
        <div className={`Task ${task.reminder ? 'reminder' :''} `}>
            <div>
                <BsAlarm onClick={()=>onReminder(task.id)}/>
                <h3 className='text'>
                    {task.text}
                    <FaTimes onClick={()=>onDelete(task.id)} style={{color:'red',cursor:'pointer'}}/>
                </h3>
                <p>{task.day}</p>
            </div>
 
        </div>
    )
}

export default Task