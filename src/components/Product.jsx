import './Product.css'
import QuantityPicker from './QuantityPicker';
import constants from '../common/config';
function Product(props) {
    return (
        <div className="product">
            <img src={constants.IMAGE_PATH + props.info.image} alt="" />
            <h6>{props.info.title}</h6>
            <label>${props.info.price}</label>

            <QuantityPicker />

            {/* {} */}
        </div>
    );
}

export default Product;
