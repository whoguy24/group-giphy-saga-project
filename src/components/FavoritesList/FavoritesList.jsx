import React, {useEffect} from 'react';
import FavoriteItem from '../FavoriteItem/FavoriteItem.jsx';
import { useDispatch, useSelector } from 'react-redux';

function FavoritesList() {
    
    const dispatch = useDispatch();
    // access our reducer in this component
    const favoritesReducer = useSelector(store => store.favoritesReducer);
    const categoryReducer = useSelector(store => store.categoryReducer);
    

    useEffect(() => {
        getCategories();
        getFavorites();
    }, []);

    // dispatch
    const getFavorites = () => {
        console.log('inside getFavorites')
        dispatch ({
        type: 'SET_FAVORITES'
        })
    };

    const getCategories = () => {
        console.log('inside getCategories')
        dispatch ({
        type: 'SET_CATEGORY'
        })
    };

    const updateFavorites = () => {
        console.log('inside updateFavorites')
        dispatch ({
        type: 'UPDATE_FAVORITES'
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