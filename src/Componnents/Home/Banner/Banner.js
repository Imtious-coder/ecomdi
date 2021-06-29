import React from 'react';
import './Banner.css';
import Image from './brush-sale-banner-vector-260nw-1090866878.jpg';
import Image2 from './download.jpg';
import Image3 from './images.png';
import Image4 from './Image2.png';

import { Carousel } from 'antd';
import '../../../../node_modules/antd/dist/antd.min.css';


const Banner = () => {
    return (
        <section className="Banner bg-blue-50">
            <Carousel autoplay>
                <div>
                    <img className="Banner_Image" src={Image} alt="" />
                </div>
                <div>
                    <img className="Banner_Image" src={Image2} alt="" />
                </div>
                <div>
                    <img className="Banner_Image" src={Image3} alt="" />
                </div>
                <div>
                    <img className="Banner_Image" src={Image4} alt="" />
                </div>
            </Carousel>
        </section>
    );
};

export default Banner;