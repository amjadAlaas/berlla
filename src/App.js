import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {Container} from './components/index';
import {Header, Footer} from './sections/index';
import {Home, Profile, Cart, NewCollection, Products, Settings} from './Pages/index';
import {CartProvider} from 'react-use-cart';
const App = () => {
    return(
        <>
        <CartProvider>
            <Router>
                <Header/>
                    <Container>
                        <Routes>
                            <Route path='/' element={<Home />}/>
                            <Route path='/profile' element={<Profile />}/>
                            <Route path='/cart' element={<Cart />}/>
                            <Route path='/new-collection' element={<NewCollection />}/>
                            <Route path='/products' element={<Products />}/>
                            <Route path='/settings' element={<Settings />}/>
                        </Routes>
                    </Container>
                <Footer />
            </Router>
        </CartProvider>
        </>
    );
}
export default App;