import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

// import {reducer} from '../src/Reducer'; original
import rootReducer from '../src/Reducer/index';

import "./index.css";
import App from "./components/App";

// const store = createStore(reducer, applyMiddleware(thunk, logger)); original
const store = createStore(rootReducer, applyMiddleware(thunk, logger));

ReactDOM.render(<Provider store = {store}><App /></Provider>, document.getElementById("root"));
