import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App/App';

ReactDOM.render(
    <App cv={require('./cv.json')} />,
    document.getElementById('root')
);
