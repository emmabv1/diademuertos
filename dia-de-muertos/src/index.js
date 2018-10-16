import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import App from './App';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './reducers/rootReducer';
import {fetchItems} from './actions/item-actions';
import {fetchSession} from './actions/authState-actions';
import {fetchUsers} from './actions/user-actions';

const store = createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware)
);

store
      .dispatch(fetchItems())

store
  .dispatch(fetchSession())
  .then(() => {
    ReactDOM.render(
      <Provider store={store}>
          <BrowserRouter>
              <App/>
          </BrowserRouter>
      </Provider>, 
      document.getElementById('root')
    );
    if (store.getState().authState.loggedInUserId) {
      let userLog = store.getState().authState.loggedInUserId;
      console.log("there is a session");
      store
      .dispatch(fetchUsers(userLog))
      .then(() => console.log(store.getState()));
    }
    else {
      console.log("no session");
      console.log(store.getState());
    }
  })