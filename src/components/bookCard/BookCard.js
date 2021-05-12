import { useContext } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import './BookCard.scss';

import { BookStoreContext } from '../../context';
import Flip from 'react-reveal/Flip';


function BookCard({id, image, name, type, author, price }) {

    const { url } = useRouteMatch()
    // console.log(url)
    // const bookStore = useContext(BookStoreContext)
    // console.log('bookStore :', bookStore)
    const { addCartHandler } = useContext(BookStoreContext);

   
    return (
        <Flip left>
            <div className="bookCard">
                <div className="bookCard__image">
                    <img src={image} alt={name }/>
                </div>
                <div className="bookCard__body">
                    <p className="bookCard__body--type">{type}</p>
                    <p className="bookCard__body--name">{name}</p>
                    <p className="bookCard__body--author">{author}</p>
                    <p className="bookCard__body--price">${price}</p>
                </div>
                <div className="bookCard__footer">
                    <p onClick={() => addCartHandler(id)}>ADD TO CART</p>
                    <Link to={`${url}/${name}`}>
                        <i className="fa fa-exchange" aria-hidden="true"></i>
                    </Link>
                </div>
            </div>
        </Flip>
    )
}

export default BookCard
