import React, { Component } from 'react';
import Statistics from './Statistics';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncrement = event => {
    this.setState(prevState => ({
      [event.target.id]: prevState[event.target.id] + 1,
    }));
  };

  countTotalFeedback = () => {
    const totalFeedback = this.state.good + this.state.neutral + this.state.bad;
    return totalFeedback;
  };

  countPositiveFeedbackPercentage = () => {
    const positiveFeedbackPercentage = Math.round(
      (this.state.good * 100) /
        (this.state.good + this.state.neutral + this.state.bad)
    );
    return positiveFeedbackPercentage;
  };

  render() {
    return (
      <div>
        <h1>Please leave feedback</h1>
        <button id="good" onClick={this.handleIncrement}>
          Good
        </button>
        <button id="neutral" onClick={this.handleIncrement}>
          Neutral
        </button>
        <button id="bad" onClick={this.handleIncrement}>
          Bad
        </button>
        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.countTotalFeedback()}
          percentage={this.countPositiveFeedbackPercentage()}
        />
      </div>
    );
  }
}

export default App;

// -------------------------------------------statistics
// {
/* <h2>Statistics</h2>
        <p>Good: {this.state.good}</p>
        <p>Neutral: {this.state.neutral}</p>
        <p>Bad: {this.state.bad}</p>
        <p>Total: {this.countTotalFeedback()}</p>

        {this.countTotalFeedback() > 0 && (
          <p>Positive feedback: {this.countPositiveFeedbackPercentage()}%</p>
        )} */
// }
