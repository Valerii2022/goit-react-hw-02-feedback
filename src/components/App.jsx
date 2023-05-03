import React, { Component } from 'react';
import Statistics from './Statistics';
import Section from './Section';
import FeedbackOptions from './FeedbackOptions';

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
        
          <Section title="Please leave feedback">
             <FeedbackOptions onLeaveFeedback={this.handleIncrement}/>
        {/* <button id="good" onClick={this.handleIncrement}>
          Good
        </button>
        <button id="neutral" onClick={this.handleIncrement}>
          Neutral
        </button>
        <button id="bad" onClick={this.handleIncrement}>
          Bad
          </button> */}
        </Section>
        <Section title="Statistics">
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback()}
            percentage={this.countPositiveFeedbackPercentage()}
          />
        </Section>
      </div>
    );
  }
}

export default App;


