//Exercise 1.1
/*const Header = (props) => {
  return (
    <div>
        <h1>{props.course}</h1>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
        <p>{props.part1} {props.exercises1}</p>
        <p>{props.part2} {props.exercises2}</p>
        <p>{props.part3} {props.exercises3}</p>
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
        <p>{props.total}</p>
    </div>
  )
}
const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content part1={part1} exercises1= {exercises1} />
      <Content part2={part2} exercises2={exercises2}/>
      <Content part3={part3} exercises3={exercises3}/>
      <Total total={"Number of exercises " + (exercises1 + exercises2 + exercises3)} />
    </div>
  )
}*/

//Exercise 1.2
/*const Header = (props) => {
  return (
    <div>
        <h1>{props.course}</h1>
    </div>
  )
}

const Part1 = (props) => {
  return (
    <div>
        <p>{props.part1} {props.exercises1}</p>
    </div>
  )
}
const Part2 = (props) => {
  return (
    <div>
        <p>{props.part2} {props.exercises2}</p>
    </div>
  )
}

const Part3 = (props) => {
  return (
    <div>
        <p>{props.part3} {props.exercises3}</p>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
        <Part1 part1={props.part1} exercises1={props.exercises1}  />
        <Part2 part2={props.part2} exercises2={props.exercises2} />
        <Part3 part3={props.part3} exercises3={props.exercises3} />
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
        <p>Number of exercises {props.total}</p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
    <Header course={course} />
    <Content part1={part1} exercises1={exercises1} part2={part2} exercises2={exercises2} part3={part3} exercises3={exercises3}/>
    <Total total={exercises1 + exercises2 + exercises3}/>
    </div>
  )
}*/


// Exercise 1.3
/*const Header = (props) => {
  return (
    <div>
        <h1>{props.course}</h1>
    </div>
  )
}

const Part1 = (props) => {
  return (
    <div>
        <p>{props.part1} {props.exercises1}</p>
    </div>
  )
}
const Part2 = (props) => {
  return (
    <div>
        <p>{props.part2} {props.exercises2}</p>
    </div>
  )
}

const Part3 = (props) => {
  return (
    <div>
        <p>{props.part3} {props.exercises3}</p>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
        <Part1 part1={props.part1} exercises1={props.exercises1}  />
        <Part2 part2={props.part2} exercises2={props.exercises2} />
        <Part3 part3={props.part3} exercises3={props.exercises3} />
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
        <p>Number of exercises {props.total}</p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }
  return (
    <div>
    <Header course={course} />
    <Content part1={part1.name} exercises1={part1.exercises} part2={part2.name} exercises2={part2.exercises} part3={part3.name} exercises3={part3.exercises}/>
    <Total total={part1.exercises + part2.exercises + part3.exercises}/>
    </div>
  )
}*/


//Exercise 1.4
/*const Header = (props) => {
  return (
    <div>
        <h1>{props.course}</h1>
    </div>
  )
}

const Part1 = (props) => {
  return (
    <div>
        <p>{props.part1} {props.exercises1}</p>
    </div>
  )
}
const Part2 = (props) => {
  return (
    <div>
        <p>{props.part2} {props.exercises2}</p>
    </div>
  )
}

const Part3 = (props) => {
  return (
    <div>
        <p>{props.part3} {props.exercises3}</p>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
        <Part1 part1={props.parts[0].name} exercises1={props.parts[0].exercises} />
        <Part2 part2={props.parts[1].name} exercises2={props.parts[1].exercises} />
        <Part3 part3={props.parts[2].name} exercises3={props.parts[2].exercises} />
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
        <p>Number of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}</p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  )
}*/

//Exercise 1.5
const Header = (props) => {
  return (
    <div>
        <h1>{props.course}</h1>
    </div>
  )
}

const Part1 = (props) => {
  return (
    <div>
        <p>{props.part1} {props.exercises1}</p>
    </div>
  )
}
const Part2 = (props) => {
  return (
    <div>
        <p>{props.part2} {props.exercises2}</p>
    </div>
  )
}

const Part3 = (props) => {
  return (
    <div>
        <p>{props.part3} {props.exercises3}</p>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
        <Part1 part1={props.parts[0].name} exercises1={props.parts[0].exercises} />
        <Part2 part2={props.parts[1].name} exercises2={props.parts[1].exercises} />
        <Part3 part3={props.parts[2].name} exercises3={props.parts[2].exercises} />
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
        <p>Number of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}</p>
    </div>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts}/>
      <Total parts={course.parts}/>
    </div>
  )
}


export default App