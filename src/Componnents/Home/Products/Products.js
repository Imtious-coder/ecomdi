import React, { useEffect, useState } from 'react';
import BickScooter from '../BickScooter/BickScooter';
import Groceries from '../Groceries/Groceries';
import Laptop from '../Laptop/Laptop';
import Mobile from '../Mobile/Mobile';
import './Products.css';
import Data from './FAKE_DATA.json';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    Bick: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};



const Products = () => {
    const [datas, setDatas] = useState([]);
    useEffect(() => {
        setDatas(Data);
        console.log(Data)
    }, [])
    return (
        <div>
            <Mobile />
            <Laptop />
            <Groceries />
            
                <div className="grid md:grid-cols-6 grid-cols-2">
                    {
                        datas.map(bick => <BickScooter bick={bick}></BickScooter>)
                    }
                </div>
           
        </div>
    );
};

export default Products;