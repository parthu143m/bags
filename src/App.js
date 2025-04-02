import './App.css';
import { Navbar } from './navbar';
import { CartProvider } from './CartContext';



function App() {
  return (
    <CartProvider>
      <div className="App">
        <br></br>
        <Navbar /><br></br><br></br>
      




    
      </div>
    </CartProvider>
  );
}

export default App;