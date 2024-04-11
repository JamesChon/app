import { useContext } from "react";
import "./Cart.css";
import DataContext from "../context/dataContext";
import constants from "../common/config";

function Cart() {
    const cart = useContext(DataContext).cart;

    console.log(cart);

    function getNumProducts() {
        let total = 0;
        for (let i = 0; i < cart.length; i++) {
            let prod = cart[i];
            total += prod.quantity;
        }

        return total;
    }

    function getTotal() {
        let total = 0;
        for (let i = 0; i < cart.length; i++) {
            let prod = cart[i];
            total += prod.quantity * prod.price;
        }
        return total.toFixed(2);
    }

    return (
        <div className="cart page">
            <h1>Cart</h1>
            <h6>You have {getNumProducts()} products ready for checkout!</h6>

            <div className="parent">
                <div className="list">
                    {cart.map((prod => <div className="prod-cart">
                        <img src={constants.IMAGE_PATH + prod.image} alt='' />
                        <h5>{prod.title}</h5>
                        <label>Price: ${prod.price}</label>
                        <label>Qty: {prod.quantity}</label>
                        <label>Total: ${prod.quantity * prod.price}</label>
                        <button className="btn btn-sm btn-danger">Delete</button>
                    </div>))}
                </div>
            </div>

            <div className="total">
                <h3>Total Balance: </h3>
                <h4>${getTotal()}</h4>
            </div>
        </div>
    );
}

export default Cart;    