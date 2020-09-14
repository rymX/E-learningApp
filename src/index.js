import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore} from 'redux';
// import rootreducers from './reducers';
import { Provider} from 'react-redux';
import reducer1 from './reducers/reducer1';



/* 

const increment=()=> {
  return{
  type:'increment'
}
}
const decrement=()=> {
  return {
    type:'decrement'
  }
}
*/ 



// create store
// let store=createStore(rootreducers,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


let store = createStore(reducer1)     ;                                           


// store={store}

ReactDOM.render(
  <Provider store = {store}>
   <App />
   </Provider>
   ,document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
