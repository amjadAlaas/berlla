import './Buttons.css';
const PrimaryButton = (props) => {
    return(
        <button className='primary-btn'>{props.children}</button>
        );
        
    }
    const SecondaryButton = (props) => {
        return(
            
            <button className='secondary-btn'>{props.children}</button>

    );
    
}

export default PrimaryButton;
export {SecondaryButton};