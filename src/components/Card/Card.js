import './Card.css';
import { FaStar, FaShoppingCart, FaCartPlus } from 'react-icons/fa';
import {useCart} from 'react-use-cart';
import { useState } from 'react';
const Card = (props) => {
    const {addItem} = useCart();
    const [isActive, setIsActive] = useState(false);
    const handleClick = event => {
        setIsActive(current => !current);
      };
    return (
        <div className='new-collection-item'>
            <div className='card-wrapper'>
                <div  className="new-collection-item-image">
                <img src={props.img} alt='popular 1'/>
                </div>
                <div className='new-collection-item-content'>
                    <h4 className='new-collection-item-title'>
                        {props.title}<br />
                        <span>{props.category}</span>
                    </h4>
                    <ul>
                        <li><span className='my-icon'><FaStar /></span>{props.rate}</li>
                        <li><span className='my-icon'><FaShoppingCart /></span>{props.sold}</li>
                    </ul>
                </div>
                <div className='price-cart'>
                    <span className='price'>${props.price}</span>
                    <button 
                        className={isActive ? 'btn btn-success' : 'btn btn-primary'}
                        onClick={() => {handleClick();addItem(props.item)}}><span className='cart-icon'><FaCartPlus /></span>add to cart</button>
            
                </div>
            </div>
        </div> 
    )
}
export default Card;