import { useState } from "react";
import "./ShoppingList.css";

function ShoppingList() {
    const [list, setList] = useState(['test 1', 'test 2', 'test 3']);

    function addItem() {
        console.log('adding');

        let copy = { ...list };
        copy.push('New');
        setList(copy);
    }

    return (
        <div className="shopping-list page">
            <h3>Shopping List</h3>

            <div className="box">
                <input type="text" />
                <button onClick={addItem} className="btn btn-sm btn-success">Add</button>
            </div>

            <ul>
                {list.map(x => <li>{x}</li>)}
            </ul>
        </div>
    );
}

export default ShoppingList;
