import React, { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {
    const key = process.env.REACT_APP_API_KEY;

    const [items, setItems] = useState([]);
    const [search, setSearch] = useState('');
    const [query1, setQuery1] = useState('');
    const [query2, setQuery2] = useState('');
    const [location, setLocation] = useState('');


    useEffect(() => {
        YelpFetch();
    }, [query1])

    const updateSearch = e => {
        setSearch(e.target.value);
    }
    const updateLocation = e => {
        setLocation(e.target.value);
    }
    const getSearch = e => {
        e.preventDefault();
        if (search && location !== "") {
            console.log('neiter are empty string')
        }
        setQuery1(search);
        setQuery2(location);
        setSearch('');
        setLocation('');
        console.log('getsearch S:',search,'L:', location);
    }

    const YelpFetch = async () => {

       console.log('yelpfetched')
            const data = await fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${query1}&location=${query2}&limit=10`, {
                method: "GET",
                headers: {
                    "Authorization": `Bearer ${key}`
                }
            });

            const items = await data.json();
            console.log(items.businesses);
            setItems(items.businesses);
            console.log('yelpcall', 'q1', query1, 'q2', query2)

        
        }
    


    return (
        <Router>
            <div className="App">
                <h4>Search</h4>
                <form className="search-form" onSubmit={getSearch}>
                    <input className="search-bar" type="text"
                        value={search}
                        onChange={updateSearch}
                    />
                    <h4>Location</h4>
                    <input className="search-bar" type="text"
                        value={location}
                        onChange={updateLocation}
                    />
                    <br />
                    <button className="search-button"
                        type="submit">
                        Search
                    </button>
                </form>
            </div>
        </Router>
    )
}

export default App;