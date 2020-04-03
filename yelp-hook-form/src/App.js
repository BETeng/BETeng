import React, { useEffect, useState } from 'react';
import './App.css';

const App = () => {
    const key = process.env.REACT_APP_API_KEY;


    const [search, setSearch] = useState('');
    const [query, setQuery] = useState('');

    useEffect(() => {

    }, [])

    const updateSearch = e => {
        setSearch(e.target.value);
    }

    const getSearch = e => {
        e.preventDefault();
        setQuery(search);
        setSearch('');
        console.log(search);

    }


    return (
        <div className="App">
            <form className="search-form" onSubmit={getSearch}>
                <input className="search-bar" type="text"
                    value={search}
                    onChange={updateSearch}
                />
                <button className="search-button"
                    type="submit">
                    Search
            </button>
            </form>

        </div>
    )
}

export default App;