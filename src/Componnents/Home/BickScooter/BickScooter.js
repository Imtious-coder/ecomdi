import React from 'react';
import './BickScooter.css';
import Image from './hero.jpg';
import Image2 from './honda-cb-hornet-160r.jpg';
import Image3 from './Honda-CBR-150R-Repsol-600x600.jpg';
import Image4 from './Royal enfield.jpg';
import Image5 from './suzuki-ge110dda-hayate-ep-blue-motorbike.jpg';
import Image6 from './suzukiscooter.jpg';
import Image7 from './tvs-xl-100-heavy-duty-30-apr-2018.jpg';
import Image8 from './tvs-apache-rtr-160-4v-drum--abs--bsvi20191126160322.jpg';
import Image9 from './suzuki-gixxer-sf-250-motogp-5.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const BickScooter = () => {
    return (
        <section className="bg-blue-50 pb-10">
            {/* Title */}
            <h2 className="text-center font-bold text-3xl pt-10">Bick and Scooter</h2>
            {/* All cards */}
            <section className="grid md:grid-cols-5 grid-cols-2 justify-center gap-4 mt-20 mb-20 ml-5 mr-5">
                {/* First Card */}
                <div className="Bick_Cards flex justify-center">
                    <div>
                        {/* Image */}
                        <div className="flex justify-center mr-2 ml-2">
                            <img src={Image} className="Bick_Images mt-0 m-2" alt="" />
                        </div>
                        {/* Name */}
                        <p className="text-center font-bold mb-1 Bick_Names">Hero Splender</p>
                        {/* Ratings */}
                        <div className="flex justify-center mb-1 Bick_Ratings">
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                        </div>
                        {/* Stock and Price */}
                        <div className="grid grid-cols-2 text-center ml-2 mb-1">
                            <div>
                                <p className="text-center Bick_Stocks">Stock: 8</p>
                            </div>
                            <div>
                                <p className="text-center Laptop_Price">$520</p>
                            </div>
                        </div>
                        {/* Add to cart button */}
                        <div className="flex grid justify-center">
                            <button className="Bick_AddToCart_Button">Add to cart</button>
                        </div>
                    </div>
                </div>

                {/* Second Card */}
                <div className="Bick_Cards flex justify-center">
                    <div>
                        {/* Image */}
                        <div className="flex justify-center mr-2 ml-2">
                            <img src={Image2} className="Bick_Images mt-0 m-2" alt="" />
                        </div>
                        {/* Name */}
                        <p className="text-center font-bold mb-1 Bick_Names">Honda Hornet 160</p>
                        {/* Ratings */}
                        <div className="flex justify-center mb-3 Bick_Ratings">
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                        </div>
                        {/* Stock and Price */}
                        <div className="grid grid-cols-2 text-center ml-2 mb-1">
                            <div>
                                <p className="text-center Bick_Stocks">Stock: 2</p>
                            </div>
                            <div>
                                <p className="text-center Laptop_Price">$450</p>
                            </div>
                        </div>
                        {/* Add to cart button */}
                        <div className="flex grid justify-center">
                            <button className="Bick_AddToCart_Button">Add to cart</button>
                        </div>
                    </div>
                </div>

                {/* Third Card */}
                <div className="Bick_Cards flex justify-center">
                    <div>
                        {/* Image */}
                        <div className="flex justify-center mr-2 ml-2">
                            <img src={Image3} className="Bick_Images mt-0 m-2" alt="" />
                        </div>
                        {/* Name */}
                        <p className="text-center font-bold mb-1 Bick_Names">Repjol 160</p>
                        {/* Ratings */}
                        <div className="flex justify-center mb-3 Bick_Ratings">
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                        </div>
                        {/* Stock and Price */}
                        <div className="grid grid-cols-2 text-center ml-2 mb-1">
                            <div>
                                <p className="text-center Bick_Stocks">Stock: 18</p>
                            </div>
                            <div>
                                <p className="text-center Laptop_Price">$650</p>
                            </div>
                        </div>
                        {/* Add to cart button */}
                        <div className="flex grid justify-center">
                            <button className="Bick_AddToCart_Button">Add to cart</button>
                        </div>
                    </div>
                </div>

                {/* Fourth Card */}
                <div className="Bick_Cards flex justify-center">
                    <div>
                        {/* Image */}
                        <div className="flex justify-center">
                            <img src={Image4} className="Bick_Images mt-0 m-2" alt="" />
                        </div>
                        {/* Name */}
                        <p className="text-center font-bold mb-1 Bick_Names">Royal Enfield 200 cc</p>
                        {/* Ratings */}
                        <div className="flex justify-center mb-3 Bick_Ratings">
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                        </div>
                        {/* Stock and Price */}
                        <div className="grid grid-cols-2 text-center ml-2 mb-1">
                            <div>
                                <p className="text-center Bick_Stocks">Stock: 18</p>
                            </div>
                            <div>
                                <p className="text-center Laptop_Price">$320</p>
                            </div>
                        </div>
                        {/* Add to cart button */}
                        <div className="flex grid justify-center">
                            <button className="Bick_AddToCart_Button">Add to cart</button>
                        </div>
                    </div>
                </div>

                {/* Fifth Card */}
                <div className="Bick_Cards flex justify-center">
                    <div >
                        {/* Image */}
                        <div className="flex justify-center mr-4 ml-4">
                            <img src={Image5} className="Bick_Images mt-0 m-2" alt="" />
                        </div>
                        {/* Name */}
                        <p className="text-center font-bold mb-1 Bick_Names">Suzuki Hayate EP</p>
                        {/* Ratings */}
                        <div className="flex justify-center mb-3 Bick_Ratings">
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                        </div>
                        {/* Stock and Price */}
                        <div className="grid grid-cols-2 text-center ml-2 mb-1">
                            <div>
                                <p className="text-center Bick_Stocks">Stock: 7</p>
                            </div>
                            <div>
                                <p className="text-center Laptop_Price">$360</p>
                            </div>
                        </div>
                        {/* Add to cart button */}
                        <div className="flex grid justify-center">
                            <button className="Bick_AddToCart_Button">Add to cart</button>
                        </div>
                    </div>
                </div>

                {/* Sixth Card */}
                <div className="Bick_Cards flex justify-center">
                    <div>
                        {/* Image */}
                        <div className="flex justify-center ml-2 mr-2">
                            <img src={Image6} className="Bick_Images mt-0 m-2" alt="" />
                        </div>
                        {/* Name */}
                        <p className="text-center font-bold mb-1 Bick_Names">Suzuki 110</p>
                        {/* Ratings */}
                        <div className="flex justify-center mb-3 Bick_Ratings">
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                        </div>
                        {/* Stock and Price */}
                        <div className="grid grid-cols-2 text-center ml-2 mb-1">
                            <div>
                                <p className="text-center Bick_Stocks">Stock: 12</p>
                            </div>
                            <div>
                                <p className="text-center Laptop_Price">$370</p>
                            </div>
                        </div>
                        {/* Add to cart button */}
                        <div className="flex grid justify-center">
                            <button className="Bick_AddToCart_Button">Add to cart</button>
                        </div>
                    </div>
                </div>

                {/* Seventh Card */}
                <div className="Bick_Cards flex justify-center">
                    <div>
                        {/* Image */}
                        <div className="flex justify-center ml-4 mr-4">
                            <img src={Image7} className="Bick_Images mt-0 m-2" alt="" />
                        </div>
                        {/* Name */}
                        <p className="text-center font-bold mb-1 Bick_Names"> TVS XL</p>
                        {/* Ratings */}
                        <div className="flex justify-center mb-3 Bick_Ratings">
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                        </div>
                        {/* Stock and Price */}
                        <div className="grid grid-cols-2 text-center ml-2 mb-1">
                            <div>
                                <p className="text-center Bick_Stocks">Stock: 288</p>
                            </div>
                            <div>
                                <p className="text-center Laptop_Price">$180</p>
                            </div>
                        </div>
                        {/* Add to cart button */}
                        <div className="flex grid justify-center">
                            <button className="Bick_AddToCart_Button">Add to cart</button>
                        </div>
                    </div>
                </div>

                {/* Eight Card */}
                <div className="Bick_Cards flex justify-center">
                    <div>
                        {/* Image */}
                        <div className="flex justify-center">
                            <img src={Image8} className="Bick_Images mt-0 m-2" alt="" />
                        </div>
                        {/* Name */}
                        <p className="text-center font-bold mb-1 Bick_Names">RTR 160 4v ABS</p>
                        {/* Ratings */}
                        <div className="flex justify-center mb-3 Bick_Ratings">
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                        </div>
                        {/* Stock and Price */}
                        <div className="grid grid-cols-2 text-center ml-2 mb-1">
                            <div>
                                <p className="text-center Bick_Stocks">Stock: 23</p>
                            </div>
                            <div>
                                <p className="text-center Laptop_Price">$680</p>
                            </div>
                        </div>
                        {/* Add to cart button */}
                        <div className="flex grid justify-center">
                            <button className="Bick_AddToCart_Button">Add to cart</button>
                        </div>
                    </div>
                </div>

                {/* Ninth Card */}
                <div className="Bick_Cards flex justify-center">
                    <div>
                        {/* Image */}
                        <div className="flex justify-center">
                            <img src={Image9} className="Bick_Images mt-0 m-2" alt="" />
                        </div>
                        {/* Name */}
                        <p className="text-center font-bold mb-1 Bick_Names">Suzuki GSXR FI ABS</p>
                        {/* Ratings */}
                        <div className="flex justify-center mb-3 Bick_Ratings">
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                        </div>
                        {/* Stock and Price */}
                        <div className="grid grid-cols-2 text-center ml-2 mb-1">
                            <div>
                                <p className="text-center Bick_Stocks">Stock: 23</p>
                            </div>
                            <div>
                                <p className="text-center Laptop_Price">$680</p>
                            </div>
                        </div>
                        {/* Add to cart button */}
                        <div className="flex grid justify-center">
                            <button className="Bick_AddToCart_Button">Add to cart</button>
                        </div>
                    </div>
                </div>

            </section>
        </section>
    );
};

export default BickScooter;