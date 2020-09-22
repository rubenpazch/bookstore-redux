import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import BooksForm from './BooksForm';
import BooksList from './BooksList';

function App() {
  const url = '';
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
        <Col sm={12} className="itemBook">
          <Row>
            <Col>
              <h4 className="category">Action</h4>
              <h1 className="MovieTitle">The Hunger Games</h1>
              <h5 className="Author">Sizenne Collins</h5>
              <ul className="OptionLinks">
                <li>
                  <a href={url} className="Links">Comments</a>
                </li>
                <li>
                  <a href={url} className="Links">Remove</a>
                </li>
                <li>
                  <a href={url} className="Links">Edit</a>
                </li>
              </ul>
            </Col>
            <Col>
              <span>Completed</span>
            </Col>
            <Col>
              <p>Current Chapter</p>
            </Col>
          </Row>

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
