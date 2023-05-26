import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CheckoutPage from './components/CheckoutPage';
import NavBar from './components/NavBar';
import Products from './components/Products';
import { CartProvider } from './components/contexts/CartContext';



function App() {
  return (
    <CartProvider>
    <div className="App">
  <BrowserRouter>
    <Routes>
<Route path = "/" element={<Products/>}/>
    <Route path = "/checkout-page" element={<CheckoutPage/>}/> 
    </Routes>
  </BrowserRouter>
    <NavBar/>
    </div>
    </CartProvider>
  );
}

export default App;