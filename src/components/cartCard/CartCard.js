import { useContext } from 'react';
import { BookStoreContext } from '../../context';
import { IoMdClose } from 'react-icons/io';
import './CartCard.scss';


function CartCard({ id, image, name, author, price, qty }) {
    

    let { cart, setCart, removeFromCart } = useContext(BookStoreContext);


    const qtyClickHandler = (type, ID) => {
        if (type === 'inc') {
            setCart(cart.map(item => item.id === ID ? { ...item, qty: qty+1 } : item))
           
        } else {
            if (qty !== 1) {
                setCart(cart.map(item => item.id === ID ? { ...item, qty: qty-1 } : item))
            } 
        }
    }



    return (
        <div className="cartCard">
            <div className="cartCard__image">
                <img src={image} alt={name} />
            </div>
            <div className="cartCard__title">
                <h3>{name}</h3>
                <p>{author}</p>
            </div>
            <div className="cartCard__price">
                <p>${price}</p>
            </div>
            <div className="cartCard__buttons">
                <div>
                    <button onClick={() => qtyClickHandler('dec', id)}>-</button>
                    <span>{qty}</span>
                    <button onClick={() => qtyClickHandler('inc', id)}>+</button>
                </div>
            </div>
            <div className="cartCard__total">
                ${(price * qty).toFixed(2)}
            </div>
            <div className="cartCard__delete">
                <IoMdClose onClick={() => removeFromCart(id)} />
            </div>
            
            
        </div>
    )
}

export default CartCard
