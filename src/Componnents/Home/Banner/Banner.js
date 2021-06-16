import React from 'react';
import './Banner.css';
import Image from './brush-sale-banner-vector-260nw-1090866878.jpg';

const Banner = () => {
    return (
        <section className="Banner bg-blue-50">
            <img src={Image} alt="" className="Banner_Image" />
        </section>
    );
};

export default Banner;