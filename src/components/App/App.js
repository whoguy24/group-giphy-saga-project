// IMPORT COMPONENTS
import React from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

// APP COMPONENT FUNCTION
function App() {
  return (
    <div>
      <h1>Giphy Search!</h1>

      {/* Define Router Navigation */}
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
          {/* <Route path="/" element={<SearchForm />} />
          <Route path="/api/favorite" element={<FavoritesList />} /> */}

      </Router>

    </div>
  );
}

// EXPORT COMPONENT
export default App;