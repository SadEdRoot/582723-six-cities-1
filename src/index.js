import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';

const init = () => {
  const name = `Keks`;

  ReactDOM.render(
      <App
        name={name}
      />,
      document.querySelector(`#root`)
  );
};

init();
