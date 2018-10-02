import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import {fetchUsers} from './actions/user-actions';
import rootReducer from './reducers/userReducer'


//const loggerMiddleware = createLogger()

const store = createStore(
  rootReducer,
  applyMiddleware(
    thunkMiddleware
    //,
    //loggerMiddleware
  )
);

store
  .dispatch(fetchUsers())
  .then(() => console.log(store.getState()))

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>, 
    document.getElementById('root')
);

//registerServiceWorker();