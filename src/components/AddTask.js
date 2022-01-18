import InputText from "./InputText"
import InputCheckBox from "./InputCheckBox"
import InputSubmit from "./InputSubmit"

const AddTask = () => {
    return (
        <form className='add-form'>
            <InputText title='Task' placeHolder='Add Task'/>
            <InputText title='Day & Time' placeHolder='Add day & time'/>
            <InputCheckBox title='Set Reminder'/>
            <InputSubmit title='Save Task'/>
        </form>
    )
}

export default AddTask
