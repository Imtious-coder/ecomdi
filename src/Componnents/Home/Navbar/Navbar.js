import React from 'react';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDolly, faUserCircle } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
    return (
        <section className="bg-gray-400">
            <section className="grid flex md:grid-cols-5 justify-items-center">
                {/* Company Name/Logo */}
                <div className="flex flex-wrap content-center">
                    <p className="text-3xl font-bold pb-2 pt-1 Name">ecomdi</p>
                </div>
                {/* Search bar */}
                <div className="flex flex-wrap content-center mb-2 mt-2">
                   <input type="text" id="Navbar__Search" placeholder="Search in ecomdi.."/>
                   <button className="Navbar_Search_Button">Search</button>
                </div>
                {/* Account */}
                <div className="flex flex-wrap content-center">
                <FontAwesomeIcon className="Navbar__Icons" icon={faUserCircle} />
                </div>
                {/* Cart */}
                <div className="flex flex-wrap content-center">
                <FontAwesomeIcon className="Navbar__Icons" icon={faDolly} />
                <p className="Navbar__Cart__Count flex grid justify-items-center flex-wrap content-center">0</p>
                </div>
                {/* Login option */}
                <div className="flex flex-wrap content-center">
                   <button className="Button1">Login</button>
                </div>

            </section>
        </section>
    );
};

export default Navbar;