import React, { useEffect, useState } from 'react';

import Search from '../components/Search';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Loader from '../components/Loader';

import useAPI from '../hooks/useAPI';

function Home() {

    const arrayGenerator = (len) => Array.from({length: len}, () => Math.floor(Math.random() * 671));

    const chaptersMyList = arrayGenerator(10);
    const chaptersRecommended = arrayGenerator(20);
    const chaptersTop5 = arrayGenerator(5);

    const coversAPI = (ids) => `https://rickandmortyapi.com/api/character/${ids}`;

    const coversMyList = useAPI(coversAPI(chaptersMyList));
    const coversTop5 = useAPI(coversAPI(chaptersTop5));
    const coversRecommended = useAPI(coversAPI(chaptersRecommended));

    const liCarouselItem = (arrayCovers) => {
        if (arrayCovers[0].length) {
            return(
                arrayCovers[0].map(cover => (
                    <li key={cover.id} className="Carousel__list-element">
                    <CarouselItem data={cover} />
                </li>
                ))
            );       
        }
        else if (!arrayCovers[1]) {
            return <Loader />
        }
    }

    return (
        <React.Fragment>
            <Search />
            <Carousel title="My list">
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
                    {liCarouselItem(coversTop5)}
                </ul>
            </Carousel>
        </React.Fragment>
    )
}

export default Home;