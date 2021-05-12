import {useContext, useState} from 'react'
import { useParams } from 'react-router-dom';
import { BookStoreContext } from '../../context';

import './BookDeatil.scss';



function BookDetail() {

    const [qty, setQty] = useState(1)

    const { bookName } = useParams()
    
    const { books, addCartHandler } = useContext(BookStoreContext);

    const book = books.find(item => item.name === bookName);
    // console.log('book: ', book)
    
    const {id, type, name, author, price, image, description } = book;

    
    const qtyClickHandler = (type) => {
        if (type === 'inc') {
            setQty(qty + 1)
        } else {
            if (qty !== 1) {
                setQty(qty -1)
            } 
        }
    }

    return (
        <div className="bookDetail">
            <div className="bookDetail__image">
                <img src={image} alt={name} />
            </div>
            <div className="bookDetail__body">
                <p className="bookDetail__body--type">{type }</p>
                <h3 className="bookDetail__body--name">{name}</h3>
                <h4 className="bookDetail__body--price">${price}</h4>
                <p className="bookDetail__body--author">{author}</p>
                <p className="bookDetail__body--descr">{description}</p>

                <div className="bookDetail__body--cart">
                    <button onClick={() => qtyClickHandler('dec')}>-</button>
                    <span>{qty}</span>
                    <button onClick={() => qtyClickHandler('inc')}>+</button>
                </div>
                <div className="bookDetail__body--footer">
                    <p onClick={() => addCartHandler(id, qty)}>ADD TO CART</p>
                </div>
            </div>
        </div>
    )
}

export default BookDetail
