import React from 'react';
import Image from './cart.jpg';
import './Cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';

const Cart = () => {
    return (
        <div>
            <section className="flex mt-10 mb-10 ml-3 mr-3 Roboto">
                <div className="flex gap-4 grid grid-cols-2">

                    {/* Products and Details */}
                    <div className="-mr-20 border-r-2">
                        <div className="grid md:grid-cols-2 gap-4 pb-5 border-b-2 mr-3">
                            {/* Image */}
                            <div className="flex justify-center">
                                <img className="w-full h-full" src={Image} alt="" />
                            </div>
                            {/* Details */}
                            <div>
                                <p className="m-0 text-xl font-bold">Lorem ipsum dolor sit amet consectetur.</p>
                                <p className="text-blue-400 m-0 text-xs">The mega store</p>
                                <p className="m-0 text-xs mt-1 font-bold">128/8GB</p>
                                <p className="m-0 text-xs font-bold">2G/3G/4G/5G</p>
                                <p className="m-0 text-xs mt-1 text-blue-400">In stock</p>
                                <p className="text-xl font-bold m-0 mt-1 Roboto">$450</p>
                                <div className="grid grid-cols-3 gap-2 m-1 mr-2">
                                    {/* Quantity */}
                                    <div className="flex Cart_Increase_Decrease Font2 border-1">
                                        <FontAwesomeIcon className="Cart_Page_Item_Icons" icon={faPlus} />
                                        <p className="Cart_Item_Count text-gray-800">0</p>
                                        <FontAwesomeIcon className="Cart_Page_Item_Icons" icon={faMinus} />
                                    </div>
                                </div>
                                {/* Buttons */}
                                <div className="grid grid-cols-3 gap-4">
                                    <button className="Cart_Delete">Delete</button>
                                    <button className="Cart_Delete">Save for later</button>
                                </div>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-4 pb-5 pt-5 border-b-2 mr-3">
                            {/* Image */}
                            <div className="flex justify-center">
                                <img className="w-full h-full" src={Image} alt="" />
                            </div>
                            {/* Details */}
                            <div>
                            <p className="m-0 text-xl font-bold">Lorem ipsum dolor sit amet consectetur.</p>
                                <p className="text-blue-400 m-0 text-xs">The mega store</p>
                                <p className="m-0 text-xs mt-1 font-bold">128/8GB</p>
                                <p className="m-0 text-xs font-bold">2G/3G/4G/5G</p>
                                <p className="m-0 text-xs mt-1 text-blue-400">In stock</p>
                                <p className="text-xl font-bold m-0 mt-1 Roboto">$450</p>
                                <div className="grid grid-cols-3 gap-2 m-1 mr-2">
                                    {/* Quantity */}
                                    <div className="flex Cart_Increase_Decrease Font2 border-1">
                                        <FontAwesomeIcon className="Cart_Page_Item_Icons" icon={faPlus} />
                                        <p className="Cart_Item_Count text-gray-800">0</p>
                                        <FontAwesomeIcon className="Cart_Page_Item_Icons" icon={faMinus} />
                                    </div>
                                    {/* Buttons */}
                                    <button className="Cart_Delete">Delete</button>
                                    <button className="Cart_Delete">Save for later</button>
                                </div>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-4 pb-5 pt-5 mr-3">
                            {/* Image */}
                            <div className="flex justify-center">
                                <img className="w-full h-full" src={Image} alt="" />
                            </div>
                            {/* Details */}
                            <div>
                            <p className="m-0 text-xl font-bold">Lorem ipsum dolor sit amet consectetur.</p>
                                <p className="text-blue-400 m-0 text-xs">The mega store</p>
                                <p className="m-0 text-xs mt-1 font-bold">128/8GB</p>
                                <p className="m-0 text-xs font-bold">2G/3G/4G/5G</p>
                                <p className="m-0 text-xs mt-1 text-blue-400">In stock</p>
                                <p className="text-xl font-bold m-0 mt-1 Roboto">$450</p>
                                <div className="grid grid-cols-3 gap-2 m-1 mr-2">
                                    {/* Quantity */}
                                    <div className="flex Cart_Increase_Decrease Font2 border-1">
                                        <FontAwesomeIcon className="Cart_Page_Item_Icons" icon={faPlus} />
                                        <p className="Cart_Item_Count text-gray-800">0</p>
                                        <FontAwesomeIcon className="Cart_Page_Item_Icons" icon={faMinus} />
                                    </div>
                                    {/* Buttons */}
                                    <button className="Cart_Delete">Delete</button>
                                    <button className="Cart_Delete">Save for later</button>
                                </div>
                            </div>
                        </div>

                    </div>
                    {/* Cart */}
                    <div className="ml-20 Cart_Checkouts border-t-2">
                        <div className="text-center mt-5 ml-3">
                            <p className="Cart_Subtotal m-0 mb-2">Subtotal: $450</p>
                            <p className="Cart_Quantity">Quantity: 3</p>
                            <p className="Cart_Tax">Tax + Vat : $2.5</p>
                            <p className="Cart_Total">Total: $1350</p>
                        </div>
                        <div className="flex justify-center ml-5">
                            <button className="Cart_Checkout">Checkout</button>
                        </div>
                    </div>
                </div>


                <div className="flex-1">

                </div>
            </section>
        </div>
    );
};

export default Cart;