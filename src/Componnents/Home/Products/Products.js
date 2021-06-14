import React from 'react';
import Laptop from '../Laptop/Laptop';
import Mobile from '../Mobile/Mobile';
import './Products.css';

const Products = () => {
    return (
       <div>
           <Mobile />
           <Laptop />
       </div>
    );
};

export default Products;