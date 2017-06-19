import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import Header from './components/header';
import QuizList from './components/quizList';
import CountriesOfTheWorld from './components/quiz/categories/geography/countriesOfTheWorldQuiz';
import CapitalsOfSouthAmerica from './components/quiz/categories/geography/capitalsOfSouthAmerica';
import Test from './components/quiz/categories/geography/test';
import Create from './components/create';

import './index.scss';


class App extends React.Component {

  render() {
    return (
      <Router history={hashHistory}>
        <Route path={'/'} component={Header} />
        <Route path={'/quizzes'} component={QuizList} />
        <Route path={'/countriesOfTheWorld'} component={CountriesOfTheWorld} />
        <Route path={'/capitalsOfSouthAmerica'} component={CapitalsOfSouthAmerica} />
        <Route path={'/test'} component={Test} />
        <Route path={'/create'} component={Create} />
      </Router>
    );
  }
}

ReactDOM.render(<App />,
    document.getElementById('content'));
