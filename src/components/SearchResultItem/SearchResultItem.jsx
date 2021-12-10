import { useDispatch } from 'react-redux';

function SearchResultItem({ result }) {

    // Define dispatch variable
    const dispatch = useDispatch();

    // Function to add searchItemResult/Giphy object to favorites reducer
    function addToFavorites () {
        console.log('Adding to favorites:', result);
        dispatch({
            type: 'NEW_FAVORITES',
            payload: result
        })
    }

    // Render Component on the DOM
    return (
        <div style={{display: 'inline-block'}}>
            <img src={result.images.fixed_height.url}></img>
            <div>
                <button onClick ={addToFavorites}>Add to Favorites</button>
            </div>
        </div>
    )
}

// Export Component
export default SearchResultItem;