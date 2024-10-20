import './App.css';
import Header from './components/Header';
import Products from './components/Products';
import Footer from './components/Footer';
import { CartProvider } from './context/CartContext';
const App=()=>{
  return (
    <CartProvider>
      <div className="App">
        <Header />
        <Products />
        <Footer/>
      </div>
    </CartProvider>
  );
}

export default App;
