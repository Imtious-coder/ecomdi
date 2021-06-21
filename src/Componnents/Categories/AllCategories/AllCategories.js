import React, { useEffect, useState } from 'react';
import CategoriesNavigation from '../CategoriesNavigation/CategoriesNavigation';
import AllProducts from '../AllProducts.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';


const AllCategories = () => {
    const [allProducts, setAllProducts] = useState([]);
    useEffect(() => {
        setAllProducts(AllProducts);
    }, [])

    return (
        <section className="flex ml-10 mr-10">
            <div className="text-center">
                <CategoriesNavigation />
            </div>
            <div className="">
            <section className="grid md:grid-cols-3 grid-cols-1 mb-10">
                {
                    allProducts.map((e) => {
                        return (
                            <div className="justify-center bg-blue-50">
                                <div className="mb-5 mt-5 ">
                                    <img className="mb-2 " src={e.image} alt="" />
                                    <p className="text-center font-bold text-xl">{e.name}</p>
                                    <div className="grid grid-cols-3 mb-2 text-center mt-3 flex justify-center">
                                        <p className="Font1 ">{e.price}</p>
                                        <p className=" Font1">-35%</p>
                                        <p className=" flex justify-center"><FontAwesomeIcon icon={faCartPlus} /></p>
                                    </div>
                                </div>
                            </div>)
                    })
                }
            </section>
            </div>
        </section>
    );
};

export default AllCategories;