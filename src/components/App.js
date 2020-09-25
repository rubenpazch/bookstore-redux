import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
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
            <div className="rounderIcon">
              <FontAwesomeIcon icon={faUser} />
            </div>
          </Row>
        </Col>
      </Row>
      <Row className="listBookStore">
        <BooksList />
      </Row>
    </Container>

  );
}

export default App;
