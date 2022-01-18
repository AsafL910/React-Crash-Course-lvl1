import InputText from "./InputText"
import InputCheckBox from "./InputCheckBox"
import InputSubmit from "./InputSubmit"
import { useState } from "react"

const AddTask = ({onSubmit}) => {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)

    const onAdd = () => {
        !text ? alert('Please add a task') : onSubmit({text, day, reminder});
        setText('')
        setDay('')
        setReminder(false)
    }

    return (
        <div className='add-form'>
            <InputText title='Task' placeHolder='Add Task' value={text} onChange={(text) => setText(text.target.value)} />
            <InputText title='Day & Time' placeHolder='Add day & time' value={day} onChange={(day) => setDay(day.target.value)} />
            <InputCheckBox title='Set Reminder' value={reminder} onChange={(reminder) => setReminder(reminder.currentTarget.checked)}/>
            <InputSubmit title='Save Task' onClick={()=> onAdd()}/>
        </div>
    )
}

export default AddTask
