// IMPORT COMPONENTS
import React from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

import SearchForm from '../SearchForm/SearchForm';
import FavoritesList from '../FavoritesList/FavoritesList.jsx';
import './App.css';

// APP COMPONENT FUNCTION
function App() {
  return (
    <div>
      <h1>Giphy Search!</h1>

      <Router>

        {/* Direct links for development purposes, to be removed once the app is finshed */}
        <ul>
          <li>
            <Link to="/">Search Form</Link>
          </li>
          <li>
            <Link to="/api/favorite">Favorites</Link>
          </li>
        </ul>

        {/* Define Routes */}
        <Route exact path="/" component={SearchForm} />
        <Route exact path="/api/favorite" component={FavoritesList} />

        {/* <FavoritesList />
        <SearchForm /> */}
      </Router>

    </div>

  );
}

// EXPORT COMPONENT
export default App;