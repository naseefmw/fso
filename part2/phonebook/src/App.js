import { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Person'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')

  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
  }, [])

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