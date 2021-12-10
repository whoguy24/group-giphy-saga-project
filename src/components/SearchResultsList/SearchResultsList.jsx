import React, { useEffect } from "react";
import { useSelector } from "react-redux";

import SearchResultItem from "../SearchResultItem/SearchResultItem";

function SearchResultsList() {
    const searchResults = useSelector(store => store.searchResultsReducer);
    const searchData = searchResults.data;
    if (searchResults.length != 0) {
        return (
            <div>
                {searchData.map((result, i) => {
                    return (
                        <SearchResultItem key={i} result={result} />
                    )
                })}
            </div>
        )
    } else {
        return (
            <></>
        )
    }

}

export default SearchResultsList;