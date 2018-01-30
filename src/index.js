import React from 'react';
import { render } from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import './sass/master.scss';
import App from './components/App/App.jsx';

injectTapEventPlugin();

render(<App/>, document.getElementById('react-container'));
