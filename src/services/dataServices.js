import axios from 'axios';

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

class DataService {


    async getCatalog() {
        // without a server
        // return data;


        // call the server
        let response = await axios.get("http://127.0.0.1:5000/api/products");


        return response.data;
    }


    async saveProduct(product) {
        let response = await axios.post("http://127.0.0.1:5000/api/products", product);
        return response.data;
    }
}

export default DataService;

// install node
// npm install
// npm start