// IMPORT COMPONENTS
import React from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

<<<<<<< HEAD
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

=======
import SearchForm from '../SearchForm/SearchForm';

function App(props) {
  return (
    <div>
      <h1>Giphy Search!</h1>
      <SearchForm />
>>>>>>> 00fcd907c64969646f09440826b377ba44cd5124
    </div>
  );
}

// EXPORT COMPONENT
export default App;