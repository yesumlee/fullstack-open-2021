import React, { useState } from "react";

const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
);

const Statistic = (props) => {
  return (
    <tr>
      <td>{props.text}</td>
      <td>{props.number}</td>
    </tr>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0); // 갯수
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  // 평균 = (가격 * 갯수 + 가격 * 갯수 ...) / 총 갯수 (갯수 + 갯수 + 갯수)
  const setToGoodScore = () => {
    setGood(good + 1);
  };

  const setToNeutralScore = () => {
    setNeutral(neutral + 1);
  };

  const setToBadScore = () => {
    setBad(bad + 1);
  };

  const all = good + neutral + bad;

  return (
    <div>
      <h2>give feedback</h2>
      <Button handleClick={() => setToGoodScore()} text="good" />
      <Button handleClick={() => setToNeutralScore()} text="neutral" />
      <Button handleClick={() => setToBadScore()} text="bad" />
      <h2>Statistics</h2>
      {good === 0 && neutral === 0 && bad === 0 ? (
        <div>No feedback given</div>
      ) : (
        <>
          <Statistic number={good} text="good" />
          <Statistic number={neutral} text="neutral" />
          <Statistic number={bad} text="bad" />
          <Statistic number={all} text="all" />
          <Statistic
            number={(1 * good + 0 * neutral + -1 * bad) / all}
            text="average"
          />
          <Statistic number={(good / all) * 100} text="positive" />
        </>
      )}
    </div>
  );
};

export default App;
