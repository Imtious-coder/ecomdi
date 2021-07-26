import React from 'react';
import { Menu  } from 'antd';
import { Link } from 'react-router-dom';
import './CategoriesNavigation.css';

const { SubMenu } = Menu;

function handleClick(e) {
    console.log('click', e);
}

const CategoriesNavigation = () => {
    return (
        <section className="Tes">
            <Menu onClick={handleClick} mode="vertical">
                <SubMenu title="Mobiles & Laptop">
                    <Menu.Item className="loll">
                    <Link  to='/mobile'>
                            All Phone
                    </Link>
                    </Menu.Item>
                    <Menu.Item  className="loll">
                    <Link  to='/laptop'>
                            All Laptops
                    </Link>
                        </Menu.Item>
                    <Menu.Item  className="loll">
                    <Link  to='/nokia'>
                        Nokia
                    </Link>
                    </Menu.Item>
                    <Menu.Item  className="loll">
                    <Link  to='/blackberry'>
                        Blackberry
                    </Link>
                    </Menu.Item>
                    <Menu.Item  className="loll">
                    <Link  to='/realme'>
                        Realme
                    </Link>
                    </Menu.Item>
                    <Menu.Item >
                    <Link  to='/samsung'>
                        SamSung
                    </Link>
                    </Menu.Item>
                    <Menu.Item >
                    <Link  to='/walton'>
                        Walton
                    </Link>
                    </Menu.Item>
                    <Menu.Item >
                    <Link  to='/iphone'>
                        Iphone
                    </Link>
                    </Menu.Item>
                    <Menu.Item >
                    <Link  to='/android'>
                        Android
                    </Link>
                    </Menu.Item>
                    <Menu.Item >
                    <Link  to='/asus'>
                        Asus
                    </Link>
                    </Menu.Item>
                    <Menu.Item >
                    <Link  to='/Lenovo'>
                        Lenovo
                    </Link>
                    </Menu.Item>
                    <Menu.Item >
                    <Link  to='/macbook'>
                        Macbook
                    </Link>
                    </Menu.Item>
                    <Menu.Item >
                    <Link  to='/dell'>
                        Dell
                    </Link>
                    </Menu.Item>
                    <Menu.Item >
                    <Link  to='/hp'>
                        Hp
                    </Link>
                    </Menu.Item>
                </SubMenu>
                <SubMenu title="Bick & Scooter">
                    <SubMenu title="Bicks">
                        <Menu.Item >
                            <Link  to='/bikes'>
                            All Bicks
                            </Link>
                        </Menu.Item>
                        <Menu.Item >
                        <Link  to='/tvs'>
                            TVS
                        </Link>
                        </Menu.Item>
                        <Menu.Item >
                            <Link  to='/suzuki'>
                            Suzuki
                            </Link>
                            </Menu.Item>
                        <Menu.Item >
                        <Link  to='/hero'>
                            Hero
                            </Link>
                        </Menu.Item>
                        <Menu.Item >
                        <Link  to='/yamaha'>
                            Yamaha
                            </Link>
                        </Menu.Item>
                        <Menu.Item >
                        <Link  to='/honda'>
                            Honda
                            </Link>
                        </Menu.Item>
                        <Menu.Item >
                        <Link  to='/comuter-bike'>
                            Comuter Bike
                            </Link>
                        </Menu.Item>
                        <Menu.Item >
                        <Link  to='/sports-bike'>
                            Sports Bike
                            </Link>
                        </Menu.Item>
                        <Menu.Item >
                        <Link  to='/nacked-bike'>
                            Nacked Bike
                            </Link>
                        </Menu.Item>
                    </SubMenu>
                    <Menu.Item >
                        <Link  to='/scooter'>
                            Scooter
                            </Link>
                        </Menu.Item>
                </SubMenu>
                <SubMenu title="Groceries">
                    <Menu.Item >
                        <Link to = './groceries'>
                          All Groceries
                        </Link>
                    </Menu.Item>
                    <Menu.Item >
                    <Link to = './oil'>
                          Oil
                        </Link>
                    </Menu.Item>
                    <Menu.Item >
                    <Link to = './chal'>
                          Chal
                        </Link>
                    </Menu.Item>
                    <Menu.Item >
                    <Link to = './spices'>
                          Spices
                        </Link>
                    </Menu.Item>
                    <Menu.Item >
                    <Link to = './dry-fruits'>
                          Dry Fruits
                        </Link>
                    </Menu.Item>
                </SubMenu>
                <Menu.Item >
                <Link to = './television'>
                          Television
                        </Link>
                </Menu.Item>
                <Menu.Item >
                <Link to = './security-camera'>
                          Security Camera
                        </Link>
                </Menu.Item>
                <Menu.Item >
                <Link to = './smart-gadgets'>
                          Smart Gadgets
                        </Link>
                </Menu.Item>
                <Menu.Item >
                <Link to = './health-and-beauty'>
                          Health & Beauty
                        </Link>
                </Menu.Item>
                <Menu.Item >
                <Link to = './men-fashion'>
                    Men's Fashion
                 </Link>
                </Menu.Item>
                <Menu.Item >
                <Link to = './women-fashion'>
                    Women's Fashion
                  </Link>
                </Menu.Item>

                <SubMenu title="Home & Lifestyle">
                <   Menu.Item >
                    <Link to = './home-accecories'>
                         Home Accecories
                    </Link>
                    </Menu.Item>
                    <Menu.Item >
                    <Link to = './kitchen'>
                         Kitchen
                    </Link>
                    </Menu.Item>
                    <Menu.Item >
                    <Link to = './blender'>
                         Blender
                    </Link>
                    </Menu.Item>
                    <Menu.Item >
                    <Link to = './water-filter'>
                         Water Filter
                    </Link>
                    </Menu.Item>
                    <Menu.Item >
                    <Link to = './chair-table'>
                         Chairs & Tables
                    </Link>
                    </Menu.Item>
                    <Menu.Item >
                    <Link to = './doormats'>
                         Doormats
                    </Link>
                    </Menu.Item>
                </SubMenu>
                <Menu.Item >
                <Link to = './babies-toys'>
                          Babies & Toys
                        </Link>
                </Menu.Item>
                <Menu.Item >
                <Link to = './sports'>
                          Sports
                        </Link>
                </Menu.Item>
                <Menu.Item >
                <Link to = './touring'>
                          Touring
                        </Link>
                </Menu.Item>
                

            </Menu>
        </section>
    );
};

export default CategoriesNavigation;