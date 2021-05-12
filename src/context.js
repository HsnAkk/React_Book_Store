import { useState, createContext } from 'react';
import data from './data.json';

export const BookStoreContext = createContext();


export function BookStoreProvider({ children }) {
      
    const [books] = useState(data.books)
    const [cart, setCart] = useState([])
    const [showQuickCart, setShowQuickCart] = useState(false)
    const [showAlert, setShowAlert] = useState(false)
    const [alertMessage, setAlertMessage] = useState('')


    const addCartHandler = (id, qty = 1) => {
        // console.log(id)
        let book = books.find(item => item.id === id);
        const isBookInCart = cart.filter(item => item.id === book.id);

        if (isBookInCart.length === 0) {
            setCart(prevState => [...prevState, { ...book, qty }])

        } else {
            setAlertMessage('Already added to cart...! ⛔ 👍')
            setShowAlert(true)    
        }
    }


    const removeFromCart = ID => {
        setCart(cart.filter(item => item.id !== ID))
    }


    return (
        <BookStoreContext.Provider value={{
            books,
            cart,
            showQuickCart,
            showAlert,
            alertMessage,
            setAlertMessage,
            setShowAlert,
            setCart,
            setShowQuickCart,
            addCartHandler,
            removeFromCart
        }}>
            {children}
        </BookStoreContext.Provider>
    )
}

// export const BookStoreConsumer = BookStoreContext.Consumer;
