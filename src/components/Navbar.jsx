/**
 * Components:
 * are function s
 * start with capital letters
 * should always return something
 * 
 * are usually exported
 */

import './Navbar.css'

function Navbar() {
    return (
        <div className="navbar">
            <h1>Fruit Basket</h1>
        </div>
    );
}

export default Navbar;