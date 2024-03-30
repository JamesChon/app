import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
    return (
        <div className="home page">
            <h1>Welcome to Fruit Basket</h1>

            <Link className="btn btn-primary" to="/catalog">Check our amazing catalog!</Link>
        </div>
    );
}

export default Home;