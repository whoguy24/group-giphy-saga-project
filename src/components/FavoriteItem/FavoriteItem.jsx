import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux';

function FavoriteItem({favoriteItem}) {

    const dispatch = useDispatch();
    const categoryReducer = useSelector(store => store.categoryReducer);

    return(
        <div style={{display: 'inline-block'}}>
            <img src={favoriteItem.url}></img>
        </div>
    )
}

export default FavoriteItem;