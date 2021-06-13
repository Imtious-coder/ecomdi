import React from 'react';
import Banner from '../Banner/Banner';
import Categories from '../Categories/Categories';
import Products from '../Products/Products';

const Home_Page = () => {
    return (
        <div>
            <Categories />
            <Banner />
            <Products />
        </div>
    );
};

export default Home_Page;