import { Menu, Dropdown, Button } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import './Categories.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'



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
            <div className="grid md:grid-cols-8 grid-cols-1 Categories Font2 text-center pl-10 pr-10">
                <div className="Lol Item">
                    <Dropdown overlay={menu} placement="bottomCenter" arrow>
                        <Link to="/categories">
                            <Button className="Categories_Button All_Categories">All Categories</Button>
                        </Link>
                    </Dropdown>
                </div>
                <div className="Item">
                    <Button className="Categories_Button">Mobile</Button>
                </div>
                <div className=" Item">
                    <Button className="Categories_Button">Laptop</Button>
                </div>
                <div className=" Item">
                    <Button className="Categories_Button">Bick & Scooter</Button>
                </div>
                <div className=" Item">
                    <Button className="Categories_Button">Groceries</Button>
                </div>
                <div className=" Item">
                    <Button className="Categories_Button">Television</Button>
                </div>
                <div className=" Item">
                    <Button className="Categories_Button">Sports</Button>
                </div>
                <div className=" Item">
                    <Button className="Categories_Button">Health & Beauty</Button>
                </div>
            </div>
        </section>
    );
};

export default Categories;