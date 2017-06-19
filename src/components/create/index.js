import React from 'react';
import Header from '../header';
import './index.scss';

export default class Create extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      quizAnswers: [],
      enteredValue: '',
      preview: false,
      quizName: '',
      quizLength: '',
      quizCategory: '',
      displaySubmitQuizBtn: true,
    };
    this.addAnswer = this.addAnswer.bind(this);
    this.handleEnteredValue = this.handleEnteredValue.bind(this);
    this.handleQuizName = this.handleQuizName.bind(this);
    this.handleQuizLength = this.handleQuizLength.bind(this);
    this.handleQuizCategory = this.handleQuizCategory.bind(this);
  }

  addAnswer(correctAnswer) {
    const answers = this.state.quizAnswers;
    answers.push(correctAnswer);
  }

  handleQuizName(e) {
    this.setState({ quizName: e.target.value });
  }

  handleQuizLength(e) {
    this.setState({ quizLength: e.target.value });
  }

  handleQuizCategory(e) {
    this.setState({ quizCategory: e.target.value });
  }

  handleEnteredValue(e) {
    this.setState({ enteredValue: e.target.value });
  }

  previewQuiz() {
    this.setState({ preview: true });
  }

  submitQuiz() {
    this.setState({ displaySubmitQuizBtn: false });
  }

  render() {
    return (
      <div>
        <Header />
        Create A Quiz!
        <div>
          <form>
            Quiz Name <input type="text" onChange={this.handleQuizName} /><br />
            Time Length <input type="text" onChange={this.handleQuizLength} /><br />
            Category <input type="text" onChange={this.handleQuizCategory} /><br />
          </form>
          Correct Answers <input type="text" onChange={this.handleEnteredValue} /> <button onClick={() => this.addAnswer(this.state.enteredValue)} >Add Answer</button><br />
          <p> Click Add Answer every time to submit an answer </p>
          <button onClick={() => this.previewQuiz()}>Preview Quiz!</button>
        </div>
        {this.state.preview
            ?
              <div className="preview">
                <div className="previewContent">
                  <h4> Quiz Preview </h4>
                  <p> <span className="previewHeadings"> Quiz Name: </span> {this.state.quizName} </p>
                  <p> <span className="previewHeadings"> Quiz Length: </span> {this.state.quizLength} minutes </p>
                  <p> <span className="previewHeadings"> Quiz Category: </span> {this.state.quizCategory} </p>
                  <p> <span className="previewHeadings"> Quiz Correct Answers: </span> {this.state.quizAnswers.map((num, index) => <span key={index}> {num} </span>, this)
                    }
                  </p>
                  {this.state.displaySubmitQuizBtn
                    ?
                      <div className="submitQuizBtn">
                        <button onClick={() => this.submitQuiz()}> Submit Quiz! </button>
                      </div>
                    :
                      <div className="submitQuizBtn">
                        <span> Quiz successfully submitted! </span>
                      </div>
                  }
                </div>
              </div>
            :
            null
          }
      </div>
    );
  }
}
