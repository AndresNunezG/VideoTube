import React, { useState } from 'react';

import '../assets/styles/components/CarouselItem.scss'

const CarouselItem = (props) => {
    const [like, setLike] = useState(false);
    const handleClick = () => {
        setLike(!like);
    };
    return(
        <div className="Item__container">
            <img className="Item__img" src={props.data.image} alt="item image" />
            <div className="Item__details-container">
                <div>
                    <i onClick={handleClick} className={(!like ? "Item__icon-play far fa-heart": "Item__icon-play fas fa-heart")}></i>
                </div>
                <p className="Item__details-title">{props.data.name}</p>
                <p className="Item__details-subtitle">{props.data.status} - {props.data.origin.name}</p>
            </div>
        </div>
    )
};

export default CarouselItem;