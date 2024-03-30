import './Product.css'
import QuantityPicker from './QuantityPicker';
import constants from '../common/config';
function Product(props) {
    function add() {
        console.log('adding products');
    }
    return (
        <div className="product">
            <img src={constants.IMAGE_PATH + props.info.image} alt="" />
            <h6>{props.info.title}</h6>
            <label>${props.info.price}</label>

            <div className="controls">
            <QuantityPicker />


                <button onClick={add} className='btn btn-sm btn-success'>Add</button>
            </div>
        </div>
    );
}

export default Product;
