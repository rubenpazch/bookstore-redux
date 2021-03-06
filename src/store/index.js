import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../reducers/index';

const randonId = () => Math.floor(Math.random() * 1000);

const defaultBooks = [
  { idBook: randonId(), title: 'book1', category: 'History' },
  { idBook: randonId(), title: 'book2', category: 'Action' },
  { idBook: randonId(), title: 'book3', category: 'History' },
  { idBook: randonId(), title: 'book4', category: 'Action' },
  { idBook: randonId(), title: 'book5', category: 'Horror' },
  { idBook: randonId(), title: 'book6', category: 'Kids' },
  { idBook: randonId(), title: 'book7', category: 'Biography' },
];

const defaultFilter = 'All';

// eslint-disable-next-line import/prefer-default-export
export const store = createStore(
  rootReducer({
    books: defaultBooks,
    category: defaultFilter,
  }),
  composeWithDevTools(),
);
