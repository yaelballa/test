import React, { PureComponent } from 'react';
import CommentsList from './CommentsList';
import EditDialog from './EditDialog';
import thunkMiddleware from 'redux-thunk';
import DeleteDialog from './DeleteDialog';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import reducers from '../reducers/reducers'
import { loadComments } from '../actions'

const store = createStore(
    reducers,
    applyMiddleware(
        promiseMiddleware,
        thunkMiddleware
    )
);

store.dispatch(loadComments());

class App extends PureComponent {
  render() {
    return (
      <Provider store={store}>
        <MuiThemeProvider>
            <span>
              <EditDialog/>
              <DeleteDialog/>
              <CommentsList />
            </span>
        </MuiThemeProvider>
      </Provider>
    );
  }
}

export default App;
