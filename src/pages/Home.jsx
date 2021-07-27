import React, { useEffect, useState } from 'react';

import Search from '../components/Search';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Loader from '../components/Loader';

import useAPI from '../hooks/useAPI';
import useSearchQuery from '../hooks/useSearchQuery';
import useSearchItem from '../hooks/useSearchItem';

function Home() {
    const arrayGenerator = (len) => Array.from({length: len}, () => Math.floor(Math.random() * 671));
    const coversAPI = (ids) => `https://rickandmortyapi.com/api/character/${ids}`;

    let coversMyList = useAPI(coversAPI(arrayGenerator(100)));
    const coversRecommended = useAPI(coversAPI(arrayGenerator(10)));
    const coversTop5 = useAPI(coversAPI(arrayGenerator(5)));

    const {query, setQuery} = useSearchQuery();
    const filteredItems = useSearchItem(query, coversMyList[0]);

    const liCarouselItem = (arrayCovers) => {
        if (arrayCovers.length === 0) {
            return <Loader />
        }
        else {
            return(
                arrayCovers.map(cover => (
                    <li key={cover.id} className="Carousel__list-element">
                    <CarouselItem data={cover} />
                </li>
                ))
            );       
        }
    }

    return (
        <React.Fragment>
            <Search inputValue={query} handleChange={(e) => {setQuery(e.target.value)}} />
            <Carousel title="My list">
                <ul className="Carousel__list">
                    {
                        (filteredItems === null)
                        ?
                        <p className="NotFound__message">Sorry :( No items were found</p>
                        :
                        liCarouselItem(filteredItems)
                    }
                </ul>
            </Carousel>
            <Carousel title="Recommended">
                <ul className="Carousel__list">
                    {liCarouselItem(coversRecommended[0])}
                </ul>
            </Carousel>
            <Carousel title="Top 5">
                <ul className="Carousel__list">
                    {liCarouselItem(coversTop5[0])}
                </ul>
            </Carousel>
        </React.Fragment>
    )
}

export default Home;