import React from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import './CategoriesNavigation.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBaby, faBiking, faCamera, faChargingStation, faFemale, faFutbol, faMobileAlt, faMountain, faShoppingBasket, faTshirt, faTv, faUserMd, faUtensils } from '@fortawesome/free-solid-svg-icons';

const { SubMenu } = Menu;

function handleClick(e) {
    console.log('click', e);
}

const CategoriesNavigation = () => {
    return (
        <section className="">
            <Menu onClick={handleClick} mode="vertical">
                <SubMenu title={<div>
                    <FontAwesomeIcon icon={faMobileAlt} className="CategoriesNavigation_Icons" />Mobile & Laptop
                </div>}>
                    <Menu.Item className="loll">
                        <Link to='/mobile'>All Phone</Link>
                    </Menu.Item>
                    <Menu.Item className="loll">
                        <Link to='/laptop'>All Laptops</Link>
                    </Menu.Item>
                    <Menu.Item className="loll">
                        <Link to='/nokia'>Nokia</Link>
                    </Menu.Item>
                    <Menu.Item className="loll">
                        <Link to='/blackberry'> Blackberry</Link>
                    </Menu.Item>
                    <Menu.Item className="loll">
                        <Link to='/realme'>Realme</Link>
                    </Menu.Item>
                    <Menu.Item >
                        <Link to='/samsung'>SamSung</Link>
                    </Menu.Item>
                    <Menu.Item >
                        <Link to='/walton'>Walton</Link>
                    </Menu.Item>
                    <Menu.Item >
                        <Link to='/iphone'>
                            Iphone
                        </Link>
                    </Menu.Item>
                    <Menu.Item >
                        <Link to='/android'>
                            Android
                        </Link>
                    </Menu.Item>
                    <Menu.Item >
                        <Link to='/asus'>
                            Asus
                        </Link>
                    </Menu.Item>
                    <Menu.Item >
                        <Link to='/Lenovo'>
                            Lenovo
                        </Link>
                    </Menu.Item>
                    <Menu.Item >
                        <Link to='/macbook'>
                            Macbook
                        </Link>
                    </Menu.Item>
                    <Menu.Item >
                        <Link to='/dell'>
                            Dell
                        </Link>
                    </Menu.Item>
                    <Menu.Item >
                        <Link to='/hp'>
                            Hp
                        </Link>
                    </Menu.Item>
                </SubMenu>
                <SubMenu title=
                    {<div>
                        <FontAwesomeIcon icon={faBiking} className="CategoriesNavigation_Icons2" /> Bick & Scooter
                    </div>}>
                    <SubMenu title="Bicks">
                        <Menu.Item >
                            <Link to='/bikes'>
                                All Bicks
                            </Link>
                        </Menu.Item>
                        <Menu.Item >
                            <Link to='/tvs'>
                                TVS
                            </Link>
                        </Menu.Item>
                        <Menu.Item >
                            <Link to='/suzuki'>
                                Suzuki
                            </Link>
                        </Menu.Item>
                        <Menu.Item >
                            <Link to='/hero'>
                                Hero
                            </Link>
                        </Menu.Item>
                        <Menu.Item >
                            <Link to='/yamaha'>
                                Yamaha
                            </Link>
                        </Menu.Item>
                        <Menu.Item >
                            <Link to='/honda'>
                                Honda
                            </Link>
                        </Menu.Item>
                        <Menu.Item >
                            <Link to='/comuter-bike'>
                                Comuter Bike
                            </Link>
                        </Menu.Item>
                        <Menu.Item >
                            <Link to='/sports-bike'>
                                Sports Bike
                            </Link>
                        </Menu.Item>
                        <Menu.Item >
                            <Link to='/nacked-bike'>
                                Nacked Bike
                            </Link>
                        </Menu.Item>
                    </SubMenu>
                    <Menu.Item >
                        <Link to='/scooter'>
                            Scooter
                        </Link>
                    </Menu.Item>
                </SubMenu>
                <SubMenu title=
                    {<div>
                        <FontAwesomeIcon icon={faShoppingBasket} className="CategoriesNavigation_Icons2" /> Groceries
                    </div>}>
                    <Menu.Item >
                        <Link to='./groceries'>
                            All Groceries
                        </Link>
                    </Menu.Item>
                    <Menu.Item >
                        <Link to='./oil'>
                            Oil
                        </Link>
                    </Menu.Item>
                    <Menu.Item >
                        <Link to='./chal'>
                            Chal
                        </Link>
                    </Menu.Item>
                    <Menu.Item >
                        <Link to='./spices'>
                            Spices
                        </Link>
                    </Menu.Item>
                    <Menu.Item >
                        <Link to='./dry-fruits'>
                            Dry Fruits
                        </Link>
                    </Menu.Item>
                </SubMenu>
                <Menu.Item >
                    <Link to='./television'>
                        <div>
                            <FontAwesomeIcon icon={faTv} className="CategoriesNavigation_Icons2" /> Television
                        </div>
                    </Link>
                </Menu.Item>
                <Menu.Item >
                    <Link to='./security-camera'>
                        <div>
                            <FontAwesomeIcon icon={faCamera} className="CategoriesNavigation_Icons2" /> Security Camera
                        </div>
                    </Link>
                </Menu.Item>
                <Menu.Item >
                    <Link to='./smart-gadgets'>
                        <div>
                            <FontAwesomeIcon icon={faChargingStation} className="CategoriesNavigation_Icons2" /> Smart Gadgets
                        </div>
                    </Link>
                </Menu.Item>
                <Menu.Item >
                    <Link to='./health-and-beauty'>
                        <div>
                            <FontAwesomeIcon icon={faUserMd} className="CategoriesNavigation_Icons2" /> Health & Beauty
                        </div>
                    </Link>
                </Menu.Item>
                <Menu.Item >
                    <Link to='./men-fashion'>
                        <div>
                            <FontAwesomeIcon icon={faTshirt} className="CategoriesNavigation_Icons2" /> Men's Fashion
                        </div>
                    </Link>
                </Menu.Item>
                <Menu.Item >
                    <Link to='./women-fashion'>
                        <div>
                            <FontAwesomeIcon icon={faFemale} className="CategoriesNavigation_Icons2" /> Women's Fashion
                        </div>
                    </Link>
                </Menu.Item>

                <SubMenu title={<div>
                    <FontAwesomeIcon icon={faUtensils} className="CategoriesNavigation_Icons2" /> Home & Lifestyle
                </div>}>
                    <   Menu.Item >
                        <Link to='./home-accecories'>
                            Home Accecories
                        </Link>
                    </Menu.Item>
                    <Menu.Item >
                        <Link to='./kitchen'>
                            Kitchen
                        </Link>
                    </Menu.Item>
                    <Menu.Item >
                        <Link to='./blender'>
                            Blender
                        </Link>
                    </Menu.Item>
                    <Menu.Item >
                        <Link to='./water-filter'>
                            Water Filter
                        </Link>
                    </Menu.Item>
                    <Menu.Item >
                        <Link to='./chair-table'>
                            Chairs & Tables
                        </Link>
                    </Menu.Item>
                    <Menu.Item >
                        <Link to='./doormats'>
                            Doormats
                        </Link>
                    </Menu.Item>
                </SubMenu>
                <Menu.Item >
                    <Link to='./babies-toys'>
                        <div>
                            <FontAwesomeIcon icon={faBaby} className="CategoriesNavigation_Icons2" /> Babies & Toys
                        </div>
                    </Link>
                </Menu.Item>
                <Menu.Item >
                    <Link to='./sports'>
                        <div>
                            <FontAwesomeIcon icon={faFutbol} className="CategoriesNavigation_Icons2" /> Sports
                        </div>
                    </Link>
                </Menu.Item>
                <Menu.Item >
                    <Link to='./touring'>
                        
                        <div>
                            <FontAwesomeIcon icon={faMountain} className="CategoriesNavigation_Icons2" /> Touring
                        </div>
                    </Link>
                </Menu.Item>


            </Menu>
        </section>
    );
};

export default CategoriesNavigation;