import React from 'react';
import { Link } from 'react-router';
import './index.scss';

export default class Header extends React.Component {

  render() {
    return (
      <div className="container">
        <ul>
          <div className="links">
            <li><Link to="quizzes">Quizzes</Link></li>
          </div>
          <div className="links">
            <li><Link to="categories">Categories</Link></li>
          </div>
          <div className="links">
            <li><Link to="create">Create</Link></li>
          </div>
        </ul>
      </div>
    );
  }
}
