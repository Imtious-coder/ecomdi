import React, { useEffect, useState } from 'react';
import './Macbook.css'
import Macdata from '../Macbook/Macdata.json'
import "react-multi-carousel/lib/styles.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import CategoriesNavigation from '../../../../Categories/CategoriesNavigation/CategoriesNavigation';

const Macbook = () => {
    const [mb, setMb] = useState([]);
    useEffect(() => {
        setMb(Macdata);
    }, [])
    return (
        <section className="flex ml-10 mr-10">
           <div className="text-center">
               <CategoriesNavigation />
            </div>
            <div className="ml-5 mb-5">   
             <p className="grid font-bold text-2xl ml-5 test mt-5">Macbook</p>
             <section className="grid md:grid-cols-5 grid-cols-1 mb-10">
                {
                    mb.map((e) => {
                        return (
                            <div className="flex justify-center">
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
            </div>
        </section>
    )
}

export default Macbook
