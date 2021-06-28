import { Menu, Dropdown, Button } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import './Categories.css';



const menu = (
    <Menu>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                Electronics Devices
            </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
                Mobile
            </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
                Laptop
            </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
                Television
            </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
                Security Cameras
            </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
                Bick and Scooter
            </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
                Home and Lifestyles
            </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
                Health and Beauty
            </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
                Groceries
            </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
                Women's Fasion
            </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
                Men's Fasion
            </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
                Babies and Toy's
            </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
                Sports
            </a>
        </Menu.Item>
    </Menu>
);

const Categories = () => {
    return (
        <section className="">
            <div className="grid md:grid-cols-8 Categories grid-cols-1 Font2 text-center pl-10 pr-10">
                <div className="flex justify-center">
                    <Dropdown overlay={menu} placement="bottomRight" arrow>
                        <Link to="/categories">
                            <button className="All_Categories">All Categories</button>
                        </Link>
                    </Dropdown>
                </div>
                <button className="Categories_Button">Mobile</button>
                <button className="Categories_Button">Laptop</button>
                <button className="Categories_Button">Bick & Scooter</button>
                <button className="Categories_Button">Groceries</button>
                <button className="Categories_Button">Television</button>
                <button className="Categories_Button">Sports</button>
                <button className="Categories_Button">Health & Beauty</button>
            </div>
        </section>
    );
};

export default Categories;