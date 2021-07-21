import React from 'react';

import Search from '../components/Search';
import Carousel from '../components/Carousel';

function Home() {
    return (
        <React.Fragment>
            <Search />
            <h1>Carousel A</h1>
            <Carousel />
            <h1>Carousel B</h1>
            <Carousel />
        </React.Fragment>
    )
}

export default Home;