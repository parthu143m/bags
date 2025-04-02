import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Home } from './home';
import { Bulk } from './bulk';
import { Plastic } from './plastic';
import { Leather } from './leather';
import { Cart }  from './Cart';
import { CartContext } from './CartContext';
import './navbar.css';
import { Final } from './final';

export function Navbar() {
    const { cartItems } = useContext(CartContext);

    return (
        <Router>
            <nav className="navbar">
                <ul className="ul">
                    <li className="li">
                        <Link to="/">HOME</Link>
                    </li>
                    <li className="li">
                        <Link to="/leather">LEATHER</Link>
                    </li>
                    <li className="li">
                        <Link to="/bulk">BULK</Link>
                    </li>
                    <li className="li">
                        <Link to="/plastic">PLASTIC BAGS</Link>
                    </li>
                    <li className="li">
                        <Link to="/cart" className="cart-link">
                            Cart ({cartItems.length})
                        </Link>
                    </li>
                </ul>
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/leather" element={<Leather />} />
                <Route path="/bulk" element={<Bulk />} />
                <Route path="/plastic" element={<Plastic />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/final" element={<Final />} />
            </Routes>
        </Router>
    );
}