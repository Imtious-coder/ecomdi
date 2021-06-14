import React from 'react';
import './Mobile.css';
import Image from './97036a3ef3b60f99a34cf0e16fb867896146a6e2.jpeg';
import Image2 from './12.jpg';
import Image3 from './C15.jpg';
import Image4 from './Galaxy A11.jpg';
import Image5 from './IphoneX.jpg';
import Image6 from './Oppo.jpg';
import Image7 from './X50.jpg';
import Image8 from './Xpro.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const Mobile = () => {
    return (
        <section className="bg-gray-50 pb-10">
            <h2 className="text-center font-bold text-3xl pt-20">Mobiles</h2>

            <section className="grid md:grid-cols-5 grid-cols-2 justify-center gap-4 mt-20 mb-20 ml-5 mr-5">
                {/* First Card */}
                <div className="Mobile_Cards flex justify-center">
                    <div>
                        {/* Image */}
                        <div className="flex justify-center mr-2 ml-2">
                            <img src={Image} className="Mobile_Images mt-0 m-2" alt="" />
                        </div>
                        {/* Name */}
                        <p className="text-center font-bold mb-1 Mobile_Names">Never Settle</p>
                        {/* Ratings */}
                        <div className="flex justify-center mb-1 Mobile_Ratings">
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                        </div>
                        {/* Stock and Price */}
                        <div className="grid grid-cols-2 text-center ml-2 mb-1">
                            <div>
                                <p className="text-center Mobile_Stocks">Stock: 8</p>
                            </div>
                            <div>
                                <p className="text-center Laptop_Price">$220</p>
                            </div>
                        </div>
                        {/* Add to cart button */}
                        <div className="flex grid justify-center">
                            <button className="Mobile_AddToCart_Button">Add to cart</button>
                        </div>
                    </div>
                </div>

                {/* Second Card */}
                <div className="Mobile_Cards flex justify-center">
                    <div>
                        {/* Image */}
                        <div className="flex justify-center mr-2 ml-2">
                            <img src={Image2} className="Mobile_Images mt-0 m-2" alt="" />
                        </div>
                        {/* Name */}
                        <p className="text-center font-bold mb-1 Mobile_Names">iphone 12"</p>
                        {/* Ratings */}
                        <div className="flex justify-center mb-3 Mobile_Ratings">
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                        </div>
                        {/* Stock and Price */}
                        <div className="grid grid-cols-2 text-center ml-2 mb-1">
                            <div>
                                <p className="text-center Mobile_Stocks">Stock: 2</p>
                            </div>
                            <div>
                                <p className="text-center Laptop_Price">$450</p>
                            </div>
                        </div>
                        {/* Add to cart button */}
                        <div className="flex grid justify-center">
                            <button className="Mobile_AddToCart_Button">Add to cart</button>
                        </div>
                    </div>
                </div>

                {/* Third Card */}
                <div className="Mobile_Cards flex justify-center">
                    <div>
                        {/* Image */}
                        <div className="flex justify-center mr-2 ml-2">
                            <img src={Image3} className="Mobile_Images mt-0 m-2" alt="" />
                        </div>
                        {/* Name */}
                        <p className="text-center font-bold mb-1 Mobile_Names">Realme c15</p>
                        {/* Ratings */}
                        <div className="flex justify-center mb-3 Mobile_Ratings">
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                        </div>
                        {/* Stock and Price */}
                        <div className="grid grid-cols-2 text-center ml-2 mb-1">
                            <div>
                                <p className="text-center Mobile_Stocks">Stock: 12</p>
                            </div>
                            <div>
                                <p className="text-center Laptop_Price">$120</p>
                            </div>
                        </div>
                        {/* Add to cart button */}
                        <div className="flex grid justify-center">
                            <button className="Mobile_AddToCart_Button">Add to cart</button>
                        </div>
                    </div>
                </div>

                {/* Fourth Card */}
                <div className="Mobile_Cards flex justify-center">
                    <div>
                        {/* Image */}
                        <div className="flex justify-center">
                            <img src={Image4} className="Mobile_Images mt-0 m-2" alt="" />
                        </div>
                        {/* Name */}
                        <p className="text-center font-bold mb-1 Mobile_Names">Galaxy A11</p>
                        {/* Ratings */}
                        <div className="flex justify-center mb-3 Mobile_Ratings">
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                        </div>
                        {/* Stock and Price */}
                        <div className="grid grid-cols-2 text-center ml-2 mb-1">
                            <div>
                                <p className="text-center Mobile_Stocks">Stock: 18</p>
                            </div>
                            <div>
                                <p className="text-center Laptop_Price">$320</p>
                            </div>
                        </div>
                        {/* Add to cart button */}
                        <div className="flex grid justify-center">
                            <button className="Mobile_AddToCart_Button">Add to cart</button>
                        </div>
                    </div>
                </div>

                {/* Fifth Card */}
                <div className="Mobile_Cards flex justify-center">
                    <div >
                        {/* Image */}
                        <div className="flex justify-center mr-2 ml-2">
                            <img src={Image5} className="Mobile_Images mt-0 m-2" alt="" />
                        </div>
                        {/* Name */}
                        <p className="text-center font-bold mb-1 Mobile_Names">iphone X</p>
                        {/* Ratings */}
                        <div className="flex justify-center mb-3 Mobile_Ratings">
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                        </div>
                        {/* Stock and Price */}
                        <div className="grid grid-cols-2 text-center ml-2 mb-1">
                            <div>
                                <p className="text-center Mobile_Stocks">Stock: 7</p>
                            </div>
                            <div>
                                <p className="text-center Laptop_Price">$360</p>
                            </div>
                        </div>
                        {/* Add to cart button */}
                        <div className="flex grid justify-center">
                            <button className="Mobile_AddToCart_Button">Add to cart</button>
                        </div>
                    </div>
                </div>

                {/* Sixth Card */}
                <div className="Mobile_Cards flex justify-center">
                    <div>
                        {/* Image */}
                        <div className="flex justify-center ml-2 mr-2">
                            <img src={Image6} className="Mobile_Images mt-0 m-2" alt="" />
                        </div>
                        {/* Name */}
                        <p className="text-center font-bold mb-1 Mobile_Names">Oppo A5</p>
                        {/* Ratings */}
                        <div className="flex justify-center mb-3 Mobile_Ratings">
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                        </div>
                        {/* Stock and Price */}
                        <div className="grid grid-cols-2 text-center ml-2 mb-1">
                            <div>
                                <p className="text-center Mobile_Stocks">Stock: 12</p>
                            </div>
                            <div>
                                <p className="text-center Laptop_Price">$370</p>
                            </div>
                        </div>
                        {/* Add to cart button */}
                        <div className="flex grid justify-center">
                            <button className="Mobile_AddToCart_Button">Add to cart</button>
                        </div>
                    </div>
                </div>

                {/* Seventh Card */}
                <div className="Mobile_Cards flex justify-center">
                    <div>
                        {/* Image */}
                        <div className="flex justify-center ml-2 mr-2">
                            <img src={Image7} className="Mobile_Images mt-0 m-2" alt="" />
                        </div>
                        {/* Name */}
                        <p className="text-center font-bold mb-1 Mobile_Names">Realme X15</p>
                        {/* Ratings */}
                        <div className="flex justify-center mb-3 Mobile_Ratings">
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                        </div>
                        {/* Stock and Price */}
                        <div className="grid grid-cols-2 text-center ml-2 mb-1">
                            <div>
                                <p className="text-center Mobile_Stocks">Stock: 288</p>
                            </div>
                            <div>
                                <p className="text-center Laptop_Price">$180</p>
                            </div>
                        </div>
                        {/* Add to cart button */}
                        <div className="flex grid justify-center">
                            <button className="Mobile_AddToCart_Button">Add to cart</button>
                        </div>
                    </div>
                </div>

                {/* Eight Card */}
                <div className="Mobile_Cards flex justify-center">
                    <div>
                        {/* Image */}
                        <div className="flex justify-center">
                            <img src={Image8} className="Mobile_Images mt-0 m-2" alt="" />
                        </div>
                        {/* Name */}
                        <p className="text-center font-bold mb-1 Mobile_Names">Realme X Pro</p>
                        {/* Ratings */}
                        <div className="flex justify-center mb-3 Mobile_Ratings">
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                        </div>
                        {/* Stock and Price */}
                        <div className="grid grid-cols-2 text-center ml-2 mb-1">
                            <div>
                                <p className="text-center Mobile_Stocks">Stock: 23</p>
                            </div>
                            <div>
                                <p className="text-center Laptop_Price">$680</p>
                            </div>
                        </div>
                        {/* Add to cart button */}
                        <div className="flex grid justify-center">
                            <button className="Mobile_AddToCart_Button">Add to cart</button>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    );
};

export default Mobile;