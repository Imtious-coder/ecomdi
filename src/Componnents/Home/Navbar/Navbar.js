import React from 'react';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDolly, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import Image2 from "./cover-removebg.png";
import { Link } from 'react-router-dom';

import ReactDOM from 'react-dom';
import ReactImageZoom from 'react-image-zoom';



const Navbar = () => {
    const props = { width: 400, height: 250, zoomWidth: 500, img: { Image2 } };
   
    return (
        <section className="bg-gray-900 pb-1 pt-1 Main_Navbar">
            <section className="grid flex md:grid-cols-3 justify-items-center">
                {/* Company Name/Logo */}
                <section className="flex justify-items-center">
                    <div className="flex flex-wrap content-center">
                        <Link to="/mainHome">
                            <img style={{ width: "140px", height: "60px" }} src={Image2} alt="" id="Image" />
                        </Link>
                    </div>
                </section>
                {/* Search bar */}
                <section>
                    <div className="flex flex-wrap content-center justify-center mb-2 w-full">
                        <input type="text" id="Navbar__Search" placeholder="Search in ecomdi.." />
                        <button className="Navbar_Search_Button mt-4">Search</button>
                    </div>
                </section>
                {/* Others(account, cart, login) */}
                <section className="grid flex md:grid-cols-4 gap-y-4 justify-items-center mb-2 mt-2">
                    <div></div>
                    {/* Account */}
                    <div className="flex flex-wrap content-center">
                        <Link to="/home">
                            <FontAwesomeIcon className="Navbar__Icons pt-2" icon={faUserCircle} />
                        </Link>
                    </div>
                    {/* Cart */}
                    <div className="flex flex-wrap content-center">
                        <FontAwesomeIcon className="Navbar__Icons pt-2" icon={faDolly} />
                        <p className="Navbar__Cart__Count flex grid justify-items-center flex-wrap content-center">0</p>
                    </div>
                    {/* Login option */}
                    <div className="flex flex-wrap content-center">
                        <button className="Navbar_Login_Button ">Login</button>
                    </div>
                </section>
            </section>
        </section>
    );
};

export default Navbar;