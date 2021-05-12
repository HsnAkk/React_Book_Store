import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { BookStoreContext } from '../../context';
import QuickCartCard from '../../components/quickCartCard/QuickCartCard';
import './QuickCart.scss';
import Fade from 'react-reveal/Fade';
import { IoMdClose } from 'react-icons/io';
import { HiOutlineShoppingBag } from 'react-icons/hi';


function QuickCart() {

    const { cart, setShowQuickCart } = useContext(BookStoreContext);

    const history = useHistory();
    
    const closeModal = (e) => {
        if (e.target.className === 'quickCart') {
            setShowQuickCart(false)
        } else if (e.target.className === 'link_cart') {
            setShowQuickCart(false)
            history.push('/cart');
        }
    }

    const total = cart.reduce((total, item) => total + (item.qty * item.price), 0);

    return (
        
        <div className="quickCart" onClick={closeModal}>
            
            <Fade right>
                <div className = "content" >
                    <div className="content__header">
                        <div className="content__header--left">
                            <HiOutlineShoppingBag className="x"/>
                            <span>Your shopping bag ({cart.length})</span>
                        </div>
                        <div className="content__header--right">
                            <IoMdClose onClick={() => setShowQuickCart(false)} />
                        </div>
                    </div>
                    <div className="content__body">
                        {
                            cart.map(item => <QuickCartCard key={item.id} {...item}/>)
                        }
                        <div className="content__body--total">
                            <span>TOTAL</span>
                            <span>${total.toFixed(2)}</span>
                        </div>
                        <div className="content__body--footer" >
                            <div className="link_cart" onClick={closeModal} >
                                View Cart
                            </div>
                        </div>
                    </div>
                </div>
            </Fade>
        </div>
    
    )
}

export default QuickCart
