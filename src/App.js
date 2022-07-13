import './App.css';
import Home from './component/Home';
import Navbar from './component/Navbar';
import {Routes, Route} from 'react-router-dom';
import Products from './component/Products';
import Product from './component/Product';
import About from './component/About';
import Contact from './component/Contact';
import Cart from './component/Cart';
import Checkout from './component/Checkout';

function App() {
  return (
    <>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route exact path="/products" element={<Products/>}/>
          <Route exact path="/products/:id" element={<Product/>}/>
          <Route exact path="/cart" element={<Cart/>}/>
          <Route exact path="/checkout" element={<Checkout/>}/>
          <Route exact path="/about" element={<About/>}/>
          <Route exact path="/contact" element={<Contact/>}/>
        </Routes>
    </>
  );
}

export default App;
