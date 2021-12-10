import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import SearchResultsList from "../SearchResultsList/SearchResultsList";

function SearchForm() {
    const dispatch = useDispatch();

    const [searchTerm, setSearchTerm] = useState('');

    //need a GET dispatch for the server to send to giphy 
    const searchRequest = () => {
        dispatch({
            type: 'SEARCH_GIPHY',
            payload: searchTerm
        })
    }

    // need a post dispatch to the server to send to the db???
    const addNewFavorite = (event) => {
        event.preventDefault();
        dispatch({
            type: 'ADD_FAVORITES',
            payload: something // change later!!!!
        });
    }


    return (
        <div>
            <div>
                <input 
                    type="text"
                    value={searchTerm}
                    onChange={(event) => setSearchTerm(event.target.value)}
                    placeholder="Search Here!" 
                />
                <button onClick={searchRequest}>Search</button>
            </div>
            <SearchResultsList />
        </div>

    )
}

export default SearchForm;