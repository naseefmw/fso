import { useState } from 'react'

const Filter = ({ value, onChange }) => (
  <div>
    filter shown with <input value={value} onChange={onChange} />
  </div>
)

const PersonForm = ({ onSubmit, nameValue, nameHandler, numberValue, numberHandler }) => (
  <form onSubmit={onSubmit}>
    <div>
      name: <input value={nameValue} onChange={nameHandler} />
    </div>
    <div>
      number: <input value={numberValue} onChange={numberHandler} />
    </div>
    <div>
      <button
        type="submit">add
      </button>
    </div>
  </form>
)

const Person = ({ name, number }) => (
  <div>
    {name} {number}
  </div>
)

const Persons = ({ personList }) => (
  <div>
    {personList.map(person => (
      <Person key={person.name} name={person.name} number={person.number} />
    ))}
  </div>
)
const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')

  const addNumbers = (event) => {
    event.preventDefault()
    const nameObject = {
      name: newName,
      number: newNumber
    }

    const names = persons.map(person => person.name)

    if (names.includes(newName))
      alert(`${newName} is already added to phonebook`)
    else
      setPersons(persons.concat(nameObject))

    setNewName('')
    setNewNumber('')
  }
  const handleNewName = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }
  const handleNewNumber = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }
  const handleFilter = (event) => {
    console.log(event.target.value)
    setNewFilter(event.target.value)
    const personsFiltered = persons.filter(person => person.name.toLowerCase().includes(event.target.value))
    console.log(personsFiltered)
    setPersons(personsFiltered)

  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter value={newFilter} onChange={handleFilter} />
      <h3>Add a new</h3>
      <PersonForm onSubmit={addNumbers} nameValue={newName} nameHandler={handleNewName} numberValue={newNumber} numberHandler={handleNewNumber} />
      <h3>Numbers</h3>
      <Persons personList={persons} />
    </div>
  )
}

export default App