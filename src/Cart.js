import React, { useContext } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { CartContext } from './CartContext';
import './plastic.css';
import { useNavigate } from 'react-router-dom';
import { Final } from './final';





export function Cart() {
    const { cartItems, removeFromCart } = useContext(CartContext);


    const navigate = useNavigate();


    // Function to send data to Firebase
    
    return (
        <div className="cart-container">
            <h1>Your Cart</h1>
            {cartItems.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                <div className="cart-items">
                    {cartItems.map((item) => (
                        <div className="cart-item" key={item.id}>
                            <img src={item.image} alt={item.title} className="cart-img" />
                            <div className="cart-details">
                                <h3>{item.title}</h3>
                                <p>{item.disc}</p>
                            </div>
                            <button 
                                className="remove-btn"
                                onClick={() => removeFromCart(item.id)}
                            >
                                Remove
                            </button>
                           

                        </div>

                        
                    ))}
                </div>

                
            )}
         

         <Routes>
                <Route path="/final" element={<Final />} />
            </Routes>

          






            <button onClick={()=> navigate("/final")}>hlo</button>
            <Link to="/" className="back-btn">Continue Shopping</Link>
            

        </div>
    );
}