import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './reducers';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose ;
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({trace: true}) || compose({trace: true});


const store = createStore(reducers, composeEnhancers(applyMiddleware()));

const root = ReactDOM.createRoot(document.getElementById('root'));
                                                                          // When working with non-react js libraries like nice-select, counterup, slick-slider etc.
                                                                          // <React.StrictMode>
root.render(               
      <React.StrictMode>                                             
        <Provider store={store}>
          <App />
        </Provider>
      </React.StrictMode>
);
    

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();