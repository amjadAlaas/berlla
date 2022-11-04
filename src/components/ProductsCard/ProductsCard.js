import './ProductsCard.css';
// import { PrimaryButton, SecondaryButton} from '../index';
import { FaShoppingCart, FaStar, FaCartPlus } from 'react-icons/fa';
import { useState } from 'react';
    const ProductsCard = (props) => {
        const handleToggle = (e) => {
            e.target.parentElement.classList.remove('full-size');
            e.target.style.display="none";
          };
        const fullSize = (e) => {
            // e.target.parentElement.parentElement.parentElement.parentElement.style.cssText = `
            // position: relative;`;
            e.target.parentElement.classList.add('full-size');
            e.target.nextSibling.style.display = 'inline-block';
        }
    const [image, setImage] = useState(Object.values(props.img)[0]);
    let colorItems = document.getElementsByClassName('color-item');
    const chanegColor = (color, e) => {
        for (const property in props.img)
        if(property === color) {
            setImage(props.img[color]);
            
            for (let index = 0; index < colorItems.length; index++) {
                colorItems[index].classList.remove('active');
            }
            e.target.classList.add("active");
        }
    }


    const [isActive, setIsActive] = useState(false);
    const handleClick = event => {
        setIsActive(current => !current);
      };

    return (
        <>
            <div className='products-item'>
                <div className='card-wrapper'>
                    <div  className="products-item-image">
                        <img src={image}  alt='popular 1' onClick={e => fullSize(e)}/>
                        <span className='close' onClick={e=> {handleToggle(e)}}>x</span>
                    </div>
                    <div className='products-item-content'>
                        <h4 className='products-item-title'>
                            {props.title}<br />
                            <span>{props.category}</span>
                        </h4>
                        <ul>
                            <li><span className='my-icon'><FaStar /></span>{props.rate}</li>
                            <li><span className='my-icon'><FaShoppingCart /></span>{props.sold}</li>
                        </ul>
                    </div>
                    <div className='products-item-content'>
                        <ul className='colors'>
                            {props.colors.map((color, index) => {return(<li key={index} onClick={e =>chanegColor(color, e)} style={{backgroundColor: color}} className='color-item'></li>)})}
                        </ul>
                    </div>
                    <div className='price-cart'>
                        <span className='price'>${props.price}</span>
                        <button 
                        className={isActive ? 'btn btn-success' : 'btn btn-primary'}
                        onClick={() => {handleClick();}}><span className='cart-icon'><FaCartPlus /></span>add to cart</button>
                        
                    </div>
                </div>
            </div> 
        </>
    );
}
export default ProductsCard;