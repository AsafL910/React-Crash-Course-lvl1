import AddButton from './Button.js'
import PropTypes from 'prop-types'

const Header = ({ title, buttonClick, showAddTask }) => {
    return (
        <header className='header'>
            <h1>{title}</h1>
            <AddButton
                text={showAddTask ? 'Close' : 'Add'}
                color={showAddTask ? 'red' : 'green'}
                onClick={buttonClick} />
        </header>
    )
}

Header.propTypes = {
    title: PropTypes.string,
    buttonClick: PropTypes.func
}
export default Header
