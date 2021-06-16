import React from 'react';
import BickScooter from '../BickScooter/BickScooter';
import Groceries from '../Groceries/Groceries';
import Laptop from '../Laptop/Laptop';
import Mobile from '../Mobile/Mobile';
import './Products.css';

const Products = () => {
    return (
       <div>
           <Mobile />
           <Laptop />
           <BickScooter />
           <Groceries />
       </div>
    );
};

export default Products;