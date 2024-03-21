import Product from "../components/Product";
import "./Catalog.css";

function Catalog() {

    const data = [
        {
            title: "Mango",
            price: 2.59,
            category: "Fruit",
            image: "mango.jpg",
            _id: "1"
        },
        {
            title: "Papaya",
            price: 9.59,
            category: "Fruit",
            image: "papaya.jpg",
            _id: "2"
        },
        {
            title: "Dragon Fruit",
            price: 14.95,
            category: "Fruit",
            image: "dragonfruit.jpg",
            _id: "3"
        },
        {
            title: "Guava",
            price: 13.89,
            category: "Fruit",
            image: "guava.jpg",
            _id: "4"
        },
    ];

    return (
        <div className="catalog page">
            <h1>TROPICAL & EXOTIC FRUITS!</h1>
            {data.map(prod => <Product info={prod} />)}
        </div>
    );
}

export default Catalog;