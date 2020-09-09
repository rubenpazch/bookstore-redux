import React from 'react';
import { connect } from 'react-redux';
import Book from './Book';

const mapStateToProps = state => ({ books: state.booksReducer.books });

function BooksList(props) {
  // console.log(props.books[0]);
  const { books } = props;
  return (
    <table>
      <thead>
        <tr>
          <td>Id</td>
          <td>Title</td>
          <td>Category</td>
        </tr>
      </thead>
      <tbody>
        {books.map(b => (<Book book={b} />))}
      </tbody>
    </table>
  );
}

export default connect(mapStateToProps)(BooksList);
