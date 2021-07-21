import React from 'react';

import '../assets/styles/components/Category.scss'

const Category = (props) => (
    <div className="Category__container">
        <h3 className="Category__title">{props.title}</h3>
    </div>
);

export default Category;