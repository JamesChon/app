import { useContext } from "react";
import "./Cart.css";
import DataContext from "../context/dataContext";

function Cart() {
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
        <div className="cart page">
            <h1>Cart</h1>
            <h6>You have {getNumProducts()} products ready for checkout!</h6>
        </div>
    );
}

export default Cart;    