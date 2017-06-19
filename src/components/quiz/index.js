import React from 'react';
import Header from '../header';

import './index.scss';

export default class Quiz extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      time: {},
      seconds: this.props.time,
      correctAnswers: this.props.quizData,
      correctlyEnteredAnswers: [],
      disabled: true,
      enteredValue: '',
      possibleAnswerTotal: this.props.possibleAnswerTotal,
      score: 0,
      youWon: false,
      youLost: false
    };
    this.timer = 0;
    this.clearInputBox = this.clearInputBox.bind(this);
    this.handleEnteredValue = this.handleEnteredValue.bind(this);
    this.onEnter = this.onEnter.bind(this);
    this.countScore = this.countScore.bind(this);
    this.startTimer = this.startTimer.bind(this);
    this.countDown = this.countDown.bind(this);
    this.startQuiz = this.startQuiz.bind(this);
  }

  countScore(enteredValue) {
    let index;
    let submittedValue;
    submittedValue = enteredValue.toLowerCase();
    if (this.state.correctAnswers.includes(submittedValue)) {
      this.setState({ score: this.state.score += 1 });
      index = this.state.correctAnswers.indexOf(submittedValue);
      this.state.correctAnswers.splice(index, 1);
      this.changeBackgroundColorCorrectAnswer();
      if (this.state.score != 0 && this.state.score == this.state.possibleAnswerTotal) {
        this.quizCompleted();
      }
    } else {
      this.changeBackgroundColorInCorrectAnswer();
    }
  }

  secondsToTime(secs) {
    const hours = Math.floor(secs / (60 * 60));

    const divisorForMinutes = secs % (60 * 60);
    const minutes = Math.floor(divisorForMinutes / 60);

    const divisorForSeconds = divisorForMinutes % 60;
    const seconds = Math.ceil(divisorForSeconds);

    const obj = {
      h: hours,
      m: minutes,
      s: seconds,
    };
    return obj;
  }

  componentDidMount() {
    const timeLeft = this.secondsToTime(this.state.seconds);
    this.setState({ time: timeLeft });
  }

  startTimer() {
    if (this.timer === 0) {
      this.timer = setInterval(this.countDown, 1000);
    }
  }

  countDown() {
    const seconds = this.state.seconds - 1;
    this.setState({
      time: this.secondsToTime(seconds),
      seconds,
    });

    if (seconds === 0) {
      clearInterval(this.timer);
      this.outOfTime();
    }
  }

  quizEnded() {
    this.setState({ disabled: true });
  }

  outOfTime() {
    this.setState({ disabled: true });
    this.setState({ youLost: true })
  }

  onEnter(e) {
    if (e.key === 'Enter') {
      this.countScore(this.state.enteredValue);
      this.clearInputBox();
    }
  }

  clearInputBox() {
    this.refs.textBox.value = '';
  }

  startQuiz() {
    this.setState({ disabled: false });
    this.changeBackgroundColorCorrectAnswer();
    this.startTimer();
  }

  quizCompleted() {
    console.log('here');
    this.quizEnded();
    this.setState({ youWon: true });
    clearTimeout(this.countDown());
  }

  handleEnteredValue(event) {
    this.setState({ enteredValue: event.target.value });
  }

  changeBackgroundColorCorrectAnswer() {
    const input = document.getElementById('inputBox');
    input.classList.add('correct');
    window.setTimeout(() => {
      input.classList.remove('correct');
    }, 100);
  }

  changeBackgroundColorInCorrectAnswer() {
    const input = document.getElementById('inputBox');
    input.classList.add('incorrect');
    window.setTimeout(() => {
      input.classList.remove('incorrect');
    }, 100);
  }

  render() {
    return (
      <div>
          <Header />
           <div className="content" >
            <div className="quizContainer">
              <div>
                <h1>{this.props.quizName}</h1>
              </div>
              <div>
                <p>{`Enter as many ${this.props.quizName} in ${this.props.time / 60} minutes`}</p>
              </div>
            <div className="inputAndStart">
              {this.state.youWon
              ?
              <div className="winning">
                You won!
              </div>
              :
              <div>
                <input id="inputBox" type="text" ref="textBox" onKeyPress={this.onEnter} onChange={this.handleEnteredValue} disabled={this.state.disabled} />
              </div>
              }
            </div>
            <div>
              <button className="startQuizBtn" onClick={this.startQuiz}>Start Quiz!</button>
            </div>
            </div>
            <div className="timeAndScore">
              <div>
                Time Left: {this.state.time.m} : {this.state.time.s}
              </div>
              <div>
                Score: {this.state.score} / {this.props.possibleAnswerTotal}
              </div>
          </div>
        </div>
      </div>
    );
  }
}
