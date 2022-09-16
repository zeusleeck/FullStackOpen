const Course =({courses})=> {
    return(
      <div>
        <h1>Web development curriculum</h1>
        {courses.map(course =>
          <div key={course.id}>
            <Header course={course.name}/>
            <Content parts={course.parts}/>
          </div>
        )}
      </div>
    )
  }
  
  const Header = ({ course }) => 
    <h2>
      {course}
    </h2>
  
  const Parts = ({ parts }) => 
    parts.map(part =>
      <p key={part.id}>
        {part.name} {part.exercises}
      </p>
    )
  
  const Total = ({ parts }) => {
    const total = parts.reduce((s, p) => s + p.exercises, 0)
    return(
    <p>
      <b>Total of {total} exercises</b>
    </p>
    )
  }
  
  const Content = ({ parts }) => {
    return(  
      <div>
        <Parts parts={parts} />
        <Total parts={parts} />
      </div>
    )
  }

  export default Course