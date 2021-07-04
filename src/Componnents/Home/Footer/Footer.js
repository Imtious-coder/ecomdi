import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <section className="grid md:grid-cols-4 grid-cols-2 bg-gray-900 Roboto">
            <div className="text-sm m-10 leading-5">
                <p className="text-xl text-gray-300"><b>Get to Know Us</b></p>
                <Link to="/career">
                    <a href=""><p className="text-gray-400">Careers</p></a>
                </Link>
                <a href=""><p className="text-gray-400">Blogs</p></a>
                <a href=""><p className="text-gray-400">About Ecomdi</p></a>
                <a href=""><p className="text-gray-400">Sustainability</p></a>
                <a href=""><p className="text-gray-400">Press Center</p></a>
                <a href=""><p className="text-gray-400">Investor Relations</p></a>
                <a href=""><p className="text-gray-400">Ecomdi Devices</p></a>
            </div>
            <div className="text-white text-sm m-10 leading-5 text-gray-300">
                <a href="" className="text-xl text-gray-300"><p><b>Make Money with Us</b></p></a>
                <a href=""><p className="text-gray-400">Sell products on Ecomdi</p></a>
                <a href=""><p className="text-gray-400">Sell apps on Ecomdi</p></a>
                <a href=""><p className="text-gray-400">Become an Affiliate</p></a>
                <a href=""><p className="text-gray-400">Become a Delivery Driver</p></a>
                <a href=""><p className="text-gray-400">Start a package delivery business</p></a>
                <a href=""><p className="text-gray-400">Advertise Your Products</p></a>
                <a href=""><p className="text-gray-400">Self-Publish with Us</p></a>
                <a href=""><p className="text-gray-400">Host an Ecomdi Hub</p></a>
                <a href=""><p className="text-gray-400">› See More Make Money with Us</p></a>
            </div>
            <div className="text-white text-sm m-10 leading-5 text-gray-300">
                <a href="" className="text-xl text-gray-300"><p><b>Ecomdi Payment Products</b></p></a>
                <a href=""><p className="text-gray-400">Ecomdi Making payments</p></a>
                <a href=""><p className="text-gray-400">Blogs</p></a>
                <a href=""><p className="text-gray-400">Ecomdi.com Store Card</p></a>
                <a href=""><p className="text-gray-400" className="text-gray-400">Ecomdi Secured Card</p></a>
                <a href=""><p className="text-gray-400">Ecomdi Business Card</p></a>
                <a href=""><p className="text-gray-400">Ecomdi Business Line of Credit</p></a>
                <a href=""><p className="text-gray-400">Shop with Points</p></a>
                <a href=""><p className="text-gray-400">Reload Your Balance</p></a>
                <a href=""><p className="text-gray-400">Ecomdi Currency Converter</p></a>
            </div>
            <div className="text-white text-sm m-10 leading-5 text-gray-300">
                <a href="" className="text-xl text-gray-300"><p><b>Let Us Help You</b></p></a>
                <a href=""><p className="text-gray-400">Ecomdi and COVID-19</p></a>
                <a href=""><p className="text-gray-400">Blogs</p></a>
                <a href=""><p className="text-gray-400">Your Account</p></a>
                <a href=""><p className="text-gray-400">Your Orders</p></a>
                <a href=""><p className="text-gray-400">Returns & Replacements</p></a>
                <a href=""><p className="text-gray-400">Manage Your Content and Devices</p></a>
                <a href=""><p className="text-gray-400">Help</p></a>
            </div>
        </section>
    );
};

export default Footer;