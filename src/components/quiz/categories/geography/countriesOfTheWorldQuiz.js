import React from 'react';
import Quiz from '../../index';
import QuizData from '../../../../data/countriesOfTheWorldData';

export default class CountriesOfTheWorld extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="main">
        <Quiz quizName="Countries Of The World" time="600" possibleAnswerTotal="10" quizData={QuizData} />
      </div>
    );
  }
}
