import React from 'react';

import Category from './Category';

import '../assets/styles/components/Carousel.scss'

class Carousel extends React.Component {
    render() {
        return (
            <React.Fragment>
            <Category title={this.props.title} />
                <div className="Carousel__container">
                    {this.props.children}
                </div>
            </React.Fragment>
        )
    }
}

export default Carousel;