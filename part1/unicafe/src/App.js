import { useState } from 'react'

// exercise 1.6
/*const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <div>
        <h1>give feedback</h1>
        <button onClick={() => setGood(good+1)}>good</button>
        <button onClick={() => setNeutral(neutral+1)}>neutral</button>
        <button onClick={() => setBad(bad+1)}>bad</button>
      </div>
      <div>
      <h1>statistics</h1>
        <p>good {good}</p>
        <p>neutral {neutral}</p>
        <p>bad {bad}</p>
      </div>
    </div>
  )
}*/

//exercise 1.7

/*const Average = (props) => {
  const{all, good, bad} = props
  let average = (good - bad) / all
  return (
    <p>average {average}</p>
  )
}

const Positive = (props) => {
  const{all, good} = props
  let positive = (good / all) * 100
  return (
    <p>positive {positive} %</p>
  )
}

// exercise 1.6
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const all = good + neutral + bad;
  return (
    <div>
      <div>
        <h1>give feedback</h1>
        <button onClick={() => setGood(good+1)}>good</button>
        <button onClick={() => setNeutral(neutral+1)}>neutral</button>
        <button onClick={() => setBad(bad+1)}>bad</button>
      </div>
      <div>
      <h1>statistics</h1>
        <p>good {good}</p>
        <p>neutral {neutral}</p>
        <p>bad {bad}</p>
        <p>all {all}</p>
        <Average all = {all} good = {good} bad={bad} neutral={neutral} />
        <Positive all = {all} good = {good} bad={bad} neutral={neutral}/>
      </div>
    </div>
  )
}*/

//exercise 1.7
/*const Average = (props) => {
  const{all, good, bad} = props
  let average = (good - bad) / all
  return (
    <p>average {average}</p>
  )
}

const Positive = (props) => {
  const{all, good} = props
  let positive = (good / all) * 100
  return (
    <p>positive {positive} %</p>
  )
}
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const all = good + neutral + bad;
  return (
    <div>
      <div>
        <h1>give feedback</h1>
        <button onClick={() => setGood(good+1)}>good</button>
        <button onClick={() => setNeutral(neutral+1)}>neutral</button>
        <button onClick={() => setBad(bad+1)}>bad</button>
      </div>
      <div>
      <h1>statistics</h1>
        <p>good {good}</p>
        <p>neutral {neutral}</p>
        <p>bad {bad}</p>
        <p>all {all}</p>
        <Average all = {all} good = {good} bad={bad} neutral={neutral} />
        <Positive all = {all} good = {good} bad={bad} neutral={neutral}/>
      </div>
    </div>
  )
}*/

//exercise 1.8
/*const Statistics = (props) => {
  let {good,neutral,bad,all} = props
  return(
    <div>
    <h1>statistics</h1>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {all}</p>
      <Average all = {all} good = {good} bad={bad} neutral={neutral} />
      <Positive all = {all} good = {good} bad={bad} neutral={neutral}/>
    </div>
  )
} 

const Average = (props) => {
  const{all, good, bad} = props
  let average = (good - bad) / all
  return (
    <p>average {average}</p>
  )
}

const Positive = (props) => {
  const{all, good} = props
  let positive = (good / all) * 100
  return (
    <p>positive {positive} %</p>
  )
}
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const all = good + neutral + bad;
  return (
    <div>
      <div>
        <h1>give feedback</h1>
        <button onClick={() => setGood(good+1)}>good</button>
        <button onClick={() => setNeutral(neutral+1)}>neutral</button>
        <button onClick={() => setBad(bad+1)}>bad</button>
      </div>
      <Statistics good={good} neutral={neutral} bad={bad} all={all} />      
    </div>
  )
}*/

//exercise 1.9
const Statistics = (props) => {
  let {good,neutral,bad,all} = props
  if (good, neutral, bad, all){
    return(
      <div>
        <p>good {good}</p>
        <p>neutral {neutral}</p>
        <p>bad {bad}</p>
        <p>all {all}</p>
        <Average all = {all} good = {good} bad={bad} neutral={neutral} />
        <Positive all = {all} good = {good} bad={bad} neutral={neutral}/>
      </div>
    )
  }
  return(
    <div>
      <p>No feedback given</p>
    </div>
  )
}

const Average = (props) => {
  const{all, good, bad} = props
  let average = (good - bad) / all
  return (
    <p>average {average}</p>
  )
}

const Positive = (props) => {
  const{all, good} = props
  let positive = (good / all) * 100
  return (
    <p>positive {positive} %</p>
  )
}
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [clicks, setClicks] = useState([])

  const all = good + neutral + bad;

  return (
    <div>
      <div>
        <h1>give feedback</h1>
        <button onClick={() => setGood(good+1)}>good</button>
        <button onClick={() => setNeutral(neutral+1)}>neutral</button>
        <button onClick={() => setBad(bad+1)}>bad</button>
      </div>
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} all={all} />
    </div>
  )
}

export default App