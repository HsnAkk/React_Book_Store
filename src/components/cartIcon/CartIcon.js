import { useContext } from 'react';
import { BookStoreContext } from '../../context';
import Fade from 'react-reveal/Fade';
import './CartIcon.scss';


function CartIcon() {

    const { cart, setShowQuickCart } = useContext(BookStoreContext);


    return (
        <Fade right>
            <div className="cartIcon">
                <div onClick={() => setShowQuickCart(true)}>
                    <i className="fa fa-cart-plus" aria-hidden="true"></i>
                    <span>{cart.length }</span>
                </div>
            </div>
        </Fade>
    )
}

export default CartIcon
