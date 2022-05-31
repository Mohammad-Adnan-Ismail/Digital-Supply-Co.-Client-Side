import React from 'react';
import { useNavigate } from 'react-router-dom';

const Product = ({product}) => {
    const {_id, quantity, supplier, name, img, description, price} = product;
    
    return (
        <div className='border border-dark text-center pb-2'>
            <img className='w-100' src={img} alt="" />
            <h2>{name}</h2>
            <p>Price: {price}</p>
            <p>Supplier: {supplier}</p>
            <p>Quantity: {quantity}</p>
            <p><small>{description}</small></p>
           
        </div>
    );
};

export default Product;