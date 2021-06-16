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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
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

const BickScooter = () => {
    return (

        <section className="bg-blue-50">
            {/* Heading */}
            <p className="Bick_Heading bg-blue-100">Bick & Scooter</p>

            <Carousel responsive={responsive} >
                {/* ------------------Part------------------ */}
                <div className="grid grid-cols-3 gap-1 mt-3 mb-3 ml-3">

                    {/* Card1 */}
                    <div className="Bick_Cards flex justify-center">
                        {/* Image */}
                        <img src={Image} className="Bicks_Image" alt="" />
                        {/* Details */}
                        <div className="Bicks_Detail">
                            {/* Name */}
                            <p className="text-center Bicks_Name">Hero Splender</p>
                            {/* Ratings */}
                            <div className="flex justify-center mb-1 Bicks_Rating">
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                            </div>
                            {/* Stock and Price */}
                            <p className="text-center Bicks_Stock">Stock: 8</p>
                            <p className="text-center Bicks_Price">$220</p>
                            {/* Add to Cart Button */}
                            <button className="Bicks_AddToCart_Button">Add to cart</button>
                        </div>
                    </div>

                    {/* Card2 */}
                    <div className="Bick_Cards flex justify-center">
                        {/* Image */}
                        <img src={Image2} className="Bicks_Image" alt="" />
                        {/* Details */}
                        <div className="Bicks_Detail">
                            {/* Name */}
                            <p className="text-center Bicks_Name">Honda Hornet 160</p>
                            {/* Ratings */}
                            <div className="flex justify-center mb-1 Bicks_Rating">
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                            </div>
                            {/* Stock and Price */}
                            <p className="text-center Bicks_Stock">Stock: 2</p>
                            <p className="text-center Bicks_Price">$480</p>
                            {/* Add to Cart Button */}
                            <button className="Bicks_AddToCart_Button">Add to cart</button>
                        </div>
                    </div>

                    {/* Card3 */}
                    <div className="Bick_Cards flex justify-center">
                        {/* Image */}
                        <img src={Image3} className="Bicks_Image" alt="" />
                        {/* Details */}
                        <div className="Bicks_Detail">
                            {/* Name */}
                            <p className="text-center Bicks_Name">Repjol 160</p>
                            {/* Ratings */}
                            <div className="flex justify-center mb-1 Bicks_Rating">
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                            </div>
                            {/* Stock and Price */}
                            <p className="text-center Bicks_Stock">Stock: 12</p>
                            <p className="text-center Bicks_Price">$120</p>
                            {/* Add to Cart Button */}
                            <button className="Bicks_AddToCart_Button">Add to cart</button>
                        </div>
                    </div>

                </div>

                {/* -------------------Part------------------- */}
                <div className="grid grid-cols-3 gap-1 mt-3 mb-3 ml-1 mr-1">

                    {/* Card4 */}
                    <div className="Bick_Cards flex justify-center">
                        {/* Image */}
                        <img src={Image4} className="Bicks_Image" alt="" />
                        {/* Details */}
                        <div className="Bicks_Detail">
                            {/* Name */}
                            <p className="text-center Bicks_Name">Royal Enfield 200 cc</p>
                            {/* Ratings */}
                            <div className="flex justify-center mb-1 Bicks_Rating">
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                            </div>
                            {/* Stock and Price */}
                            <p className="text-center Bicks_Stock">Stock: 18</p>
                            <p className="text-center Bicks_Price">$320</p>
                            {/* Add to Cart Button */}
                            <button className="Bicks_AddToCart_Button">Add to cart</button>
                        </div>
                    </div>

                    {/* Card5 */}
                    <div className="Bick_Cards flex justify-center">
                        {/* Image */}
                        <img src={Image5} className="Bicks_Image" alt="" />
                        {/* Details */}
                        <div className="Bicks_Detail">
                            {/* Name */}
                            <p className="text-center Bicks_Name">Suzuki Hayate EP</p>
                            {/* Ratings */}
                            <div className="flex justify-center mb-1 Bicks_Rating">
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                            </div>
                            {/* Stock and Price */}
                            <p className="text-center Bicks_Stock">Stock: 7</p>
                            <p className="text-center Bicks_Price">$360</p>
                            {/* Add to Cart Button */}
                            <button className="Bicks_AddToCart_Button">Add to cart</button>
                        </div>
                    </div>

                    {/* Card6 */}
                    <div className="Bick_Cards flex justify-center">
                        {/* Image */}
                        <img src={Image6} className="Bicks_Image" alt="" />
                        {/* Details */}
                        <div className="Bicks_Detail">
                            {/* Name */}
                            <p className="text-center Bicks_Name">Suzuki 110</p>
                            {/* Ratings */}
                            <div className="flex justify-center mb-1 Bicks_Rating">
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                            </div>
                            {/* Stock and Price */}
                            <p className="text-center Bicks_Stock">Stock: 12</p>
                            <p className="text-center Bicks_Price">$370</p>
                            {/* Add to Cart Button */}
                            <button className="Bicks_AddToCart_Button">Add to cart</button>
                        </div>
                    </div>

                </div>

                {/* -------------------Part------------------- */}
                <div className="grid grid-cols-3 gap-1 mt-3 mb-3 ml-1 mr-1">

                    {/* Card7 */}
                    <div className="Bick_Cards flex justify-center">
                        {/* Image */}
                        <img src={Image7} className="Bicks_Image" alt="" />
                        {/* Details */}
                        <div className="Bicks_Detail">
                            {/* Name */}
                            <p className="text-center Bicks_Name">TVS XL</p>
                            {/* Ratings */}
                            <div className="flex justify-center mb-1 Bicks_Rating">
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                            </div>
                            {/* Stock and Price */}
                            <p className="text-center Bicks_Stock">Stock: 288</p>
                            <p className="text-center Bicks_Price">$180</p>
                            {/* Add to Cart Button */}
                            <button className="Bicks_AddToCart_Button">Add to cart</button>
                        </div>
                    </div>

                    {/* Card8 */}
                    <div className="Bick_Cards flex justify-center">
                        {/* Image */}
                        <img src={Image8} className="Bicks_Image" alt="" />
                        {/* Details */}
                        <div className="Bicks_Detail">
                            {/* Name */}
                            <p className="text-center Bicks_Name">RTR 160 4v ABS</p>
                            {/* Ratings */}
                            <div className="flex justify-center mb-1 Bicks_Rating">
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                            </div>
                            {/* Stock and Price */}
                            <p className="text-center Bicks_Stock">Stock: 23</p>
                            <p className="text-center Bicks_Price">$380</p>
                            {/* Add to Cart Button */}
                            <button className="Bicks_AddToCart_Button">Add to cart</button>
                        </div>
                    </div>

                    {/* Card9 */}
                    <div className="Bick_Cards flex justify-center">
                        {/* Image */}
                        <img src={Image9} className="Bicks_Image" alt="" />
                        {/* Details */}
                        <div className="Bicks_Detail">
                            {/* Name */}
                            <p className="text-center Bicks_Name">Suzuki GSXR FI ABS</p>
                            {/* Ratings */}
                            <div className="flex justify-center mb-1 Bicks_Rating">
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                            </div>
                            {/* Stock and Price */}
                            <p className="text-center Bicks_Stock">Stock: 12</p>
                            <p className="text-center Bicks_Price">$370</p>
                            {/* Add to Cart Button */}
                            <button className="Bicks_AddToCart_Button">Add to cart</button>
                        </div>
                    </div>

                </div>



                {/* Extra..... */}



                {/* -------------------Part------------------- */}
                <div className="grid grid-cols-3 gap-1 mt-3 mb-3 ml-1 mr-1">

                    {/* Card4 */}
                    <div className="Bick_Cards flex justify-center">
                        {/* Image */}
                        <img src={Image4} className="Bicks_Image" alt="" />
                        {/* Details */}
                        <div className="Bicks_Detail">
                            {/* Name */}
                            <p className="text-center Bicks_Name">Royal Enfield 260 cc</p>
                            {/* Ratings */}
                            <div className="flex justify-center mb-1 Bicks_Rating">
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                            </div>
                            {/* Stock and Price */}
                            <p className="text-center Bicks_Stock">Stock: 18</p>
                            <p className="text-center Bicks_Price">$320</p>
                            {/* Add to Cart Button */}
                            <button className="Bicks_AddToCart_Button">Add to cart</button>
                        </div>
                    </div>

                    {/* Card5 */}
                    <div className="Bick_Cards flex justify-center">
                        {/* Image */}
                        <img src={Image5} className="Bicks_Image" alt="" />
                        {/* Details */}
                        <div className="Bicks_Detail">
                            {/* Name */}
                            <p className="text-center Bicks_Name">Suzuki Hayate EP</p>
                            {/* Ratings */}
                            <div className="flex justify-center mb-1 Bicks_Rating">
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                            </div>
                            {/* Stock and Price */}
                            <p className="text-center Bicks_Stock">Stock: 7</p>
                            <p className="text-center Bicks_Price">$360</p>
                            {/* Add to Cart Button */}
                            <button className="Bicks_AddToCart_Button">Add to cart</button>
                        </div>
                    </div>

                    {/* Card6 */}
                    <div className="Bick_Cards flex justify-center">
                        {/* Image */}
                        <img src={Image6} className="Bicks_Image" alt="" />
                        {/* Details */}
                        <div className="Bicks_Detail">
                            {/* Name */}
                            <p className="text-center Bicks_Name">Suzuki 110</p>
                            {/* Ratings */}
                            <div className="flex justify-center mb-1 Bicks_Rating">
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                            </div>
                            {/* Stock and Price */}
                            <p className="text-center Bicks_Stock">Stock: 12</p>
                            <p className="text-center Bicks_Price">$370</p>
                            {/* Add to Cart Button */}
                            <button className="Bicks_AddToCart_Button">Add to cart</button>
                        </div>
                    </div>

                </div>
            </Carousel>

        </section>

    );
};

export default BickScooter;