import React from 'react';
import PropTypes from 'prop-types';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

function Book({ book, onClick }) {
  const { idBook, title, category } = book;
  const url = '';
  return (
    <Col sm={12} className="itemBook">
      <Row>
        <Col>
          <h4 className="category">{category}</h4>
          <h1 className="MovieTitle">{title}</h1>
          <h5 className="Author">Sizenne Collins</h5>
          <ul className="OptionLinks">
            <li>
              <a href={url} className="Links">Comments</a>
            </li>
            <li>
              <a href={url} className="Links" onClick={() => onClick(idBook)}>Remove</a>
              <button type="button" onClick={() => onClick(idBook)}>Delete</button>
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

  );
}

Book.propTypes = {
  book: PropTypes.shape({
    idBook: PropTypes.number,
    title: PropTypes.string,
    category: PropTypes.string.isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Book;
