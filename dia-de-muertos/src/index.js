import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import {fetchUsers} from './actions/user-actions';
import rootReducer from './reducers/rootReducer'
import {fetchSession} from './actions/authState-actions';
import {fetchItems} from './actions/item-actions';

const store = createStore(
  rootReducer,
  applyMiddleware(
    thunkMiddleware
    //,
    //loggerMiddleware
  )
 // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store
      .dispatch(fetchItems())
      //.then(() => console.log(store.getState()));

store
  .dispatch(fetchSession())
  .then(() => {
    if (store.getState().authState.loggedInUserId) {
      let userLog = store.getState().authState.loggedInUserId;
      console.log("there is a session");
      store
      .dispatch(fetchUsers(userLog))
      .then(() => console.log(store.getState()));
      
    }
    
    else {
      console.log("no session");
    }
  })





ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>, 
    document.getElementById('root')
);

//registerServiceWorker();