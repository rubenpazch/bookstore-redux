import { createStore } from 'redux';
import rootReducer from '../reducers/index';

const randonId = () => Math.floor(Math.random() * 1000);

const initialState = {
  books: [
    { idBook: randonId(), title: 'book1', category: 'History' },
    { idBook: randonId(), title: 'book2', category: 'Action' },
    { idBook: randonId(), title: 'book3', category: 'History' },
    { idBook: randonId(), title: 'book4', category: 'Action' },
  ],
};

export const store = createStore(rootReducer(initialState));
