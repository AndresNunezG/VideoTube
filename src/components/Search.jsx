import React from 'react';

import '../assets/styles/components/Search.scss'

class Search extends React.Component {
    render () {
        return (
            <div className="Search__main">
                <div className="Search__main-container">
                    <h1>What to see today?</h1>
                    <div className="SearchBar__container">
                    <i className="SearchBar__icon fas fa-search"></i>
                        <input className="SearchBar__input" placeholder="Search"></input>
                        
                    </div>
                </div>
            </div>
        );
    }
}

export default Search;