import { useState } from 'react'

const Button = ({ text, handleClick }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const StatisticLine = ({ text, value, text2 }) => (
  <tr>
    <td>{text}</td> 
    <td>{value} {text2}</td>
  </tr>
)

const Statistics = ({ good, bad, neutral, all, average, positive }) => {
  if (all === 0)
    return (
      <div>No feedback given</div>
    )
  return (
    <div>
      <table>
        <tbody>
          <StatisticLine text='good' value={good} />
          <StatisticLine text='neutral' value={neutral} />
          <StatisticLine text='bad' value={bad} />
          <StatisticLine text='all' value={all} />
          <StatisticLine text='average' value={average} />
          <StatisticLine text='positive' value={positive} text2='%' />
        </tbody>
      </table>
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [average, setAverage] = useState(0)
  const [positive, setPositive] = useState(0)

  const handleGoodClick = () => {
    const updatedGood = good + 1
    const updatedAll = updatedGood + neutral + bad
    const updatedAverage = (updatedGood - bad)/updatedAll
    const updatedPositive = (updatedGood/updatedAll)*100
    setPositive(updatedPositive)
    setGood(updatedGood)
    setAll(updatedAll)
    setAverage(updatedAverage)
    console.log({updatedGood})
  }

  const handleBadClick = () => {
    const updatedBad = bad + 1
    const updatedAll = good + neutral + updatedBad
    const updatedAverage = (good - updatedBad)/updatedAll
    const updatedPositive = (good/updatedAll)*100
    setPositive(updatedPositive)
    setBad(updatedBad)
    setAll(updatedAll)
    setAverage(updatedAverage)
    console.log({updatedBad})
  }

  const handleNeutralClick = () => {
    const updatedNeutral = neutral + 1
    const updatedAll = good + updatedNeutral + bad
    const updatedAverage = (good - bad)/updatedAll
    const updatedPositive = (good/updatedAll)*100
    setPositive(updatedPositive)
    setNeutral(updatedNeutral)
    setAll(updatedAll)
    setAverage(updatedAverage)
    console.log({updatedNeutral})
  }

  return (
    <div>
      <h2>give feedback</h2>

      <Button text='good' handleClick={handleGoodClick} />
      <Button text='neutral' handleClick={handleNeutralClick} />
      <Button text='bad' handleClick={handleBadClick} />

      <h2>statistics</h2>

      <Statistics good={good} bad={bad} neutral={neutral} all={all} average={average} positive={positive} />
    </div>
  )
}

export default App