import React from 'react';

import '../assets/styles/components/Search.scss'

const Search = (props) => {
    return (
        <div className="Search__main">
            <div className="Search__main-container">
                <h1>What to see today?</h1>
                <div className="SearchBar__container">
                <i className="SearchBar__icon fas fa-search"></i>
                    <input
                        type="text"    
                        onChange={props.handleChange} 
                        className="SearchBar__input"
                        name="search"
                        placeholder="Search"
                        value={props.inputValue}>
                    </input>     
                </div>
            </div>
        </div>
    );
}

export default Search;