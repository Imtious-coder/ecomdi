import React from 'react';
import './Banner.css';
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
import { Link } from 'react-router-dom';



const Banner = () => {

    return (
        <section className="pt-8 pb-2 bg-white">
            <div className="Banner">
                <div className="Categories_Left">
                    <Link to="/blackberry">
                        <div className="flex Banner_Categories_Items">
                            <img src={I1} alt="" className="Banner_Categories_Images" />
                            <p>Electronics</p>
                        </div>
                    </Link>
                    <Link to="/bikes">
                        <div className="flex Banner_Categories_Items">
                            <img src={I2} alt="" className="Banner_Categories_Images" />
                            <p>Bick & Scooter</p>
                        </div>
                    </Link>
                    <Link to="/groceries">
                        <div className="flex Banner_Categories_Items">
                            <img src={I3} alt="" className="Banner_Categories_Images" />
                            <p>Groceries</p>
                        </div>
                    </Link>
                    <Link to="/health-and-beauty">
                        <div className="flex Banner_Categories_Items">
                            <img src={I4} alt="" className="Banner_Categories_Images" />
                            <p>Health and Beauty</p>
                        </div>
                    </Link>
                    <Link to="/men-fashion">
                        <div className="flex Banner_Categories_Items">
                            <img src={I5} alt="" className="Banner_Categories_Images" />
                            <p>Fasion</p>
                        </div>
                    </Link>
                    <Link to="/home-accecories">
                        <div className="flex Banner_Categories_Items">
                            <img src={I6} alt="" className="Banner_Categories_Images" />
                            <p>Home & Lifestyle</p>
                        </div>
                    </Link>
                    <Link to="/babies-toys">
                        <div className="flex Banner_Categories_Items">
                            <img src={I7} alt="" className="Banner_Categories_Images" />
                            <p>Baby</p>
                        </div>
                    </Link>
                    <Link to="/sports">
                        <div className="flex Banner_Categories_Items">
                            <img src={I8} alt="" className="Banner_Categories_Images" />
                            <p>Sports</p>
                        </div>
                    </Link>
                    <div className="flex Banner_Categories_Items">
                        <img src={I9} alt="" className="Banner_Categories_Images" />
                        <p>Books</p>
                    </div>
                </div>
                <div className="carousel">
                    <Carousel autoplay >
                        <div className="First_Slide">
                            <div className="First_Slide_Text">
                                <h1 className="First_Slider_Title">Flash sale on all products</h1>
                            </div>
                        </div>
                         <div className="Second_Slide">
                            <div className="Second_Slide_Text">
                                {/* <p>Lol</p> */}
                            </div>
                        </div>
                        <div className="Third_Slide">
                            <div className="Third_Slide_Text">
                                {/* <p>Lol</p> */}
                            </div>
                        </div>
                        <div className="Fourth_Slide">
                            <div className="Fourth_Slide_Text">
                                {/* <p>Lol</p> */}
                            </div>
                        </div>
                        <div className="Fifth_Slide">
                            <div className="Fifth_Slide_Text">
                                {/* <p>Lol</p> */}
                            </div>
                        </div>
                        <div className="Sixth_Slide">
                            <div className="Sixth_Slide_Text">
                                {/* <p>Lol</p> */}
                            </div>
                        </div>
                    </Carousel>
                </div>
                <div className="Right_Side p-3 pt-0 pb-0 pl-5">
                    <div className="Banner_Right_Card1">
                        <p className="Banner_Right_Cards_Text">Groceries</p>
                        <p className="Banner_Right_Cards_Text2">40% off</p>
                    </div>
                    <div className="Banner_Right_Card2">
                        <p className="Banner_Right_Cards_Text">Home applience</p>
                        <p className="Banner_Right_Cards_Text2">35% off</p>
                    </div>
                    <div className="Banner_Right_Card3">
                        <p className="Banner_Right_Cards_Text">Bicks</p>
                        <p className="Banner_Right_Cards_Text2">Flat 40% off</p>
                    </div>
                    <div className="Banner_Right_Card4">
                        <p className="Banner_Right_Cards_Text">Books</p>
                        <p className="Banner_Right_Cards_Text2">40% off</p>
                    </div>
                </div>
            </div>
            <div className="Mobile_Banner">
                <Carousel autoplay >
                    <div className="First_Slide1">
                        <div className="First_Slide_Text">
                        </div>
                    </div>
                    <div className="Second_Slide2">
                        <div className="Second_Slide_Text">
                        </div>
                    </div>
                    <div className="Third_Slide3">
                        <div className="Third_Slide_Text">
                        </div>
                    </div>
                    <div className="Fourth_Slide4">
                        <div className="Fourth_Slide_Text">
                        </div>
                    </div>
                    <div className="Fifth_Slide5">
                        <div className="Fifth_Slide_Text">
                            <p>Lol</p>
                        </div>
                    </div>
                    <div className="Sixth_Slide6">
                        <div className="Sixth_Slide_Text">
                        </div>
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