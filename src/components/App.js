import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import BooksForm from './BooksForm';
import BooksList from './BooksList';

function App() {
  return (
    <Container className="panel-main">
      <Row className="panel-bg">
        <Col sm={7} className="panel-title">
          <Row className="panel-title-row">
            <Col sm={6} className="Bookstore-CMS">BookStore CMS</Col>
            <Col sm={6}>
              <Row>
                <Col sm={3} className="BOOKS">Books</Col>
                <Col sm={3} className="BOOKS">Categories</Col>
              </Row>
            </Col>
          </Row>
        </Col>
        <Col sm={5} className="panel-title-icon">
          <Row className="panel-icon">
            <Col>
              <Image src="holder.js/171x180" roundedCircle />
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className="listBookStore">
        <Col sm={12} className="itemBook">
          <h4>Action</h4>
          <h1>The Hunger Games</h1>
          <h5>Sizenne Collins</h5>
        </Col>
        <Col sm={12} className="itemBook">
          <h4>Action</h4>
          <h1>The Hunger Games</h1>
          <h5>Sizenne Collins</h5>
        </Col>
      </Row>
    </Container>

  );
}

export default App;
