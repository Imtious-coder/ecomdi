import React, { useEffect, useState } from 'react';
import './Products.css';

import Bick_Data from './Bick_Data.json';
import Laptop_Data from './Laptop_Data.json';
import Mobile_Data from './Mobile_Data.json';
import Grocerie_Data from './Groceries_Data.json';

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 1200, min: 824 },
        items: 5
    },
    tablet: {
        breakpoint: { max: 823, min: 464 },
        items: 3
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 2
    }
};



const Products = () => {
    const [bicks, setBicks] = useState([]);
    const [laptops, setLaptops] = useState([]);
    const [mobiles, setMobiles] = useState([]);
    const [groceries, setGroceries] = useState([]);

    useEffect(() => {
        setBicks(Bick_Data);
    }, [])
    useEffect(() => {
        setLaptops(Laptop_Data);
    }, [])
    useEffect(() => {
        setMobiles(Mobile_Data);
    }, [])
    useEffect(() => {
        setGroceries(Grocerie_Data);
    }, [])

    return (
        <div className="ml-5">
            <p className="grid font-bold text-2xl ml-5 test mt-5">Mobile</p>
            <section style={{ overflowX: "scroll" }} className="flex Scroll ml-5 mr-10">
                {
                    mobiles.map((e) => {
                        return (
                            <div className="flex justify-center">
                                <Link to="/detailsPage">
                                    <div className="mb-3 mt-5 Products_Cards">
                                        <img className="mb-2 Products_Images" src={e.image} alt="" />
                                        <p className="text-center font-bold text-xl">{e.name}</p>
                                        <div className="grid grid-cols-3 mb-2 text-center mt-3 flex justify-center">
                                            <p className="Font1 Product_Price">{e.price}</p>
                                            <p className="Product_Discount Font1">-35%</p>
                                            <p className="Product_Cart_Icon flex justify-center"><FontAwesomeIcon icon={faCartPlus} /></p>
                                        </div>
                                    </div>
                                </Link>
                            </div>)
                    })
                }
            </section>

            <p className="grid font-bold text-2xl ml-5 test mt-5">Groceries</p>
            <section style={{ overflowX: "scroll" }} className="flex Scroll ml-5 mr-10">
                {
                    groceries.map((e) => {
                        return (
                            <div className="flex justify-center ">
                                <div className="mb-3 mt-5 Products_Cards">
                                    <img className="mb-2 Products_Images" src={e.image} alt="" />
                                    <p className="text-center font-bold text-xl">{e.name}</p>
                                    <div className="grid grid-cols-3 mb-2 text-center mt-3 flex justify-center">
                                        <p className="Font1 Product_Price">{e.price}</p>
                                        <p className="Product_Discount Font1">-35%</p>
                                        <p className="Product_Cart_Icon flex justify-center"><FontAwesomeIcon icon={faCartPlus} /></p>
                                    </div>
                                </div>
                            </div>)
                    })
                }
            </section>

            <p className="grid font-bold text-2xl ml-5 test mt-5">Laptop</p>
            <section style={{ overflowX: "scroll" }} className="flex Scroll ml-5 mr-10">
                {
                    laptops.map((e) => {
                        return (
                            <div className="flex justify-center">
                                <Link to="/detailsPage">
                                    <div className="mb-3 mt-5 Products_Cards">
                                        <img className="mb-2 Products_Images" src={e.image} alt="" />
                                        <p className="text-center font-bold text-xl">{e.name}</p>
                                        <div className="grid grid-cols-3 mb-2 text-center mt-3 flex justify-center">
                                            <p className="Font1 Product_Price">{e.price}</p>
                                            <p className="Product_Discount Font1">-35%</p>
                                            <p className="Product_Cart_Icon flex justify-center"><FontAwesomeIcon icon={faCartPlus} /></p>
                                        </div>
                                    </div>
                                </Link>
                            </div>)
                    })
                }
            </section>

            <p className="grid font-bold text-2xl ml-5 test mt-5">Bick & Scooter</p>
            <section style={{ overflowX: "scroll" }} className="flex Scroll ml-5 mr-10">
                {
                    bicks.map((e) => {
                        return (
                            <div className="flex justify-center">
                                <Link to="/detailsPage">
                                    <div className="mb-3 mt-5 Products_Cards">
                                        <img className="mb-2 Products_Images" src={e.image} alt="" />
                                        <p className="text-center font-bold text-xl">{e.name}</p>
                                        <div className="grid grid-cols-3 mb-2 text-center mt-3 flex justify-center">
                                            <p className="Font1 Product_Price">{e.price}</p>
                                            <p className="Product_Discount Font1">-35%</p>
                                            <p className="Product_Cart_Icon flex justify-center"><FontAwesomeIcon icon={faCartPlus} /></p>
                                        </div>
                                    </div>
                                </Link>
                            </div>)
                    })
                }
            </section>

        </div>
    );
};

export default Products;