import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)
  const [vote, setVote] = useState(Array(8).fill(0))
  const [max, setMax] = useState(0)

  const handleClick = () => {
    const index = Math.floor(Math.random() * 8)
    console.log('index', index)
    setSelected(index)
  }

  const handleVote = () => {
    const copy = [...vote]
    copy[selected] += 1
    setVote(copy)
    console.log(copy)
    const maxVotes = Math.max(...copy)
    const maxVoted = copy.indexOf(maxVotes)
    setMax(maxVoted)
    console.log('index of max', maxVoted)
  }

  return (
    <div>
      <h2>Anecdote of the day</h2>
      {anecdotes[selected]} <br />
      has {vote[selected]} votes
      <br />
      <button onClick={handleVote}>vote</button>
      <button onClick={handleClick}>next anecdotes</button>
      <h2>Anecdote with most votes</h2>
      {anecdotes[max]} <br />
      has {vote[max]} votes
    </div>
  )
}

export default App