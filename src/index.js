import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore} from 'redux';
// import rootreducers from './reducers';
import { Provider} from 'react-redux'



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


                                                


// store={store}

ReactDOM.render( <App />,document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
