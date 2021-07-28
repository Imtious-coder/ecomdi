import React from 'react';
import './Banner.css';
import Image from './brush-sale-banner-vector-260nw-1090866878.jpg';
import Image2 from './download.jpg';
import Image3 from './images.png';
import Image4 from './Image2.png';
import { Carousel } from 'antd';
import '../../../../node_modules/antd/dist/antd.min.css';
import I1 from './electronics.jpg';
import I2 from './bicks.jpg';
import I3 from './apple.jpg';
import I4 from './makeup.jpg';
import I5 from './tshirt.jpg';
import I6 from './blender.jpg';
import I7 from './losion.jpg';
import I8 from './sports.jpg';
import I9 from './books.jpg';



const Banner = () => {

    return (
        <section className="pt-8 pb-2 bg-white">
            <div className="Banner">
                <div className="Categories_Left">
                    <div className="flex Banner_Categories_Items">
                        <img src={I1} alt="" className="Banner_Categories_Images" />
                        <p>Electronics</p>
                    </div>
                    <div className="flex Banner_Categories_Items">
                        <img src={I2} alt="" className="Banner_Categories_Images" />
                        <p>Bick & Scooter</p>
                    </div>
                    <div className="flex Banner_Categories_Items">
                        <img src={I3} alt="" className="Banner_Categories_Images" />
                        <p>Groceries</p>
                    </div>
                    <div className="flex Banner_Categories_Items">
                        <img src={I4} alt="" className="Banner_Categories_Images" />
                        <p>Health and Beauty</p>
                    </div>
                    <div className="flex Banner_Categories_Items">
                        <img src={I5} alt="" className="Banner_Categories_Images" />
                        <p>Fasion</p>
                    </div>
                    <div className="flex Banner_Categories_Items">
                        <img src={I6} alt="" className="Banner_Categories_Images" />
                        <p>Home & Lifestyle</p>
                    </div>
                    <div className="flex Banner_Categories_Items">
                        <img src={I7} alt="" className="Banner_Categories_Images" />
                        <p>Baby</p>
                    </div>
                    <div className="flex Banner_Categories_Items">
                        <img src={I8} alt="" className="Banner_Categories_Images" />
                        <p>Sports</p>
                    </div>
                    <div className="flex Banner_Categories_Items">
                        <img src={I9} alt="" className="Banner_Categories_Images" />
                        <p>Books</p>
                    </div>
                </div>
                <div className="carousel">
                    <Carousel autoplay >
                        <div className="">
                            <img className="Banner_Image" src={Image4} alt="" />
                        </div>
                        <div>
                            <img className="Banner_Image" src={Image2} alt="" />
                        </div>
                        <div>
                            <img className="Banner_Image" src={Image3} alt="" />
                        </div>
                        <div>
                            <img className="Banner_Image" src={Image} alt="" />
                        </div>
                        <div>
                            <img className="Banner_Image" src={Image} alt="" />
                        </div>
                        <div>
                            <img className="Banner_Image" src={Image} alt="" />
                        </div>
                    </Carousel>
                </div>
                <div className="Right_Side p-3 pt-0 pb-0 pl-5">
                    <div className="Banner_Right_Cards">
                        <p>Groceries</p>
                        <p>40% off</p>
                    </div>
                    <div className="Banner_Right_Cards">
                        <p>Home applience</p>
                        <p>35% off</p>
                    </div>
                    <div className="Banner_Right_Cards">
                        <p>Bicks</p>
                        <p>Flat 40% off</p>
                    </div>
                    <div className="Banner_Right_Cards">
                        <p>TV</p>
                        <p>40% off</p>
                    </div>
                </div>
            </div>
            <div className="Mobile_Banner">
                <Carousel autoplay >
                    <div>
                        <img className="Banner_Image2" src={Image4} alt="" />
                    </div>
                    <div>
                        <img className="Banner_Image2" src={Image2} alt="" />
                    </div>
                    <div>
                        <img className="Banner_Image2" src={Image3} alt="" />
                    </div>
                    <div>
                        <img className="Banner_Image2" src={Image} alt="" />
                    </div>
                </Carousel>
                <div className="grid grid-cols-4 p-5 gap-2 bg-white">
                    <div className="Banner_Categories_Items2">
                        <div style={{ display: "flex", justifyContent: "center" }}>
                            <img src={I1} alt="" className="Banner_Categories_Images2" />
                        </div>
                        <p>Electronics</p>
                    </div>
                    <div className="Banner_Categories_Items2">
                        <div style={{ display: "flex", justifyContent: "center" }}>
                            <img src={I2} alt="" className="Banner_Categories_Images2" />
                        </div>
                        <p>Bick & Scooter</p>
                    </div>
                    <div className="Banner_Categories_Items2">
                        <div style={{ display: "flex", justifyContent: "center" }}>
                            <img src={I3} alt="" className="Banner_Categories_Images2" />
                        </div>
                        <p>Groceries</p>
                    </div>
                    <div className="Banner_Categories_Items2">
                        <div style={{ display: "flex", justifyContent: "center" }}>
                            <img src={I4} alt="" className="Banner_Categories_Images2" />
                        </div>
                        <p>Health and Beauty</p>
                    </div>
                    <div className="Banner_Categories_Items2">
                        <div style={{ display: "flex", justifyContent: "center" }}>
                            <img src={I6} alt="" className="Banner_Categories_Images2" />
                        </div>
                        <p>Home & Lifestyle</p>
                    </div>
                    <div className="Banner_Categories_Items2">
                        <div style={{ display: "flex", justifyContent: "center" }}>
                            <img src={I7} alt="" className="Banner_Categories_Images2" />
                        </div>
                        <p>Baby</p>
                    </div>
                    <div className="Banner_Categories_Items2">
                        <div style={{ display: "flex", justifyContent: "center" }}>
                            <img src={I8} alt="" className="Banner_Categories_Images2" />
                        </div>
                        <p>Sports</p>
                    </div>
                    <div className="Banner_Categories_Items2">
                        <div style={{ display: "flex", justifyContent: "center" }}>
                            <img src={I9} alt="" className="Banner_Categories_Images2" />
                        </div>
                        <p>Books</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;