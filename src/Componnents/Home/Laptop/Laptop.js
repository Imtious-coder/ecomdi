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
import { faStar } from '@fortawesome/free-solid-svg-icons'
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
    Laptop: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

const Laptop = () => {
    return (

        <section className="bg-blue-50">
            {/* Heading */}
            <p className="Laptop_Heading bg-blue-100">Laptop</p>

            <Carousel responsive={responsive} >
                {/* ------------------Part------------------ */}
                <div className="grid grid-cols-3 gap-1 mt-3 mb-3 ml-3">

                    {/* Card1 */}
                    <div className="Laptop_Cards flex justify-center">
                        {/* Image */}
                        <img src={Image} className="Laptops_Image" alt="" />
                        {/* Details */}
                        <div className="Laptops_Detail">
                            {/* Name */}
                            <p className="text-center Laptops_Name">Mackbook Air</p>
                            {/* Ratings */}
                            <div className="flex justify-center mb-1 Laptops_Rating">
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                            </div>
                            {/* Stock and Price */}
                            <p className="text-center Laptops_Stock">Stock: 8</p>
                            <p className="text-center Laptops_Price">$220</p>
                            {/* Add to Cart Button */}
                            <button className="Laptops_AddToCart_Button">Add to cart</button>
                        </div>
                    </div>

                    {/* Card2 */}
                    <div className="Laptop_Cards flex justify-center">
                        {/* Image */}
                        <img src={Image2} className="Laptops_Image" alt="" />
                        {/* Details */}
                        <div className="Laptops_Detail">
                            {/* Name */}
                            <p className="text-center Laptops_Name">Mackbook Pro 13"</p>
                            {/* Ratings */}
                            <div className="flex justify-center mb-1 Laptops_Rating">
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                            </div>
                            {/* Stock and Price */}
                            <p className="text-center Laptops_Stock">Stock: 2</p>
                            <p className="text-center Laptops_Price">$480</p>
                            {/* Add to Cart Button */}
                            <button className="Laptops_AddToCart_Button">Add to cart</button>
                        </div>
                    </div>

                    {/* Card3 */}
                    <div className="Laptop_Cards flex justify-center">
                        {/* Image */}
                        <img src={Image3} className="Laptops_Image" alt="" />
                        {/* Details */}
                        <div className="Laptops_Detail">
                            {/* Name */}
                            <p className="text-center Laptops_Name">Asus Vivobook 14</p>
                            {/* Ratings */}
                            <div className="flex justify-center mb-1 Laptops_Rating">
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                            </div>
                            {/* Stock and Price */}
                            <p className="text-center Laptops_Stock">Stock: 12</p>
                            <p className="text-center Laptops_Price">$120</p>
                            {/* Add to Cart Button */}
                            <button className="Laptops_AddToCart_Button">Add to cart</button>
                        </div>
                    </div>

                </div>

                {/* -------------------Part------------------- */}
                <div className="grid grid-cols-3 gap-1 mt-3 mb-3 ml-1 mr-1">

                    {/* Card4 */}
                    <div className="Laptop_Cards flex justify-center">
                        {/* Image */}
                        <img src={Image4} className="Laptops_Image" alt="" />
                        {/* Details */}
                        <div className="Laptops_Detail">
                            {/* Name */}
                            <p className="text-center Laptops_Name">Dell Inspiration 15</p>
                            {/* Ratings */}
                            <div className="flex justify-center mb-1 Laptops_Rating">
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                            </div>
                            {/* Stock and Price */}
                            <p className="text-center Laptops_Stock">Stock: 18</p>
                            <p className="text-center Laptops_Price">$320</p>
                            {/* Add to Cart Button */}
                            <button className="Laptops_AddToCart_Button">Add to cart</button>
                        </div>
                    </div>

                    {/* Card5 */}
                    <div className="Laptop_Cards flex justify-center">
                        {/* Image */}
                        <img src={Image5} className="Laptops_Image" alt="" />
                        {/* Details */}
                        <div className="Laptops_Detail">
                            {/* Name */}
                            <p className="text-center Laptops_Name">Dell g15</p>
                            {/* Ratings */}
                            <div className="flex justify-center mb-1 Laptops_Rating">
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                            </div>
                            {/* Stock and Price */}
                            <p className="text-center Laptops_Stock">Stock: 7</p>
                            <p className="text-center Laptops_Price">$360</p>
                            {/* Add to Cart Button */}
                            <button className="Laptops_AddToCart_Button">Add to cart</button>
                        </div>
                    </div>

                    {/* Card6 */}
                    <div className="Laptop_Cards flex justify-center">
                        {/* Image */}
                        <img src={Image6} className="Laptops_Image" alt="" />
                        {/* Details */}
                        <div className="Laptops_Detail">
                            {/* Name */}
                            <p className="text-center Laptops_Name">HP 15s</p>
                            {/* Ratings */}
                            <div className="flex justify-center mb-1 Laptops_Rating">
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                            </div>
                            {/* Stock and Price */}
                            <p className="text-center Laptops_Stock">Stock: 12</p>
                            <p className="text-center Laptops_Price">$370</p>
                            {/* Add to Cart Button */}
                            <button className="Laptops_AddToCart_Button">Add to cart</button>
                        </div>
                    </div>

                </div>

                {/* -------------------Part------------------- */}
                <div className="grid grid-cols-3 gap-1 mt-3 mb-3 ml-1 mr-1">

                    {/* Card7 */}
                    <div className="Laptop_Cards flex justify-center">
                        {/* Image */}
                        <img src={Image7} className="Laptops_Image" alt="" />
                        {/* Details */}
                        <div className="Laptops_Detail">
                            {/* Name */}
                            <p className="text-center Laptops_Name">HP Pavillion</p>
                            {/* Ratings */}
                            <div className="flex justify-center mb-1 Laptops_Rating">
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                            </div>
                            {/* Stock and Price */}
                            <p className="text-center Laptops_Stock">Stock: 288</p>
                            <p className="text-center Laptops_Price">$180</p>
                            {/* Add to Cart Button */}
                            <button className="Laptops_AddToCart_Button">Add to cart</button>
                        </div>
                    </div>

                    {/* Card8 */}
                    <div className="Laptop_Cards flex justify-center">
                        {/* Image */}
                        <img src={Image8} className="Laptops_Image" alt="" />
                        {/* Details */}
                        <div className="Laptops_Detail">
                            {/* Name */}
                            <p className="text-center Laptops_Name">Asus X515JP</p>
                            {/* Ratings */}
                            <div className="flex justify-center mb-1 Laptops_Rating">
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                            </div>
                            {/* Stock and Price */}
                            <p className="text-center Laptops_Stock">Stock: 23</p>
                            <p className="text-center Laptops_Price">$380</p>
                            {/* Add to Cart Button */}
                            <button className="Laptops_AddToCart_Button">Add to cart</button>
                        </div>
                    </div>



                    {/* Extra..... */}


                    {/* Card6 */}
                    <div className="Laptop_Cards flex justify-center">
                        {/* Image */}
                        <img src={Image6} className="Laptops_Image" alt="" />
                        {/* Details */}
                        <div className="Laptops_Detail">
                            {/* Name */}
                            <p className="text-center Laptops_Name">HP 15s</p>
                            {/* Ratings */}
                            <div className="flex justify-center mb-1 Laptops_Rating">
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                            </div>
                            {/* Stock and Price */}
                            <p className="text-center Laptops_Stock">Stock: 12</p>
                            <p className="text-center Laptops_Price">$370</p>
                            {/* Add to Cart Button */}
                            <button className="Laptops_AddToCart_Button">Add to cart</button>
                        </div>
                    </div>

                </div>

                {/* -------------------Part------------------- */}
                <div className="grid grid-cols-3 gap-1 mt-3 mb-3 ml-1 mr-1">

                    {/* Card4 */}
                    <div className="Laptop_Cards flex justify-center">
                        {/* Image */}
                        <img src={Image4} className="Laptops_Image" alt="" />
                        {/* Details */}
                        <div className="Laptops_Detail">
                            {/* Name */}
                            <p className="text-center Laptops_Name">Dell Inspiration 15</p>
                            {/* Ratings */}
                            <div className="flex justify-center mb-1 Laptops_Rating">
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                            </div>
                            {/* Stock and Price */}
                            <p className="text-center Laptops_Stock">Stock: 18</p>
                            <p className="text-center Laptops_Price">$320</p>
                            {/* Add to Cart Button */}
                            <button className="Laptops_AddToCart_Button">Add to cart</button>
                        </div>
                    </div>

                    {/* Card5 */}
                    <div className="Laptop_Cards flex justify-center">
                        {/* Image */}
                        <img src={Image5} className="Laptops_Image" alt="" />
                        {/* Details */}
                        <div className="Laptops_Detail">
                            {/* Name */}
                            <p className="text-center Laptops_Name">Dell g15</p>
                            {/* Ratings */}
                            <div className="flex justify-center mb-1 Laptops_Rating">
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                            </div>
                            {/* Stock and Price */}
                            <p className="text-center Laptops_Stock">Stock: 7</p>
                            <p className="text-center Laptops_Price">$360</p>
                            {/* Add to Cart Button */}
                            <button className="Laptops_AddToCart_Button">Add to cart</button>
                        </div>
                    </div>

                    {/* Card6 */}
                    <div className="Laptop_Cards flex justify-center">
                        {/* Image */}
                        <img src={Image6} className="Laptops_Image" alt="" />
                        {/* Details */}
                        <div className="Laptops_Detail">
                            {/* Name */}
                            <p className="text-center Laptops_Name">HP 15s</p>
                            {/* Ratings */}
                            <div className="flex justify-center mb-1 Laptops_Rating">
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                            </div>
                            {/* Stock and Price */}
                            <p className="text-center Laptops_Stock">Stock: 12</p>
                            <p className="text-center Laptops_Price">$370</p>
                            {/* Add to Cart Button */}
                            <button className="Laptops_AddToCart_Button">Add to cart</button>
                        </div>
                    </div>

                </div>
            </Carousel>

        </section>
    );
};

export default Laptop;