const Course = ({ courses }) => {
    console.log(courses)
    return (
      <div>
        <h2>Web development curriculum</h2>
        {courses.map(course => 
            <div key={course.id}>
              <Header name={course.name} />
              <Content parts={course.parts} />
              <Total parts={course.parts} />
            </div>
        )}
      </div>
    )
  }
  
const Header = ({ name }) => {
    console.log(name)
    return (
      <div>
        <h3>{name}</h3>
      </div>
    )
  }
  
const Content = ({ parts }) => {
    console.log(parts)
    return (
      <div>
        {parts.map(part => <Part key={part.id} part={part} />)}
      </div>
    )
  }
  
const Part = ({ part }) => {
    console.log(part)
    return (
      <div>
        <p>
          {part.name} {part.exercises}
        </p>
      </div>
    )
  }
  
const Total = ({ parts }) => {
    console.log(parts)
    const total = parts.reduce((x, y) => (x + y.exercises), 0)
    console.log(total)
    return (
      <div>
        <h4>total of {total} exercises</h4>
      </div>
    )
  }

export default Course