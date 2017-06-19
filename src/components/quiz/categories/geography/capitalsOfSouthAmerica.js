import React from 'react';
import Quiz from '../../index';
import QuizData from '../../../../data/capitalsOfSouthAmericaData';

export default class CapitalsOfSouthAmerica extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="main">
        <Quiz quizName="Capitals of South America" time="300" possibleAnswerTotal="12" quizData={QuizData} />
      </div>
    );
  }
}
