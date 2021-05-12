
import { useContext } from 'react';
import { BookStoreContext } from '../../context';
import { IoMdClose } from 'react-icons/io';
import './QuickCartCard.scss'


function QuickCartCard({ id, image, name, type, author, price, qty }) {
    
    const { removeFromCart } = useContext(BookStoreContext);


    return (
        <div className="quickCartCard">
            <img src={image} alt={name} />
            <div>
                <p className="type">{type}</p>
                <p className="name">{name}</p>
                <p className="author">{author}</p>
                <p className="price">${price}</p>
                <p className="qty">{qty} x {price}</p>
            </div>
            <IoMdClose onClick={() => removeFromCart(id)} />
        </div>
    )
}

export default QuickCartCard
