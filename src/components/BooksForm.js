import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createBook } from '../actions/index';

const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
const randonId = () => Math.floor(Math.random() * 1000);

function mapDispatchToProps(dispatch) {
  return {
    createBook: book => dispatch(createBook(book)),
  };
}

class Booksform extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      category: 'not-categorized',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { title, category } = this.state;
    const { createBook } = this.props;
    createBook({ idBook: randonId(), title, category });
    this.setState({ title, category });
  }

  render() {
    const { title } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="book-title">
          Title
          <input type="text" id="title" value={title} onChange={this.handleChange} />
        </label>
        <label htmlFor="book-title">
          Categorie
          <select name="category" id="category" onChange={this.handleChange}>
            <option>Choose a category</option>
            {categories.map(c => <option key={c} value={c}>{c}</option>)}
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

Booksform.propTypes = {
  createBook: PropTypes.func.isRequired,
};

// const form = connect(null, mapDispatchToProps)(Booksform);

export default connect(null, mapDispatchToProps)(Booksform);
