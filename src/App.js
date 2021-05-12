import { Switch, Route } from 'react-router-dom';
import {useContext} from 'react'

// components
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

// routing pages
import HomePage from './pages/homepage/HomePage';
import Shopping from './pages/shopping/Shopping';
import BookDetail from './pages/bookDetail/BookDetail';
import Cart from './pages/cart/Cart';
import QuickCart from './pages/quickCart/QuickCart';
import Contact from './pages/contact/Contact';
import Alert from './pages/alert/Alert';

//styling
import './App.scss';

// contextAPI
import { BookStoreContext } from './context'




function App() {

    const { showQuickCart, showAlert } = useContext(BookStoreContext);

    return (
        <div id="main-wrapper">
            <Header />
            <Switch>
                <Route exact path="/" component= {HomePage} />
                <Route exact path="/shopping" component= {Shopping} />
                <Route exact path="/shopping/:bookName" component= {BookDetail} />
                <Route exact path="/book/:bookName" component= {BookDetail} />
                <Route exact path="/cart" component= {Cart} />
                <Route exact path="/contact" component= {Contact} />
            </Switch>
            <Footer />

            {showQuickCart && <QuickCart />}
            {showAlert && <Alert />}
        </div>
    );
}

export default App;
