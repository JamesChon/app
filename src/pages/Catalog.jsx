import { useEffect, useState } from "react";
import Product from "../components/Product";
import "./Catalog.css";
import DataService from "../services/dataServices";


function Catalog() {
    const [data, setData] = useState([]);

    async function loadCatalog() {
        let service = new DataService();
        let cat = await service.getCatalog();
        setData(cat);
    }

    useEffect(function () {
        loadCatalog();
    }, []);



    return (
        <div className="catalog page">
            <h1>TROPICAL & EXOTIC FRUITS!</h1>
            {data.map(prod => <Product info={prod} />)}
        </div>
    );
}

export default Catalog;