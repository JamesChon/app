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
            <h1>A navbar will be here</h1>
            <button>Test 1</button>
            <button>Test 2</button>
            <button>Test 3</button>
            <button>Test 4</button>
        </div>
    );
}

export default Navbar;