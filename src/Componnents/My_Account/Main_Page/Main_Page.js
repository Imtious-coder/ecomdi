import React from 'react';
import './Main_Page.css';
import Image1 from './Your_Orders.png';
import Image2 from './Login_Security.png';
import Image3 from './GiftCard.png';
import Image4 from './payment.png';
import Image5 from './Your_Profile.png';
import Image6 from './digital_devices.png';
import Image7 from './Messages.jpg';
import Image8 from './archived_orders.png';
import Image9 from './Lists.png';
import { Link } from 'react-router-dom';

const Main_Page = () => {
    return (
        <section>
            {/* Page title */}
            <header className="text-3xl font-bold text-center mt-5">Your Account</header>

            {/* All Cards */}
            <div className="grid md:grid-cols-3 ml-20 mr-20 mt-10 mb-10 gap-6">
                {/* First card */}
                <Link to="/yourOrders">
                    <section className="Cards border rounded flex pb-2">
                        <div>
                            <img className="Images mt-8 m-3" src={Image1} alt="" />
                        </div>
                        <div className="md:text-left sm:text-center mt-5 pb-8">
                            <p className="text-xl font-bold pt-2 mt-1">Your Orders</p>
                            <p>Track, return, or buy things again</p>
                        </div>
                    </section>
                </Link>
                {/* Second card */}
                <Link to="/securityLogin">
                    <section className=" Cards border rounded flex">
                        <div>
                            <img className="Images mt-6 m-4" src={Image2} alt="" />
                        </div>
                        <div className="md:text-left sm:text-center m-6">
                            <p className="text-xl font-bold">Login and security</p>
                            <p>Edit login, name, and mobile number</p>
                        </div>
                    </section>
                </Link>
                {/* Third card */}
                <Link to="/vouchers">
                    <section className=" Cards border rounded flex">
                        <div>
                            <img className="Images mt-5 m-4" src={Image3} alt="" />
                        </div>
                        <div className="md:text-left sm:text-center m-6">
                            <p className="text-xl font-bold">Voucher</p>
                            <p>View voucher, redeem, or reload voucher</p>
                        </div>
                    </section>
                </Link>
                {/* Fourth card */}
                <Link to="/payments">
                    <section className=" Cards border rounded flex">
                        <div>
                            <img className="Images mt-10 m-4" src={Image4} alt="" />
                        </div>
                        <div className="md:text-left sm:text-center mt-8 pb-4 m-6">
                            <p className="text-xl font-bold">Your Payments</p>
                            <p>Manage payment methonds and settings, view all transactions</p>
                        </div>
                    </section>
                </Link>
                {/* Fifth card */}
                <Link to="/profiles">
                    <section className="Cards border rounded flex">
                        <div>
                            <img className="Images mt-7 m-4" src={Image5} alt="" />
                        </div>
                        <div className="md:text-left sm:text-center m-6">
                            <p className="text-xl font-bold">Your Profiles</p>
                            <p>Manage, add, or remove user profiles for personalized <br /> experiences</p>
                        </div>
                    </section>
                </Link>
                {/* Sixth card */}
                <Link to="/devices">
                    <section className=" Cards border rounded flex">
                        <div>
                            <img className="Images mt-6 m-4" src={Image6} alt="" />
                        </div>
                        <div className="md:text-left sm:text-center m-6">
                            <p className="text-xl font-bold">Your Devices and Contents</p>
                            <p>Manage your Amazon devices and digital content</p>
                        </div>
                    </section>
                </Link>
                {/* Seventh card */}
                <section className=" Cards border rounded flex">
                    <div>
                        <img className="Images mt-6 m-4" src={Image7} alt="" />
                    </div>
                    <div className="md:text-left sm:text-center m-6">
                        <p className="text-xl font-bold">Your Messages</p>
                        <p>View messages to and from Amazon, sellers, and buyers</p>
                    </div>
                </section>
                {/* Eighth card */}
                <section className=" Cards border rounded flex">
                    <div>
                        <img className="Images m-4" src={Image8} alt="" />
                    </div>
                    <div className="md:text-left sm:text-center m-6">
                        <p className="text-xl font-bold">Archived Orders</p>
                        <p>View and manage your archived orders</p>
                    </div>
                </section>
                {/* Ninth card */}
                <section className=" Cards border rounded flex">
                    <div>
                        <img className="Images mt-6 m-4" src={Image9} alt="" />
                    </div>
                    <div className="md:text-left sm:text-center m-6">
                        <p className="text-xl font-bold">Your List</p>
                        <p>View, modify, and share your lists, or create new ones</p>
                    </div>
                </section>
            </div>
        </section>
    );
};

export default Main_Page;