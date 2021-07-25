import React, { useEffect, useState } from 'react';

import Search from '../components/Search';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';

import useAPI from '../hooks/useAPI';

function Home() {

    const chaptersMyList = Array.from({length: 10}, () => Math.floor(Math.random() * 671));
    const chaptersTop3 = Array.from({length: 5}, () => Math.floor(Math.random() * 671));
    const chaptersRecommended = Array.from({length: 20}, () => Math.floor(Math.random() * 671));

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

    return (
        <React.Fragment>
            <Search />
            <Carousel title="My lista">
                <ul className="Carousel__list">
                    {
                        (coversMyList.length)
                        ?
                        coversMyList.map(cover => (
                            <li key={cover.id} className="Carousel__list-element">
                                <CarouselItem data={cover} />
                            </li>
                        ))
                        :
                        (<p>Hola</p>)
                    }
                </ul>
            </Carousel>
            <Carousel title="Recommended">
                <ul className="Carousel__list">
                    {
                        (coversRecommended.length)
                        ?
                        coversRecommended.map(cover => (
                            <li key={cover.id} className="Carousel__list-element">
                                <CarouselItem data={cover} />
                            </li>
                        ))
                        :
                        (<p>Hola</p>)
                    }
                </ul>
            </Carousel>
            <Carousel title="Top 5">
                <ul className="Carousel__list">
                    {
                        (coversTop3.length)
                        ?
                        coversTop3.map(cover => (
                            <li key={cover.id} className="Carousel__list-element">
                                <CarouselItem data={cover} />
                            </li>
                        ))
                        :
                        (<p>Hola</p>)
                    }
                </ul>
            </Carousel>
        </React.Fragment>
    )
}

export default Home;