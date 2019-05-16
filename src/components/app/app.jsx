import React from 'react';
import MainScreen from '../main/main.jsx';
import PropTypes from 'prop-types';

const App = ({offers}) => {

  return <MainScreen
    offers = {offers}
  />;
};

App.propTypes = {
  offers: PropTypes.array
};

export default App;
