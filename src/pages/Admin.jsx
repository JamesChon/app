import { useState } from 'react';
import './Admin.css'
import DataService from '../services/dataServices';

function Admin() {
    const [coupon, setCoupon] = useState({
        code: '',
        discount: '',
    });
    const [allCoupons, setAllCoupons] = useState([]);

    const [product, setProduct] = useState({
        title: '',
        category: '',
        image: '',
        price: '',
    })
    const [allProducts, setAllProduct] = useState([]);


    function handleCouponChange(e) {
        const val = e.target.value;
        const name = e.target.name;

        var copy = { ...coupon };
        copy[name] = val;
        setCoupon(copy);
    }

    function saveCoupon() {
        console.log(coupon);

        let copy = [...allCoupons];
        copy.push(coupon);
        setAllCoupons(copy);
    }

    function handleProductChange(e) {
        const val = e.target.value;
        const name = e.target.name;

        var copy = { ...product };
        copy[name] = val;
        setProduct(copy);
    }

    function saveProduct() {
        console.log(product);
        product.price = parseFloat(product.price);

        let copy = [...allProducts];
        copy.push(product);
        setAllProduct(copy);


        // send the product to the server
        let service = new DataService();
        service.saveProduct(product);
    }


    return (
        <div className="admin page">
            <h1>Store Administration</h1>

            <div className='parent'>
                <div className="prods">
                    <h3>Products</h3>
                    <div className="form">
                        <div>
                            <label className='form-label'>Title</label>
                            <input onChange={handleProductChange} name="title" type="text" className='form-control' />
                        </div>
                        <div>
                            <label className='form-label'>Category</label>
                            <input onChange={handleProductChange} name="category" type="text" className='form-control' />
                        </div>
                        <div>
                            <label className='form-label'>Image</label>
                            <input onChange={handleProductChange} name="image" type="text" className='form-control' />
                        </div>
                        <div>
                            <label className='form-label'>Price</label>
                            <input onChange={handleProductChange} name="price" type="text" className='form-control' />
                        </div>
                        <div className="action">
                            <button onClick={saveProduct} className="btn btn-dark">Save Coupon</button>
                        </div>
                    </div>
                    <ul>
                        {allProducts.map(p => <li>{p.title} - {p.category} - ${p.price}</li>)}
                    </ul>
                </div>
                <div className="coupons">
                    <h3>Coupons</h3>


                    <div className='form'>
                        <div>
                            <label className="form-label">Code</label>
                            <input onChange={handleCouponChange} name="code" type="text" className="form-control" />
                        </div>

                        <div>
                            <label className="form-label">Discount</label>
                            <input onChange={handleCouponChange} name="discount" type="text" className="form-control" />
                        </div>

                        <div className="action">
                            <button onClick={saveCoupon} className="btn btn-dark">Save Coupon</button>
                        </div>
                    </div>

                    <ul>
                        {allCoupons.map(c => <li> {c.code} - ${c.discount} </li>)}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Admin;


/*
Product:
title
category
image
price



1 .- Create the form

2 .- Add the handle to a single input field and console the value

3.- 
A) create the state variable, 
B) add the onchange and name to all the input
C) finish the logic on the change fn

4.- Console log the product on save button

5.- add the list and render
Title -  category - $price
*/