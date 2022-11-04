import './Cart.css';
import {useCart} from 'react-use-cart';
const Cart = () => {
    const {
        isEmpty,
        totalUniqueItems,
        items,
        totalItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart,
    } = useCart();
    if(isEmpty) return (<div className="text-center">Your Cart Is Empty</div>);
    
    return (
        
        <section className="py-4 container">
    <div className="row justify-content-center">
        <div className="col-12">
            <h5>Cart({totalUniqueItems}) Total Items: {totalItems}</h5>
            <table className="table table-light table-hover m-0">
                <tbody>
                    {items.map((item, index) => {
                        return(
                            <tr key={index}>
                                <td>
                                    <img src={item.img} style={{height: '6rem'}} alt={item.title} />
                                </td>
                                <td>{item.title}</td>
                                <td>{item.price}</td>
                                <td>Quantity({item.quantity})</td>
                                <td>
                                    <button onClick={() => {updateItemQuantity(item.id, item.quantity - 1)}} 
                                            className="btn btn-info ms-2">-
                                    </button>
                                    <button onClick={() => {updateItemQuantity(item.id, item.quantity + 1)}}  
                                            className="btn btn-info ms-2">+
                                    </button>
                                    <button onClick={() => {removeItem(item.id)}}  
                                            className="btn btn-danger ms-2">Remove Item
                                    </button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
        <div className="col-auto ms-auto">
            <h2>Total Price: ${cartTotal}</h2>
        </div>
        <div className="col-auto">
            <button className="btn btn-danger m-2"
                    onClick={()=>{emptyCart()}}
                    >Clear Cart</button>
        </div>
    </div>
    </section>

        );
}
export default Cart;