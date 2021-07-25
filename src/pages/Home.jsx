import React, { useEffect, useState } from 'react';

import Search from '../components/Search';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';

import useAPI from '../hooks/useAPI';

function Home() {

    const arrayGenerator = (len) => Array.from({length: len}, () => Math.floor(Math.random() * 671));

    const chaptersMyList = arrayGenerator(10);
    const chaptersTop3 = arrayGenerator(3);
    const chaptersRecommended = arrayGenerator(20);

    const coversAPI = (ids) => `https://rickandmortyapi.com/api/character/${ids}`;

    const coversMyList = useAPI(coversAPI(chaptersMyList));
    const coversTop3 = useAPI(coversAPI(chaptersTop3));
    const coversRecommended = useAPI(coversAPI(chaptersRecommended));

    if (!coversTop3.length || !coversMyList.length || !coversRecommended.length) {
        return (
            <React.Fragment>
                <Search />
                <p>Cargando</p>
            </React.Fragment>
        )
    }

    const liCarouselItem = (arrayCovers) => (
        (arrayCovers.length)
        ?
        arrayCovers.map(cover => (
            <li key={cover.id} className="Carousel__list-element">
                <CarouselItem data={cover} />
            </li>
        ))
        :
        <p>Error</p>
    )

    return (
        <React.Fragment>
            <Search />
            <Carousel title="My lista">
                <ul className="Carousel__list">
                    {liCarouselItem(coversMyList)}
                </ul>
            </Carousel>
            <Carousel title="Recommended">
                <ul className="Carousel__list">
                    {liCarouselItem(coversRecommended)}
                </ul>
            </Carousel>
            <Carousel title="Top 5">
                <ul className="Carousel__list">
                    {liCarouselItem(coversTop3)}
                </ul>
            </Carousel>
        </React.Fragment>
    )
}

export default Home;