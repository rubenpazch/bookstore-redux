import React from 'react';
import { connect } from 'react-redux';
import Book from './Book';

const mapStateToProps = state => ({ books: state.booksReducer.books });

function BooksList(props) {
  const { books } = props;
  return (
    <table>
      <thead>
        <th>
          <td>ID</td>
          <td>Title</td>
          <td>Category</td>
        </th>
      </thead>
      <tbody>
        {
          books.map(book => (
            <Book
              key={book.idBook}
              book={{
                idBook: book.idBook,
                title: book.title,
                category: book.category,
              }}
            />
          ))
        }
      </tbody>
    </table>
  );
}

export default connect(mapStateToProps)(BooksList);
