import { useState } from "react";
import DataContext from "./dataContext";



function GlobalProvider(props) {
    const [cart, setCart] = useState([]);

    function addProductToCart(prod) {
        console.log('adding products');

        var copy = [...cart];
        copy.push(prod);
        setCart(copy);
    }

    function removeProductFromCart() {

    }

    return (
        <DataContext.Provider value={{
            cart: cart,
            addProductToCart: addProductToCart,
            removeProductFromCart: removeProductFromCart,
        }}>{props.children}</DataContext.Provider>
    )
}

export default GlobalProvider;