import React from 'react';
import Images1 from './download (1).jpg';
import './DetailsPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus, faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons';
import Products from '../Home/Products/Products';

const DetailsPage = () => {
    return (
        <section className="m-10 pb-10">
            {/* Top section */}
            <section className="grid md:grid-cols-2 mb-10">
                {/* Images */}
                <div className="flex">
                    <div className="flex-none mr-3">
                        <img className="Extra_Images" src={Images1} alt="" />
                        <img className="Extra_Images" src={Images1} alt="" />
                        <img className="Extra_Images" src={Images1} alt="" />
                        <img className="Extra_Images" src={Images1} alt="" />
                    </div>
                    <div className="flex-auto">
                        <img className="Product_Main_Image" src={Images1} alt="" />
                    </div>
                </div>
                {/* Details */}
                <div className="">
                    {/* Title */}
                    <p className="text-2xl p-0 mb-2 Font2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, reprehenderit?</p>
                    {/* Shop name */}
                    <a href="#"><p className="mb-1 p-0">The Mega Store</p></a>
                    {/* Ratings */}
                    <div className="m-0 p-0 flex">
                        <p className="flex Details_Page_Ratings">
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStarHalf} /></p>
                        {/* Ratings Count */}
                        <p className="Details_Page_Ratings_Number text-xs">123457+ Ratings</p>
                    </div>
                    <p className="m-0 p-0 font-bold">About this item:</p>
                    <p className="m-0 pb-1">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab officia hic dignissimos. Earum a eos iure repellat, fugiat molestias architecto voluptatum repellendus aliquam incidunt saepe officiis beatae quod corrupti numquam id quisquam sequi rerum sed quam doloribus consequuntur nostrum. Architecto.</p>
                    <div className="flex">
                        <a href=""><p className="Details_Comment">Comment</p></a>
                        <a href=""><p className="Details_Report">Report</p></a>
                    </div>
                    <div className="flex grid md:grid-cols-2 grid-cols-1">
                        <div className="grid grid-cols-2">
                            <p className="Details_Page_Price">$450</p>
                            <div className="flex Details_Page_Increase Font2 border-1 text-center">
                                <FontAwesomeIcon className="Details_Page_Item_Icons" icon={faPlus} />
                                <p className="Details_Page_Item_Count">0</p>
                                <FontAwesomeIcon className="Details_Page_Item_Icons" icon={faMinus} />
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                            <button className="Details_Page_Cart_Button">Add to cart</button>
                            <button className="Details_Page_Buy_Button">Buy now</button>
                        </div>
                    </div>
                </div>
            </section>

            <hr />

            {/* Second section */}
            <section className="pb-5 mb-0">
                <p className="text-xl mt-5 text-gray-400"><b>Details:</b></p>
                <div className="grid md:grid-cols-5 gap-1 grid-cols-2 mb-0">
                    <div className="border Details_Details">
                        <p><b>Brand:</b> Samsung</p>
                    </div>
                    <div  className="border Details_Details">
                        <p className=" "><b>Ram & Rom:</b> 8GB/128GB</p>
                    </div>
                    <div className="border Details_Details">
                        <p><b>SIM:</b> 	Dual Nano SIM</p>
                    </div>
                    <div className="border Details_Details">
                        <p><b>USB:</b> 2.0v</p>
                    </div>
                    <div className="border Details_Details">
                        <p><b>Network:</b>2G, 3G, 4G</p>
                    </div>
                    <div className="border Details_Details">
                        <p><b>Dimensions:</b> 159x75.1x8.9 mm</p>
                    </div>
                    <div className="border Details_Details">
                        <p><b>Weight:</b>188 grams</p>
                    </div>
                    <div className="border Details_Details">
                        <p><b>Size:</b> 6.4 inches</p>
                    </div>
                    <div className="border Details_Details">
                        <p><b>Battery:</b> 6000 mAh Li-Po</p>
                    </div>
                    <div className="border Details_Details">
                        <p><b>Processor:</b> Octa core, 2.3 GHz</p>
                    </div>
                    <div className="border Details_Details">
                        <p><b>Fingerprint:</b> Yes(On the Back)</p>
                    </div>
                    <div className="border Details_Details">
                        <p><b>OS:</b> Android 10 (One UI 2)</p>
                    </div>
                    <div className="border Details_Details">
                        <p><b>Charging:</b> 15W Fast Charging</p>
                    </div>
                </div>
            </section>

            <hr />
            <p className="font-bold text-2xl text-gray-600 mt-10">More items like this-</p>
            <Products />
        </section>
    );
};

export default DetailsPage;