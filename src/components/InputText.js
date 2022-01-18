const Input = ({title, placeHolder}) => {
    return (
        <div className='form-control'>
            <label>{title}</label>
            <input type='text' placeholder={placeHolder}></input>
        </div>
    )
}

export default Input
