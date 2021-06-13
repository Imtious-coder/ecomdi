import React from 'react';
import './Products.css';
import Image from './97036a3ef3b60f99a34cf0e16fb867896146a6e2.jpeg';
import Image2 from './12.jpg';
import Image3 from './C15.jpg';
import Image4 from './Galaxy A11.jpg';
import Image5 from './IphoneX.jpg';
import Image6 from './Oppo.jpg';
import Image7 from './X50.jpg';
import Image8 from './Xpro.jpg';

const Products = () => {
    return (
        <section className="bg-gray-50 pb-10">
            <h2 className="text-center font-bold text-3xl pt-20">Mobiles</h2>
            <section className="grid md:grid-cols-5 justify-center gap-4 mt-20 mb-20 ml-5 mr-5">
                <div className="Products_Cards flex justify-center">
                    <div>
                        <img src={Image} className="Products_Images" alt="" /> <br />
                        <p className="text-center font-bold mb-5">Never Settle</p>
                        <div className="grid grid-cols-2 text-center ml-2 mb-5">
                            <div>
                                <p className="text-center Products_Stocks">Stock: 8</p>
                            </div>
                            <div>
                                <p className="text-center Products_Price">$220</p>
                            </div>
                        </div>
                        <div className="flex grid justify-center">
                            <button className="AddToCart_Button pb-5">Add to cart</button>
                        </div>
                    </div>
                </div>

               <div className="Products_Cards flex justify-center">
                    <div>
                        <img src={Image2} className="Products_Images" alt="" /> <br />
                        <p className="text-center font-bold mb-5">iPhone 12</p>
                        <div className="grid grid-cols-2 text-center ml-2 mb-5">
                            <div>
                                <p className="text-center Products_Stocks">Stock: 2</p>
                            </div>
                            <div>
                                <p className="text-center Products_Price">$450</p>
                            </div>
                        </div>
                        <div className="flex grid justify-center pb-5">
                            <button className="AddToCart_Button">Add to cart</button>
                        </div>
                    </div>
                </div>

               <div className="Products_Cards flex justify-center">
                    <div>
                        <img src={Image3} className="Products_Images" alt="" /> <br />
                        <p className="text-center font-bold mb-5">Realme C15</p>
                        <div className="grid grid-cols-2 text-center ml-2 mb-5">
                            <div>
                                <p className="text-center Products_Stocks">Stock: 28</p>
                            </div>
                            <div>
                                <p className="text-center Products_Price">$140</p>
                            </div>
                        </div>
                        <div className="flex grid justify-center mb-5">
                            <button className="AddToCart_Button">Add to cart</button>
                        </div>
                    </div>
                </div>

               <div className="Products_Cards flex justify-center">
                    <div>
                        <img src={Image4} className="Products_Images" alt="" /> <br />
                        <p className="text-center font-bold mb-5">Galaxy A11</p>
                        <div className="grid grid-cols-2 text-center ml-2 mb-5">
                            <div>
                                <p className="text-center Products_Stocks">Stock: 18</p>
                            </div>
                            <div>
                                <p className="text-center Products_Price">$320</p>
                            </div>
                        </div>
                        <div className="flex grid justify-center mb-5">
                            <button className="AddToCart_Button">Add to cart</button>
                        </div>
                    </div>
                </div>

                <div className="Products_Cards flex justify-center">
                    <div>
                        <img src={Image5} className="Products_Images" alt="" /> <br />
                        <p className="text-center font-bold mb-5">iphone X</p>
                        <div className="grid grid-cols-2 text-center ml-2 mb-5">
                            <div>
                                <p className="text-center Products_Stocks">Stock: 7</p>
                            </div>
                            <div>
                                <p className="text-center Products_Price">$120</p>
                            </div>
                        </div>
                        <div className="flex grid justify-center mb-5">
                            <button className="AddToCart_Button">Add to cart</button>
                        </div>
                    </div>
                </div>

               <div className="Products_Cards flex justify-center">
                    <div>
                        <img src={Image6} className="Products_Images" alt="" /> <br />
                        <p className="text-center font-bold mb-5">Never Settle</p>
                        <div className="grid grid-cols-2 text-center ml-2 mb-5">
                            <div>
                                <p className="text-center Products_Stocks">Stock: 8</p>
                            </div>
                            <div>
                                <p className="text-center Products_Price">$120</p>
                            </div>
                        </div>
                        <div className="flex grid justify-center mb-5">
                            <button className="AddToCart_Button">Add to cart</button>
                        </div>
                    </div>
                </div>
                <div className="Products_Cards flex justify-center">
                    <div>
                        <img src={Image7} className="Products_Images" alt="" /> <br />
                        <p className="text-center font-bold mb-5">Realme X15</p>
                        <div className="grid grid-cols-2 text-center ml-2 mb-5">
                            <div>
                                <p className="text-center Products_Stocks">Stock: 288</p>
                            </div>
                            <div>
                                <p className="text-center Products_Price">$160</p>
                            </div>
                        </div>
                        <div className="flex grid justify-center pb-5">
                            <button className="AddToCart_Button">Add to cart</button>
                        </div>
                    </div>
                </div>

               <div className="Products_Cards flex justify-center">
                    <div>
                        <img src={Image8} className="Products_Images" alt="" /> <br />
                        <p className="text-center font-bold mb-5">Realme X pro</p>
                        <div className="grid grid-cols-2 text-center ml-2 mb-5">
                            <div>
                                <p className="text-center Products_Stocks">Stock: 23</p>
                            </div>
                            <div>
                                <p className="text-center Products_Price">$180</p>
                            </div>
                        </div>
                        <div className="flex grid justify-center pb-5">
                            <button className="AddToCart_Button">Add to cart</button>
                        </div>
                    </div>
                </div>

            </section>
        </section>
    );
};

export default Products;