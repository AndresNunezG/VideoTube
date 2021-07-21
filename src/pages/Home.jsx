import React from 'react';

import Search from '../components/Search';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';

function Home() {
    return (
        <React.Fragment>
            <Search />
            <Carousel title="Mas vistos">
                <CarouselItem />
                <CarouselItem />
                <CarouselItem />
                <CarouselItem />
                <CarouselItem />
                <CarouselItem />
                <CarouselItem />
                <CarouselItem />
                <CarouselItem />
            </Carousel>
            <Carousel title="Recomendados">
                <CarouselItem />
                <CarouselItem />
            </Carousel>
        </React.Fragment>
    )
}

export default Home;