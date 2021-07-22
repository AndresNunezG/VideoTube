import React from 'react';

import '../assets/styles/components/CarouselItem.scss'

const CarouselItem = () => (
    <div className="Item__container">
        <img className="Item__img" src={"https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=2&h=750&w=1260"} alt="item image" />
        <div className="Item__details-container">
            <div>
                <i className="Item__icon-play far fa-play-circle"></i>
            </div>
            <p className="Item__details-title">Titulo descriptivo</p>
            <p className="Item__details-subtitle">2016 16+ 114 minutos</p>
        </div>
    </div>
);

export default CarouselItem;