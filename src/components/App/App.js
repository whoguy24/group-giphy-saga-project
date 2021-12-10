import React from 'react';
import FavoritesList from '../FavoritesList/FavoritesList.jsx';

import SearchForm from '../SearchForm/SearchForm';

function App(props) {
  return (
    <div>
      <h1>Giphy Search!</h1>

      <FavoritesList />
      <SearchForm />

    </div>
  );
}

export default App;
