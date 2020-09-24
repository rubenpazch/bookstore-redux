import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import Button from 'react-bootstrap/Button';
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
            <Col className="itemMovieContainer">
              <Row className="MovieItem">
                <Col className="circleProgress">
                  <div className="progress blue">
                    <span className="progress-left">
                      <span className="progress-bar" />
                    </span>
                    <span className="progress-right">
                      <span className="progress-bar" />
                    </span>
                    <div className="progress-value" />
                  </div>
                </Col>
                <Col>
                  <Row className="MovieItemContent">
                    <Col className="PercentageNumber">
                      <h2>64%</h2>
                    </Col>
                    <Col className="MovieStatus">
                      <h5>Completed</h5>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
            <Col>
              <Row className="MovieInfo">
                <Col className="currentChapter">
                  <h4>Current Chapter</h4>
                </Col>
                <Col className="chapterNumber">
                  <h5>Chapter 17</h5>
                </Col>
                <Col>
                  <Button variant="primary" className="buttonUpdate">Update Progress</Button>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>

  );
}

export default App;
