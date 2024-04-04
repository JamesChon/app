import { useState } from 'react';
import './QuantityPicker.css';

function QuantityPicker(props) {
    const [quantity, setQuantity] = useState(1);

    function increase() {
        let newVal = quantity + 1;
        setQuantity(newVal);
        props.onChange(newVal);
    }

    function decrease() {
        let newVal = quantity - 1;
        if (newVal > 0) {
            setQuantity(newVal);
            props.onChange(newVal);
        }
    }

    return (
        <div className="qt-picker">
            <button className="btn btn-sm btn-outline-success" disabled={quantity === 1} onClick={decrease}>-</button>
            <label>{quantity}</label>
            <button className="btn btn-sm btn-outline-success" onClick={increase}>+</button>
        </div>
    );
}

export default QuantityPicker;