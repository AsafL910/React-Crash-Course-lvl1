import AddButton from './Button.js'
import PropTypes from 'prop-types'

const Header = ({title, buttonClick}) => {
    return (
        <header className='header'>
            <h1>{title}</h1>
            <AddButton text='Add' color='black' onclick={buttonClick}/>
        </header>
    )
}

Header.propTypes = {
    title: PropTypes.string,
    buttonClick: PropTypes.func
}
export default Header
