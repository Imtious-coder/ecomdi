import React from 'react';
import './Categories.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'

const Categories = () => {
    return (
        <section className="grid md:grid-cols-6 grid-cols-3 flex Categories border-b">
            {/* All categories */}
            <div class="flex justify-center border-r Categories5">
                <select className="Categories1">
                    <option value="" className="Categories_Options"> All Categories</option>
                    <option value="" className="Categories_Options">Electronics Devices</option>
                    <option value="" className="Categories_Options">Mobile</option>
                    <option value="" className="Categories_Options">Laptop</option>
                    <option value="" className="Categories_Options">Television</option>
                    <option value="" className="Categories_Options"> Desktops</option>
                    <option value="" className="Categories_Options">Security Cameras</option>
                    <option value="" className="Categories_Options">Bick and Scooter</option>
                    <option value="" className="Categories_Options">Home and Lifestyles</option>
                    <option value="" className="Categories_Options"> Health and Beauty</option>
                    <option value="" className="Categories_Options">Groceries</option>
                    <option value="" className="Categories_Options">Women's Fasion</option>
                    <option value="" className="Categories_Options">Men's Fasion</option>
                    <option value="" className="Categories_Options">Babies and Toy's</option>
                    <option value="" className="Categories_Options">Sports</option>
                </select>
            </div>
            {/* Electronics categories */}
            <div class="flex justify-center border-r Categories5">
                <select className="Categories2">
                    <option value="" className="Categories_Options">Electronics Devices</option>
                    <option value="" className="Categories_Options">Mobile</option>
                    <option value="" className="Categories_Options">Tablets</option>
                    <option value="" className="Categories_Options">Laptop</option>
                    <option value="" className="Categories_Options">Television</option>
                    <option value="" className="Categories_Options"> Desktops</option>
                    <option value="" className="Categories_Options">Security Cameras</option>
                </select>
            </div>
            {/* Bick and Scooter categories */}
            <div class="flex justify-center border-r Categories5">
                <select name="" id="" className="Categories3">
                    <option value="" className="Categories_Options">Bick and Scooter </option>
                    <option value="" className="Categories_Options">Bick</option>
                    <option value="" className="Categories_Options">Scooter</option>
                    <option value="" className="Categories_Options">Sports Bick</option>
                </select>
            </div>
            {/* Home and Lifestyle */}
            <div class="flex justify-center Categories4 border-r">
                <p>Home and Lifestyles</p>
            </div>
            {/* Groceries */}
            <div class="flex justify-center Categories4 border-r">
                <p>Groceries</p>
            </div>
            {/* Sports */}
            <div class="flex justify-center pb-2 pt-2 Categories4 border-r">
                <p>Sports</p>
            </div>
        </section>
    );
};

export default Categories;