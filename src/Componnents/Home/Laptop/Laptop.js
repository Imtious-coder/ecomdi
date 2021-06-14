import React from 'react';
import './Laptop.css';
import Image from './Mackbook Air.jpg';
import Image2 from './mackbook pro.jpg';
import Image3 from './Asus.jpg';
import Image4 from './Dell Inspiration 15.jpg';
import Image5 from './g15.jpg';
import Image6 from './hp-15s-1-500x500.jpg';
import Image7 from './pavilion-13-01-500x500.jpg';
import Image8 from './X515JP.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons'

const Laptop = () => {
    return (
        <section className="bg-blue-50 pb-10">
            {/* Title */}
            <h2 className="text-center font-bold text-3xl pt-10">Laptops</h2>
            {/* All cards */}
            <section className="grid md:grid-cols-5 grid-cols-2 justify-center gap-4 mt-20 mb-20 ml-5 mr-5">
                {/* First Card */}
                <div className="Laptop_Cards flex justify-center">
                    <div>
                        {/* Image */}
                        <div className="flex justify-center mr-2 ml-2">
                            <img src={Image} className="Laptop_Images mt-0 m-2" alt="" />
                        </div>
                        {/* Name */}
                        <p className="text-center font-bold mb-1 Laptop_Names">Mackbook Air</p>
                        {/* Ratings */}
                        <div className="flex justify-center mb-1 Laptop_Ratings">
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                        </div>
                        {/* Stock and Price */}
                        <div className="grid grid-cols-2 text-center ml-2 mb-1">
                            <div>
                                <p className="text-center Laptop_Stocks">Stock: 8</p>
                            </div>
                            <div>
                                <p className="text-center Laptop_Price">$520</p>
                            </div>
                        </div>
                        {/* Add to cart button */}
                        <div className="flex grid justify-center">
                            <button className="Laptop_AddToCart_Button">Add to cart</button>
                        </div>
                    </div>
                </div>

                {/* Second Card */}
                <div className="Laptop_Cards flex justify-center">
                    <div>
                        {/* Image */}
                        <div className="flex justify-center mr-2 ml-2">
                            <img src={Image2} className="Laptop_Images mt-0 m-2" alt="" />
                        </div>
                        {/* Name */}
                        <p className="text-center font-bold mb-1 Laptop_Names">Mackbook Pro 13"</p>
                        {/* Ratings */}
                        <div className="flex justify-center mb-3 Laptop_Ratings">
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                        </div>
                        {/* Stock and Price */}
                        <div className="grid grid-cols-2 text-center ml-2 mb-1">
                            <div>
                                <p className="text-center Laptop_Stocks">Stock: 2</p>
                            </div>
                            <div>
                                <p className="text-center Laptop_Price">$450</p>
                            </div>
                        </div>
                        {/* Add to cart button */}
                        <div className="flex grid justify-center">
                            <button className="Laptop_AddToCart_Button">Add to cart</button>
                        </div>
                    </div>
                </div>

                {/* Third Card */}
                <div className="Laptop_Cards flex justify-center">
                    <div>
                        {/* Image */}
                        <div className="flex justify-center mr-2 ml-2">
                            <img src={Image3} className="Laptop_Images mt-0 m-2" alt="" />
                        </div>
                        {/* Name */}
                        <p className="text-center font-bold mb-1 Laptop_Names">Asus Vivobook 14/15</p>
                        {/* Ratings */}
                        <div className="flex justify-center mb-3 Laptop_Ratings">
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                        </div>
                        {/* Stock and Price */}
                        <div className="grid grid-cols-2 text-center ml-2 mb-1">
                            <div>
                                <p className="text-center Laptop_Stocks">Stock: 18</p>
                            </div>
                            <div>
                                <p className="text-center Laptop_Price">$650</p>
                            </div>
                        </div>
                        {/* Add to cart button */}
                        <div className="flex grid justify-center">
                            <button className="Laptop_AddToCart_Button">Add to cart</button>
                        </div>
                    </div>
                </div>

                {/* Fourth Card */}
                <div className="Laptop_Cards flex justify-center">
                    <div>
                        {/* Image */}
                        <div className="flex justify-center">
                            <img src={Image4} className="Laptop_Images mt-0 m-2" alt="" />
                        </div>
                        {/* Name */}
                        <p className="text-center font-bold mb-1 Laptop_Names">Dell Inspiration 15</p>
                        {/* Ratings */}
                        <div className="flex justify-center mb-3 Laptop_Ratings">
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                        </div>
                        {/* Stock and Price */}
                        <div className="grid grid-cols-2 text-center ml-2 mb-1">
                            <div>
                                <p className="text-center Laptop_Stocks">Stock: 18</p>
                            </div>
                            <div>
                                <p className="text-center Laptop_Price">$320</p>
                            </div>
                        </div>
                        {/* Add to cart button */}
                        <div className="flex grid justify-center">
                            <button className="Laptop_AddToCart_Button">Add to cart</button>
                        </div>
                    </div>
                </div>

                {/* Fifth Card */}
                <div className="Laptop_Cards flex justify-center">
                    <div >
                        {/* Image */}
                        <div className="flex justify-center mr-2 ml-2">
                            <img src={Image5} className="Laptop_Images mt-0 m-2" alt="" />
                        </div>
                        {/* Name */}
                        <p className="text-center font-bold mb-1 Laptop_Names">Dell g15</p>
                        {/* Ratings */}
                        <div className="flex justify-center mb-3 Laptop_Ratings">
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                        </div>
                        {/* Stock and Price */}
                        <div className="grid grid-cols-2 text-center ml-2 mb-1">
                            <div>
                                <p className="text-center Laptop_Stocks">Stock: 7</p>
                            </div>
                            <div>
                                <p className="text-center Laptop_Price">$360</p>
                            </div>
                        </div>
                        {/* Add to cart button */}
                        <div className="flex grid justify-center">
                            <button className="Laptop_AddToCart_Button">Add to cart</button>
                        </div>
                    </div>
                </div>

                {/* Sixth Card */}
                <div className="Laptop_Cards flex justify-center">
                    <div>
                        {/* Image */}
                        <div className="flex justify-center ml-2 mr-2">
                            <img src={Image6} className="Laptop_Images mt-0 m-2" alt="" />
                        </div>
                        {/* Name */}
                        <p className="text-center font-bold mb-1 Laptop_Names">HP 15s</p>
                        {/* Ratings */}
                        <div className="flex justify-center mb-3 Laptop_Ratings">
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                        </div>
                        {/* Stock and Price */}
                        <div className="grid grid-cols-2 text-center ml-2 mb-1">
                            <div>
                                <p className="text-center Laptop_Stocks">Stock: 12</p>
                            </div>
                            <div>
                                <p className="text-center Laptop_Price">$370</p>
                            </div>
                        </div>
                        {/* Add to cart button */}
                        <div className="flex grid justify-center">
                            <button className="Laptop_AddToCart_Button">Add to cart</button>
                        </div>
                    </div>
                </div>

                {/* Seventh Card */}
                <div className="Laptop_Cards flex justify-center">
                    <div>
                        {/* Image */}
                        <div className="flex justify-center ml-2 mr-2">
                            <img src={Image7} className="Laptop_Images mt-0 m-2" alt="" />
                        </div>
                        {/* Name */}
                        <p className="text-center font-bold mb-1 Laptop_Names">HP Pavillion</p>
                        {/* Ratings */}
                        <div className="flex justify-center mb-3 Laptop_Ratings">
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                        </div>
                        {/* Stock and Price */}
                        <div className="grid grid-cols-2 text-center ml-2 mb-1">
                            <div>
                                <p className="text-center Laptop_Stocks">Stock: 288</p>
                            </div>
                            <div>
                                <p className="text-center Laptop_Price">$180</p>
                            </div>
                        </div>
                        {/* Add to cart button */}
                        <div className="flex grid justify-center">
                            <button className="Laptop_AddToCart_Button">Add to cart</button>
                        </div>
                    </div>
                </div>

                {/* Eight Card */}
                <div className="Laptop_Cards flex justify-center">
                    <div>
                        {/* Image */}
                        <div className="flex justify-center">
                            <img src={Image8} className="Laptop_Images mt-0 m-2" alt="" />
                        </div>
                        {/* Name */}
                        <p className="text-center font-bold mb-1 Laptop_Names">Asus X515JP</p>
                        {/* Ratings */}
                        <div className="flex justify-center mb-3 Laptop_Ratings">
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                        </div>
                        {/* Stock and Price */}
                        <div className="grid grid-cols-2 text-center ml-2 mb-1">
                            <div>
                                <p className="text-center Laptop_Stocks">Stock: 23</p>
                            </div>
                            <div>
                                <p className="text-center Laptop_Price">$680</p>
                            </div>
                        </div>
                        {/* Add to cart button */}
                        <div className="flex grid justify-center">
                            <button className="Laptop_AddToCart_Button">Add to cart</button>
                        </div>
                    </div>
                </div>




                {/* Extra... */}
                {/* First Card */}
                <div className="Laptop_Cards flex justify-center">
                    <div>
                        {/* Image */}
                        <div className="flex justify-center">
                            <img src={Image} className="Laptop_Images mt-0 m-2" alt="" />
                        </div>
                        {/* Name */}
                        <p className="text-center font-bold mb-1 Laptop_Names">Mackbook Air</p>
                        {/* Ratings */}
                        <div className="flex justify-center mb-3 Laptop_Ratings">
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStarHalf} />
                        </div>
                        {/* Stock and Price */}
                        <div className="grid grid-cols-2 text-center ml-2 mb-1">
                            <div>
                                <p className="text-center Laptop_Stocks">Stock: 8</p>
                            </div>
                            <div>
                                <p className="text-center Laptop_Price">$520</p>
                            </div>
                        </div>
                        {/* Add to cart button */}
                        <div className="flex grid justify-center">
                            <button className="Laptop_AddToCart_Button">Add to cart</button>
                        </div>
                    </div>
                </div>

                {/* Second Card */}
                <div className="Laptop_Cards flex justify-center">
                    <div>
                        {/* Image */}
                        <div className="flex justify-center mr-2 ml-2">
                            <img src={Image2} className="Laptop_Images mt-0 m-2" alt="" />
                        </div>
                        {/* Name */}
                        <p className="text-center font-bold mb-1 Laptop_Names">Mackbook Pro 13"</p>
                        {/* Ratings */}
                        <div className="flex justify-center mb-3 Laptop_Ratings">
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStarHalf} />
                        </div>
                        {/* Stock and Price */}
                        <div className="grid grid-cols-2 text-center ml-2 mb-1">
                            <div>
                                <p className="text-center Laptop_Stocks">Stock: 2</p>
                            </div>
                            <div>
                                <p className="text-center Laptop_Price">$450</p>
                            </div>
                        </div>
                        {/* Add to cart button */}
                        <div className="flex grid justify-center">
                            <button className="Laptop_AddToCart_Button">Add to cart</button>
                        </div>
                    </div>
                </div>

                {/* Third Card */}
                <div className="Laptop_Cards flex justify-center">
                    <div>
                        {/* Image */}
                        <div className="flex justify-center">
                            <img src={Image3} className="Laptop_Images mt-0 m-2" alt="" />
                        </div>
                        {/* Name */}
                        <p className="text-center font-bold mb-1 Laptop_Names">Asus Vivobook 14/15</p>
                        {/* Ratings */}
                        <div className="flex justify-center mb-3 Laptop_Ratings">
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStarHalf} />
                        </div>
                        {/* Stock and Price */}
                        <div className="grid grid-cols-2 text-center ml-2 mb-1">
                            <div>
                                <p className="text-center Laptop_Stocks">Stock: 18</p>
                            </div>
                            <div>
                                <p className="text-center Laptop_Price">$650</p>
                            </div>
                        </div>
                        {/* Add to cart button */}
                        <div className="flex grid justify-center">
                            <button className="Laptop_AddToCart_Button">Add to cart</button>
                        </div>
                    </div>
                </div>

                {/* Fourth Card */}
                <div className="Laptop_Cards flex justify-center">
                    <div>
                        {/* Image */}
                        <div className="flex justify-center">
                            <img src={Image4} className="Laptop_Images mt-0 m-2" alt="" />
                        </div>
                        {/* Name */}
                        <p className="text-center font-bold mb-1 Laptop_Names">Dell Inspiration 15</p>
                        {/* Ratings */}
                        <div className="flex justify-center mb-3 Laptop_Ratings">
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStarHalf} />
                        </div>
                        {/* Stock and Price */}
                        <div className="grid grid-cols-2 text-center ml-2 mb-1">
                            <div>
                                <p className="text-center Laptop_Stocks">Stock: 18</p>
                            </div>
                            <div>
                                <p className="text-center Laptop_Price">$320</p>
                            </div>
                        </div>
                        {/* Add to cart button */}
                        <div className="flex grid justify-center">
                            <button className="Laptop_AddToCart_Button">Add to cart</button>
                        </div>
                    </div>
                </div>

                {/* Fifth Card */}
                <div className="Laptop_Cards flex justify-center">
                    <div>
                        {/* Image */}
                        <div className="flex justify-center mr-2 ml-2">
                            <img src={Image5} className="Laptop_Images mt-0 m-2" alt="" />
                        </div>
                        {/* Name */}
                        <p className="text-center font-bold mb-1 Laptop_Names">Dell g15</p>
                        {/* Ratings */}
                        <div className="flex justify-center mb-3 Laptop_Ratings">
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStarHalf} />
                        </div>
                        {/* Stock and Price */}
                        <div className="grid grid-cols-2 text-center ml-2 mb-1">
                            <div>
                                <p className="text-center Laptop_Stocks">Stock: 7</p>
                            </div>
                            <div>
                                <p className="text-center Laptop_Price">$360</p>
                            </div>
                        </div>
                        {/* Add to cart button */}
                        <div className="flex grid justify-center">
                            <button className="Laptop_AddToCart_Button">Add to cart</button>
                        </div>
                    </div>
                </div>

                {/* Sixth Card */}
                <div className="Laptop_Cards flex justify-center">
                    <div>
                        {/* Image */}
                        <div className="flex justify-center mr-2 ml-2">
                            <img src={Image6} className="Laptop_Images mt-0 m-2" alt="" />
                        </div>
                        {/* Name */}
                        <p className="text-center font-bold mb-1 Laptop_Names">HP 15s</p>
                        {/* Ratings */}
                        <div className="flex justify-center mb-3 Laptop_Ratings">
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStarHalf} />
                        </div>
                        {/* Stock and Price */}
                        <div className="grid grid-cols-2 text-center ml-2 mb-1">
                            <div>
                                <p className="text-center Laptop_Stocks">Stock: 12</p>
                            </div>
                            <div>
                                <p className="text-center Laptop_Price">$370</p>
                            </div>
                        </div>
                        {/* Add to cart button */}
                        <div className="flex grid justify-center">
                            <button className="Laptop_AddToCart_Button">Add to cart</button>
                        </div>
                    </div>
                </div>

                {/* Seventh Card */}
                <div className="Laptop_Cards flex justify-center">
                    <div>
                        {/* Image */}
                        <div className="flex justify-center mr-4 ml-4">
                            <img src={Image7} className="Laptop_Images mt-0 m-2" alt="" />
                        </div>
                        {/* Name */}
                        <p className="text-center font-bold mb-1 Laptop_Names">HP Pavillion</p>
                        {/* Ratings */}
                        <div className="flex justify-center mb-3 Laptop_Ratings">
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStarHalf} />
                        </div>
                        {/* Stock and Price */}
                        <div className="grid grid-cols-2 text-center ml-2 mb-1">
                            <div>
                                <p className="text-center Laptop_Stocks">Stock: 288</p>
                            </div>
                            <div>
                                <p className="text-center Laptop_Price">$180</p>
                            </div>
                        </div>
                        {/* Add to cart button */}
                        <div className="flex grid justify-center">
                            <button className="Laptop_AddToCart_Button">Add to cart</button>
                        </div>
                    </div>
                </div>

            </section>
        </section>
    );
};

export default Laptop;