import React from 'react';
import { Link } from 'react-router';
import Header from '../header';

import './index.scss';

export default class QuizList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div>
        <Header />
        <h1> List of Quizzes </h1>
        <div>
          <Link to="countriesOfTheWorld"> Countries of the World </Link>
          <br />
          <Link to="capitalsOfSouthAmerica"> Capitals of South America </Link>
          <br />
          <Link to="test"> Test </Link>
        </div>
      </div>
    );
  }
}
