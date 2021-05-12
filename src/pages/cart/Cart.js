import { useContext } from 'react';
import { BookStoreContext } from '../../context';
import CartCard from '../../components/cartCard/CartCard';
import './Cart.scss'

function Cart() {

    const { cart } = useContext(BookStoreContext)
    // console.log(cart)

    const subtotal = cart.reduce((total, item) => total + (item.price * item.qty), 0);

    const shipping = subtotal * 0.1;
    
    const total = subtotal + shipping;

    return (
        <div className="cart">
            <h2>Your cart : <span>( {cart.length} )</span> {cart.length > 1 ? 'items' : 'item'}</h2>

            {
                cart.length ? 
                
                <div className="cart__details">
                
                    <div className="cart__details--items">
                        <div className="heading">
                            <div className="heading__image">Product</div>
                            <div className="heading__title"></div>
                            <div className="heading__price">Price</div>
                            <div className="heading__buttons">Quantity</div>
                            <div className="heading__total">Total</div>
                            <div className="heading__delete"></div>
                        </div>
                        {cart.map(item => <CartCard key={item.id} {...item} />)}
                    </div>

                    <div className="cart__details--total">
                        <div className="details">
                            <h3>Cart Total</h3>
                            <div>
                                <p>Subtotal </p>
                                <span>${subtotal.toFixed(2)}</span>
                            </div>
                            <div>
                                <p>Shipping </p>
                                <span>${shipping.toFixed(2)}</span>
                            </div>
                            <div className="total">
                                <p>Total </p>
                                <span>${total.toFixed(2)}</span>
                            </div>
                            
                        </div>
                    
                        <div className="checkout">
                            <button>
                                Proceed to checkout
                        </button>
                        </div>
                    </div>
                </div>
                    
                :
                    
                <div className="emptyCart">Your cart is empty..!</div>
                    
                    
            }


        </div>
    )
}

export default Cart
