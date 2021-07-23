import PropTypes from 'prop-types'
 import Button from './Button'
// const Header = (props) => { 
import { useLocation } from 'react-router-dom '
 
const Header = ({ title, onAdd ,showBtn }) => {
    const Location = useLocation 
    return (
        <div>
            <header className='header'>
                <h1>{title}</h1> 
              { location.pathname === '/' &&  <Button onClick={onAdd} color={showBtn? "darkblue": "green" }
                    text={showBtn? "close": "add" }/>}
            </header>
        </div>
    )
}
Header.defaultProps = {
    title: "default"
}
Header.propTypes = {
    title: PropTypes.string.isRequired
}
// const styele = {color:'red', backgroundColor:'black '}
export default Header
