import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import * as serviceWorker from './serviceWorker';

//New Imports for Index.js

//Import createStore/applyMiddleware
import { createStore, applyMiddleware } from "redux";

//Import Provider
import { Provider } from "react-redux";

//Import Thunk
import thunk from "redux-thunk";

//Import RootReducer
import rootReducer from "./reducer"

//Define Store (const store = createStore) w/ rootreducer, middleware, && thunk
const store = createStore(rootReducer, applyMiddleware(thunk));

const rootElement = document.getElementById('root');

ReactDOM.render(
//Wrap App in Provider and pass const store to javascript ( <Provider store={store}> )
<Provider store={store}>
    <App />
</Provider>,
rootElement
);


// serviceWorker.unregister();
