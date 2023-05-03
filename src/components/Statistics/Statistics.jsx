import React from 'react';

const Statistics = ({ good, neutral, bad, total, percentage }) => {
  return (
    <>
      <h2>Statistics</h2>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      {total > 0 && <p>Positive feedback: {percentage}%</p>}
    </>
  );
};

export default Statistics;
