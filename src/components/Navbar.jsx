/*
 * Components:
 * are functions
 * start with capital letters
 * should always return something
 *
 * are usually exported
 */

import './Navbar.css';
import { Link } from 'react-router-dom';
import DataContext from '../context/dataContext';
import { useContext } from 'react';


function Navbar() {
    const cart = useContext(DataContext).cart;

    function getNumProducts() {
        let total = 0;
        for (let i = 0; i < cart.length; i++) {
            let prod = cart[i];
            total += prod.quantity;
        }

        return total;
    }
    return (
        <div>
            <nav className="navbar navbar-expand-lg" data-bs-theme="dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        Fruit Basket
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link
                                    className="nav-link active"
                                    aria-current="page"
                                    to="/home"
                                >
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">
                                    About
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/catalog">
                                    Catalog
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/ShoppingList">
                                    Shopping List
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Admin">
                                    Admin
                                </Link>
                            </li>
                        </ul>
                        <Link className="btn btn-outline-success" to='/cart'>
                            Cart ({getNumProducts()}) 
                        </Link>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;