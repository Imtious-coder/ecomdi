import React from 'react';
import BickScooter from '../BickScooter/BickScooter';
import Laptop from '../Laptop/Laptop';
import Mobile from '../Mobile/Mobile';
import './Products.css';

const Products = () => {
    return (
       <div>
           <Mobile />
           <Laptop />
           <BickScooter />
       </div>
    );
};

export default Products;