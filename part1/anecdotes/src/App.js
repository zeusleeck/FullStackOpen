import { useState } from 'react'

//Exercise 1.12
/*const Anecdotes = (props) => {
  let {anecdotes, selected} = props
  return(
    <p>
      {anecdotes[selected]}
    </p>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]
  
  const [selected, setSelected] = useState(0)

  const randomNumber = () => {
    let x = Math.floor(Math.random() * (6 - 0) + 0)
    if(x === randomNo){
      x += 1
    }
    setrandomNo(x)
    return randomNo
  }

  return (
    <div>
      <Anecdotes anecdotes={anecdotes} selected={selected}/>
      <p><button onClick={() =>  setSelected(randomNumber)}>next anecdote</button></p>
    </div>
  )
}*/

//Exercise 1.13
/*const Anecdotes = (props) => {
  let {anecdotes, selected, vote} = props
  return(
    <div>
      <p>{anecdotes[selected]} </p>
      <p>has {vote[selected]} vote</p>
    </div>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]

  const [selected, setSelected] = useState(0)
  const [randomNo, setrandomNo] = useState(0)
  const [vote, setVote] = useState(Array(7).fill(0))

  const randomNumber = () => {
    let x = Math.floor(Math.random() * (6 - 0) + 0)
    if(x === randomNo){
      x += 1 
    }
    setrandomNo(x)
    return randomNo
  }

  const handleVote = () => {
    const newAllVotes = structuredClone(vote)
    newAllVotes[selected] += 1
    setVote(newAllVotes)
    console.log(newAllVotes)
    //setAllpoints(current => [...current, {randomNo: }])    
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <Anecdotes anecdotes={anecdotes} selected={selected} vote={vote}/>
      <p>
        <button onClick={() => handleVote()}>vote</button>
        <button onClick={() => setSelected(randomNumber)}>next anecdote</button>
      </p>
    </div>
  )
}*/

//Exercise 1.14
const Anecdotes = (props) => {
  let {anecdotes, selected, vote} = props
  return(
    <div>
      <p>{anecdotes[selected]} </p>
      <p>has {vote[selected]} vote</p>
    </div>
  )
}

const MaxVoteAnecdotes = (props) => {
  let {anecdotes, vote} = props
  let maxVote = Math.max(...vote)
  let maxIndex = vote.indexOf(maxVote)
  return(
    <div>
      <p>{anecdotes[maxIndex]} </p>
    </div>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]

  const [selected, setSelected] = useState(0)
  const [randomNo, setrandomNo] = useState(0)
  const [vote, setVote] = useState(Array(7).fill(0))

  const randomNumber = () => {
    let x = Math.floor(Math.random() * (6 - 0) + 0)
    if(x === randomNo){
      x += 1 
    }
    setrandomNo(x)
    return randomNo
  }

  const handleVote = () => {
    const newAllVotes = structuredClone(vote)
    newAllVotes[selected] += 1
    setVote(newAllVotes)
    console.log(newAllVotes)
    //setAllpoints(current => [...current, {randomNo: }])    
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <Anecdotes anecdotes={anecdotes} selected={selected} vote={vote}/>
      <p>
        <button onClick={() => handleVote()}>vote</button>
        <button onClick={() => setSelected(randomNumber)}>next anecdote</button>
      </p>
      <h1>Anecdote with the most votes</h1>
      <MaxVoteAnecdotes anecdotes={anecdotes} vote={vote}/>
    </div>
  )
}

export default App

