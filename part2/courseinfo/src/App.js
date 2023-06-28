const Course = ({ course }) => {
  console.log(course)
  return (
    <div>
      <Header name={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>

  )

}

const Header = ({ name }) => {
  console.log(name)
  return (
    <div>
      <h1>{name}</h1>
    </div>
  )
}

const Content = ({ parts }) => {
  console.log(parts)
  return (
    <div>
      { parts.map(part => <Part key={part.id} part={part} />) }
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

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
      {
        name: 'Redux',
        exercises: 11,
        id: 4
      }
    ]
  }

  return <Course course={course} />
}

export default App