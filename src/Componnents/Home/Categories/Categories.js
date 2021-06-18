import React from 'react';
import './Categories.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'

const Categories = () => {
    return (
        <section className="">

            <ul className="Categories Font2">
                <li className="All_Categories All"><p>All Categories</p>
                    <ul className="Nested_Categorie">
                        <li><p>Electronics Devices</p></li>
                        <li><p>Mobile</p></li>
                        <li><p>Laptop</p></li>
                        <li><p>Television</p></li>
                        <li><p>Security Cameras</p></li>
                        <li><p>Bick and Scooter</p></li>
                        <li><p>Home and Lifestyles</p></li>
                        <li><p>Health and Beauty</p></li>
                        <li><p>Groceries</p></li>
                        <li><p>Women's Fasion</p></li>
                        <li><p>Men's Fasion</p></li>
                        <li><p>Babies and Toy's</p></li>
                        <li><p>Sports</p></li>

                    </ul>
                </li>
                <li className="All_Categories"><p>Mobile</p></li>
                <li className="All_Categories"><p>Laptop</p></li>
                <li className="All_Categories"><p>Bick and Scooter</p></li>
                <li className="All_Categories"><p>Groceries</p></li>
                <li className="All_Categories"><p>Television</p></li>
                <li className="All_Categories"><p>Sports</p></li>
                <li className="All_Categories"><p>Health & Beauty</p></li>
            </ul>
        </section>
    );
};

export default Categories;