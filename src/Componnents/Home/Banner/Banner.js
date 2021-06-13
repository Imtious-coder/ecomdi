import React from 'react';
import './Banner.css';
import Image from './brush-sale-banner-vector-260nw-1090866878.jpg';

const Banner = () => {
    return (
        <section className="pt-10 pb-10 bg-blue-100">
            <img src={Image} alt="" id="Banner_Image" />
        </section>
    );
};

export default Banner;