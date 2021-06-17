import React from 'react';
import './BickScooter.css';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    Bick: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};






const BickScooter = (props) => {
    const { name, id, image, stock } = props.bick;
    console.log(props.bick.name);
    return (

        <section className="bg-blue-50">
            <Carousel responsive={responsive} className="w-full">
                <div>
                     <img style={{ width: "100%", height: "100px" }} src={image} alt="" />
                </div>

            </Carousel>

           
        </section>

    );
};

export default BickScooter;