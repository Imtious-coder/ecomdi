import React, { useEffect, useState } from 'react';
import './Bikes.css'
import Bick_Data from './Bicks_data.json'
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


const Bikes = () => {
    const [bicks, setBicks] = useState([]);
    useEffect(() => {
        setBicks(Bick_Data);
    }, [])
    return (
        <div className="ml-5 mb-5">
             <Link to="/bikes">
             <p className="grid font-bold text-2xl ml-5 test mt-5">Bick & Scooter</p>
             </Link>
        
             <section className="grid md:grid-cols-5 grid-cols-1 mb-10">
                {
                    bicks.map((e) => {
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
    )
}

export default Bikes
