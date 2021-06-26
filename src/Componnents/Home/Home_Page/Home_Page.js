import React from 'react';
import Banner from '../Banner/Banner';
import Categories from '../Categories/Categories';
import Products from '../Products/Products';

const Home_Page = () => {
    return (
        <div className="BG3_2">
            <Categories />
            <Banner />
            <Products />
        </div>
    );
};

export default Home_Page;