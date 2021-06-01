import React from 'react';

const SecurityLogin = () => {
    return (
        <section>
            {/* Page title */}
            <header className="text-3xl font-bold text-center mt-5">Your Account</header>
            <section className="grid md:grid-cols-3 mt-10 items-center">
                {/* Name */}
                <div className="grid grid-cols-2 ml-10 mr-10 mb-10 pt-5 border rounder">
                    <div className="ml-10 mb-5">
                        <p className="font-bold">Name:</p>
                        <p>Yusuf Islam</p>
                    </div>
                    <div className="ml-20">
                        <button className="ml-5 mt-2 rounded Button1">
                            Edit
                        </button>
                    </div>
                </div>
                {/* Email */}
                <div className="grid grid-cols-2 ml-10 mr-10 mb-10 pt-5 border rounder">
                    <div className="ml-10 mb-5">
                        <p className="font-bold">Email:</p>
                        <p>Yusuf.Islam@gmail.com</p>
                    </div>
                    <div className="ml-20">
                        <button className="ml-5 mt-2 rounded Button1">
                            Edit
                        </button>
                    </div>
                </div>
                {/* Phone */}
                <div className="grid grid-cols-2 ml-10 mr-10 mb-10 pt-5 border rounder">
                    <div className="ml-5 mb-5">
                        <p className="font-bold">Mobile Phone number:</p>
                        <p>+880163*****10</p>
                    </div>
                    <div className="ml-20">
                        <button className="ml-5 mt-2 rounded Button1">
                            Edit
                        </button>
                    </div>
                </div>
                {/* Password */}
                <div className="grid grid-cols-2 ml-10 mr-10 mb-10 pt-5 border rounder">
                    <div className="ml-10 mb-5">
                        <p className="font-bold">Password:</p>
                        <p>********</p>
                    </div>
                    <div className="ml-20">
                        <button className="ml-5 mt-2 rounded Button1">
                            Edit
                        </button>
                    </div>
                </div>
                {/* Name */}
                <div className="grid grid-cols-2 ml-10 mr-10 mb-10 pt-5 border rounder">
                    <div className="ml-10 mb-5">
                        <p className="font-bold">Name:</p>
                        <p>Yusuf Islam</p>
                    </div>
                    <div className="ml-20">
                        <button className=" mt-2 rounded Button1">
                            Edit
                        </button>
                    </div>
                </div>
                {/* Email */}
                <div className="grid grid-cols-2 ml-10 mr-10 mb-10 pt-5 border rounder">
                    <div className="ml-10 mb-5">
                        <p className="font-bold">Email:</p>
                        <p>Yusuf.Islam@gmail.com</p>
                    </div>
                    <div className="ml-20">
                        <button className=" mt-2 rounded Button1">
                            Edit
                        </button>
                    </div>
                </div>
                
            </section>
        </section>
    );
};

export default SecurityLogin;