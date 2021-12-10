import React, {useEffect} from 'react';
import FavoriteItem from '../FavoriteItem/FavoriteItem.jsx';
import { useDispatch, useSelector } from 'react-redux';

function FavoritesList() {
    
    const dispatch = useDispatch();
    // access our reducer in this component
    const favoritesReducer = useSelector(store => store.favoritesReducer);

    useEffect(() => {
        console.log('in useEffect')
        getFavorites();
    }, []);

    // dispatch
    const getFavorites = () => {
        console.log('inside getFavorites')
        dispatch ({
        type: 'SET_FAVORITES'
        })
    };

    return (
        <ul>
            {favoritesReducer.map((favoriteItem) => {
                return (
                    <FavoriteItem key={favoriteItem.id} favoriteItem={favoriteItem} />
                );
            })}
        </ul>
    );

}

export default FavoritesList;