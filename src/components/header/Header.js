import { useContext, useRef } from 'react';
import { BookStoreContext } from '../../context'
import { Link, useHistory } from 'react-router-dom';
import './Header.scss';
import CartIcon from '../cartIcon/CartIcon';


function Header() {

    const inputRef = useRef(null)

    const { cart, books, setShowAlert, setAlertMessage } = useContext(BookStoreContext);

    const history = useHistory();

    const searchHandler = (e) => {
        if (e.which === 13 || e.type === 'click') {
            const book = books.find(item => item.name.toLowerCase().includes((inputRef.current.value).toLowerCase()));
            if (book) {
                // console.log('name :', book.name)
                history.push(`/book/${book.name}`)
                
            } else {

                setAlertMessage('Book not found...! ⛔ 👍');
                setShowAlert(true)
            }
            inputRef.current.value = '';
        }
    }


    return (
        <nav>
            <img src="/images/logo.jpeg" alt="logo" className="nav__logo" />
            <div className="nav__menu">
                <Link to="/">Home</Link>
                <Link to="/shopping">Shopping</Link>
                <Link to="/contact">Contact</Link>
            </div>
            <div className="nav__search">
                <label htmlFor="books">
                    <input type="text" id="books" ref={inputRef} placeholder="Search Books..."
                        onKeyPress={searchHandler} />
                    <i className="fa fa-search search-icon" onClick={searchHandler} />
                </label>
            </div>
            {
                cart.length >= 1 && <CartIcon />
            }
        </nav>
    )
}

export default Header