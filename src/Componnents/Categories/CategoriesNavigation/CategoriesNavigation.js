import React from 'react';
import { Menu } from 'antd';
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
                    <Menu.Item className="loll">All Phone</Menu.Item>
                    <Menu.Item  className="loll">All Laptops</Menu.Item>
                    <Menu.Item  className="loll">Nokia</Menu.Item>
                    <Menu.Item  className="loll">Blackberry</Menu.Item>
                    <Menu.Item  className="loll">Realme</Menu.Item>
                    <Menu.Item >Samsung</Menu.Item>
                    <Menu.Item >Walton</Menu.Item>
                    <Menu.Item >iphone</Menu.Item>
                    <Menu.Item >Android</Menu.Item>
                    <Menu.Item >Asus</Menu.Item>
                    <Menu.Item >Lenovo</Menu.Item>
                    <Menu.Item >Mackbook</Menu.Item>
                    <Menu.Item >Dell</Menu.Item>
                    <Menu.Item >Hp</Menu.Item>
                </SubMenu>
                <SubMenu title="Bick & Scooter">
                    <SubMenu title="Bicks">
                        <Menu.Item >All Bicks</Menu.Item>
                        <Menu.Item >TVS</Menu.Item>
                        <Menu.Item >Suzuki</Menu.Item>
                        <Menu.Item >Hero</Menu.Item>
                        <Menu.Item >Yamaha</Menu.Item>
                        <Menu.Item >Honda</Menu.Item>
                        <Menu.Item >Comuter Bick</Menu.Item>
                        <Menu.Item >Sports Bick</Menu.Item>
                        <Menu.Item >Nacked Bicks</Menu.Item>
                    </SubMenu>
                    <Menu.Item >Scooter</Menu.Item>
                </SubMenu>
                <SubMenu title="Groceries">
                    <Menu.Item >Oil</Menu.Item>
                    <Menu.Item >Chal</Menu.Item>
                    <Menu.Item >Spices</Menu.Item>
                    <Menu.Item >Dry Fruits</Menu.Item>
                </SubMenu>
                <Menu.Item >Television</Menu.Item>
                <Menu.Item >Security cameras</Menu.Item>
                <Menu.Item >Health & Beauty</Menu.Item>
                <Menu.Item >Man's Fasion</Menu.Item>
                <Menu.Item >Women's Fasion</Menu.Item>

                <SubMenu title="Home & Lifestyle">
                    <Menu.Item >Home accecories</Menu.Item>
                    <Menu.Item >Kitchen Items</Menu.Item>
                    <Menu.Item >Door Mats</Menu.Item>
                    <Menu.Item >Water Filter</Menu.Item>
                    <Menu.Item >Blender</Menu.Item>
                    <Menu.Item >Water Filter</Menu.Item>
                    <Menu.Item >Tables & Chair</Menu.Item>
                </SubMenu>
                <Menu.Item >Babies & Toys</Menu.Item>
                <Menu.Item >Sports</Menu.Item>
                <Menu.Item >Touring</Menu.Item>
                <Menu.Item >Smart Gadgets</Menu.Item>

            </Menu>
        </section>
    );
};

export default CategoriesNavigation;