import React from 'react';
import Quiz from '../../index';
import QuizData from '../../../../data/test';

export default class CapitalsOfSouthAmerica extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="main">
        <Quiz quizName="Test" time="60" possibleAnswerTotal="5" quizData={QuizData} />
      </div>
    );
  }
}
