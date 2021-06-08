import React from 'react';
import { Link } from 'react-router-dom';
import './Devices.css';

const Devices = () => {
    return (
        <section>
            {/* Page title */}
            <header className="text-3xl font-bold text-center mt-5">Digital Services and Device Support</header>
            <section className="flex">
                <div className="flex-1"></div>
                <div className="flex-auto border-2 mt-10 mb-10">
                    <p className="font-bold text-xl text-center mt-5"><u>Things you can do</u></p>
                    <section className="grid md:grid-cols-2 mt-5 text-center">
                        <Link to="/yourOrders">
                            <div className="pt-5 pb-5 border-t rounded border-r Devices__Hover">View or cancel your digital orders</div>
                        </Link>
                        <Link to="/manageDevices">
                        <div className="pt-5 pb-5 border-b rounded border-t Devices__Hover">Manage devices</div>
                        </Link>
                        <a href="https://www.facebook.com/cdiltd" target="_blank">
                        <div className="pt-5 pb-5 border-t border-r rounded Devices__Hover">Ask the <b>ecomdi</b> community</div>
                        </a>
                        <div className="pt-5 pb-5 Devices__Hover">Change your digital and device settings</div>
                    </section>
                </div>
                <div className="flex-1"></div>
            </section>
            <section className="flex">
                <div className="flex-1"></div>
                <div className="flex-auto -ml-20">
                    <Link to="/home">
                        <button className="Button2 -ml-20 mr-20 mb-10">Back</button>
                    </Link>
                </div>
                <div className="flex-1"></div>
            </section>

        </section>
    );
};

export default Devices;