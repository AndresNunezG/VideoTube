import React, { useState } from 'react';

import Search from '../components/Search';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Loader from '../components/Loader';

import useAPI from '../hooks/useAPI';

const useSearchQuery = () => {
    const [query, setQuery] = useState('');
    return {query, setQuery};
}

const useSearchItem = (query, coversList) => {
    const result = coversList.filter((coverItem) => {
        return (
            `${coverItem.name} ${coverItem.status} ${coverItem.origin.name}`
            .toLowerCase()
            .includes(query.toLowerCase())
        )
    })
    return result;
}

function Home() {
    const arrayGenerator = (len) => Array.from({length: len}, () => Math.floor(Math.random() * 671));
    const coversAPI = (ids) => `https://rickandmortyapi.com/api/character/${ids}`;

    let coversMyList = useAPI(coversAPI(arrayGenerator(50)));
    const coversRecommended = useAPI(coversAPI(arrayGenerator(10)));
    const coversTop5 = useAPI(coversAPI(arrayGenerator(5)));

    const {query, setQuery} = useSearchQuery();
    const filteredItems = useSearchItem(query, coversMyList[0])
    
    const liCarouselItem = (arrayCovers) => {
        if (arrayCovers.length == 0 || arrayCovers == undefined) {
            return <Loader />
        }
        if (arrayCovers.length) {
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
                    {liCarouselItem(filteredItems)}
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