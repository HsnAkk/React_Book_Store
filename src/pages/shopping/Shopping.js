import {useContext} from 'react'
import { BookStoreContext } from '../../context';

import BookCard from '../../components/bookCard/BookCard'

import './Shopping.scss';

function Shopping() {

    const {books} = useContext(BookStoreContext);
    // console.log('books :', books)

    return (
        <div className="shopping">
            {
                books.map(book => <BookCard key={ book.id } {...book}/>)
            }
            
        </div>
    )
}

export default Shopping
