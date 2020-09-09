import React from 'react';
import { connect } from 'react-redux';
import Book from './Book';

const mapStateToProps = state => ({ books: state.books });

function BooksList(books) {
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
        <Book book={books} />
      </tbody>
    </table>
  );
}

const List = connect(mapStateToProps)(BooksList);

export default List;
