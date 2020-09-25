import React, { Component } from 'react';
import { connect } from 'react-redux';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
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
      <Col className="formAddBook" md={12}>
        <Row className="titleAddBook">
          <h1>ADD NEW BOOK</h1>
        </Row>

        <form onSubmit={this.handleSubmit} className="formInputsBooks">
          <Col className="InputsForms" md={6}>
            <Form.Control type="text" placeholder="Normal text" id="title" value={title} onChange={this.handleChange} />
          </Col>
          <Col className="InputsForms" md={3}>
            <Form.Control as="select" name="category" id="category" onChange={this.handleChange}>
              <option>Category</option>
              {categories.map(c => <option key={c} value={c}>{c}</option>)}
            </Form.Control>
          </Col>
          <Col className="InputsForms" md={3}>
            <Button variant="primary" type="submit" value="Submit" className="buttonSave">ADD BOOK</Button>
          </Col>
        </form>

      </Col>
    );
  }
}

Booksform.propTypes = {
  createBook: PropTypes.func.isRequired,
};

// const form = connect(null, mapDispatchToProps)(Booksform);

export default connect(null, mapDispatchToProps)(Booksform);
