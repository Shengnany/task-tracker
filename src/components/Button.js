import PropTypes from 'prop-types'
 
const Button = ({ color, text, onClick }) => {
      
     return (
         <div>
             <button onClick={onClick} style={{backgroundColor: color}} className='btn'>{text}</button>
         </div>
     )
 }
Button.defaultProps = {
    color: 'green',
    text:'Add '
     
}
Button.propTypes = {
    color: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    onClick:PropTypes.func.isRequired 
}
 export default Button
 