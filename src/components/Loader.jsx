import React from 'react';

import '../assets/styles/components/Loader.scss'

const Loader = () => (
    <div className="Loader__container">
        <div className="lds-spinner">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div>
);

export default Loader;