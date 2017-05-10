import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';

//A reducer is a function that returns a piece of applications state, there can be many different reducers to reuturn different pieces of the apps state.
const rootReducer = combineReducers({
  //state: (state = {}) => state
  books: BooksReducer // same as books: [ { title: ''} ...... ],
});

export default rootReducer;
