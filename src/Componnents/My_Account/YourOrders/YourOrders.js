import React from 'react';
import { Link } from 'react-router-dom';
import './YourOrders.css';

const YourOrders = () => {
    return (
        <section>
            {/* Page title */}
            <header className="text-3xl font-bold text-center mt-5">Your Orders</header>
            <section>
                <p className="text-xl text-green-500 font-bold ml-10 mt-20 mb-5">Orders ——</p>
                {/* Table titles */}
                <section className="grid md:grid-cols-6 mb-3">
                    <div className="text-center font-bold mt-5 Borders">
                        <p>Product Name</p>
                    </div>
                    <div className="text-center font-bold mt-5 Borders">
                        <p>Quantity</p>
                    </div>
                    <div className="text-center font-bold mt-5 Borders">
                        <p>Shop</p>
                    </div>
                    <div className="text-center font-bold mt-5 Borders">
                        <p>Price</p>
                    </div>
                    <div className="text-center font-bold mt-5 Borders">
                        <p>Status</p>
                    </div>
                    <div className="text-center font-bold mt-5 Borders">
                        <p>Order date</p>
                    </div>
                </section>
                <hr/>
                {/* Details */}
                <section className="grid md:grid-cols-6">
                    <div className="text-center mt-5">
                        <p>Example</p>
                    </div>
                    <div className="text-center mt-5">
                        <p>8</p>
                    </div>
                    <div className="text-center  mt-5">
                        <p>StarletBD</p>
                    </div>
                    <div className="text-center mt-5">
                        <p>$300</p>
                    </div>
                    <div className="text-center mt-5">
                        <p>Pending</p>
                    </div>
                    <div className="text-center mt-5 mb-3">
                        <p>6/1/2021</p>
                    </div>
                </section>
            </section>


            {/* Cancelled Orders */}
            <section>
                <p className="text-xl text-red-400 font-bold ml-10 mt-20 mb-5">Cancelled Orders ——</p>
                {/* Table titles */}
                <section className="grid md:grid-cols-6 mb-3">
                    <div className="text-center font-bold mt-5 Borders">
                        <p>Product Name</p>
                    </div>
                    <div className="text-center font-bold mt-5 Borders">
                        <p>Quantity</p>
                    </div>
                    <div className="text-center font-bold mt-5 Borders">
                        <p>Shop</p>
                    </div>
                    <div className="text-center font-bold mt-5 Borders">
                        <p>Price</p>
                    </div>
                    <div className="text-center font-bold mt-5 Borders">
                        <p>Status</p>
                    </div>
                    <div className="text-center font-bold mt-5 Borders">
                        <p>Order date</p>
                    </div>
                </section>
                <hr />
                {/* Details */}
                <section className="grid md:grid-cols-6">
                    <div className="text-center mt-5">
                        <p>Example</p>
                    </div>
                    <div className="text-center mt-5">
                        <p>8</p>
                    </div>
                    <div className="text-center  mt-5">
                        <p>StarletBD</p>
                    </div>
                    <div className="text-center mt-5">
                        <p>$300</p>
                    </div>
                    <div className="text-center mt-5">
                        <p>Pending</p>
                    </div>
                    <div className="text-center mt-5 mb-3">
                        <p>6/1/2021</p>
                    </div>
                </section>
            </section>

            <Link to="/home"><button className="text-blue-700 font-bold bg-black-400 pt-3 pb-3 pl-10 pr-10 border rounded ml-10 mt-16 mb-10">Back</button></Link>
        </section>
    );
};

export default YourOrders;