import React from 'react';

const Search = (props) => {

    return (
        <div className="search_container">
            <h2> Search your Artist</h2>
            <input type="text" onChange={event => props.keywords(event)}/>
            <h3>Made By Umair Ahmed Bajwa with React and Redux</h3>
        </div>
    )
}

export default Search;