import { Menu, Dropdown, Button } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import './Categories.css';




const menu = (
    <Menu>
        <Menu.Item>
            <a target="" rel="noopener noreferrer" href="#">
                Electronics Devices
            </a>
        </Menu.Item>
        <Menu.Item>
            <a target="" rel="noopener noreferrer" href="#">
                Mobile
            </a>
        </Menu.Item>
        <Menu.Item>
            <a target="" rel="noopener noreferrer" href="#">
                Laptop
            </a>
        </Menu.Item>
        <Menu.Item>
            <a target="" rel="noopener noreferrer" href="#">
                Television
            </a>
        </Menu.Item>
        <Menu.Item>
            <a target="" rel="noopener noreferrer" href="#">
                Security Cameras
            </a>
        </Menu.Item>
        <Menu.Item>
            <a target="" rel="noopener noreferrer" href="#">
                Bick and Scooter
            </a>
        </Menu.Item>
        <Menu.Item>
            <a target="" rel="noopener noreferrer" href="#">
                Groceries
            </a>
        </Menu.Item>
        <Menu.Item>
            <a target="" rel="noopener noreferrer" href="#">
                Women's Fasion
            </a>
        </Menu.Item>
        <Menu.Item>
            <a target="" rel="noopener noreferrer" href="#">
                Men's Fasion
            </a>
        </Menu.Item>
        <Menu.Item>
            <a target="" rel="noopener noreferrer" href="#">
                Babies and Toy's
            </a>
        </Menu.Item>
        <Menu.Item>
            <a target="" rel="noopener noreferrer" href="#">
                Sports
            </a>
        </Menu.Item>
    </Menu>
);

const Categories = () => {
    return (
        <section className="mt-1 mb-1">
            <div className="grid md:grid-cols-7 Categories grid-cols-1 Font2 text-center pl-10 pr-10 gap-1">
                <div className="flex justify-center">
                    <Dropdown overlay={menu} placement="bottomRight" arrow>
                        <Link to="/categories">
                            <button className="All_Categories pb-1">All Categories</button>
                        </Link>
                    </Dropdown>
                </div>
                <button className="Categories_Button">Mobile</button>
                <button className="Categories_Button">Laptop</button>
                <button className="Categories_Button">Bick & Scooter</button>
                <button className="Categories_Button">Groceries</button>
                <button className="Categories_Button">Television</button>                
                <Link to="/switchToSellerPage">
                    <button className="Categories_Button Roboto text-2xl Sell"><b>Sell</b></button>
                </Link>
            </div>
        </section>
    );
};

export default Categories;