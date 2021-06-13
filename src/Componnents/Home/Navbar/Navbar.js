import React from 'react';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDolly, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import Image2 from "./cover-removebg.png";

const Navbar = () => {
    return (
        <section className="bg-gray-900 pb-1 pt-1 Main_Navbar">
            <section className="grid flex md:grid-cols-3 justify-items-center">
                {/* Company Name/Logo */}
                <section className="flex justify-items-center">
                    <div className="flex flex-wrap content-center">
                        <img style={{width:"140px", height:"60px"}} src={Image2} alt="" />
                        {/* <p style={{color:"yellow"}} className="text-3xl font-bold pb-2 pt-1 Name">ecomdi</p> */}
                    </div>
                </section>
                {/* Search bar */}
                <section>
                    <div className="flex flex-wrap content-center mb-2 mt-3 w-full">
                        <input type="text" id="Navbar__Search" placeholder="Search in ecomdi.." />
                        <button className="Navbar_Search_Button">Search</button>
                    </div>
                </section>
                {/* Others(account, cart, login) */}
                <section className="grid flex md:grid-cols-3 gap-8 justify-items-center mb-2 mt-2">
                    {/* Account */}
                    <div className="flex flex-wrap content-center -ml-12">
                        <FontAwesomeIcon style={{color:"yellow"}} className="Navbar__Icons" icon={faUserCircle} />
                    </div>
                    {/* Cart */}
                    <div className="flex flex-wrap content-center -ml-10">
                        <FontAwesomeIcon style={{color:"yellow"}} className="Navbar__Icons" icon={faDolly} />
                        <p className="Navbar__Cart__Count flex grid justify-items-center flex-wrap content-center">0</p>
                    </div>
                    {/* Login option */}
                    <div className="flex flex-wrap content-center -ml-5">
                        <button className="Navbar_Login_Button ">Login</button>
                    </div>
                </section>
            </section>
        </section>
    );
};

export default Navbar;