import { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import personService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')

  useEffect(() => {
    personService.getAll().then(initialPersons => {
      setPersons(initialPersons)
    })
  }, [])

  const addNumbers = (event) => {
    event.preventDefault()
    const nameObject = {
      name: newName,
      number: newNumber
    }
    const names = persons.map(person => person.name)
    if (names.includes(newName)) {
      if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
        const id = persons.filter(person => person.name === newName)[0].id
        personService.update(id, nameObject).then(returnedPerson => {
          setPersons(persons.map(person => person.id !== id ? person : returnedPerson))
          setNewName('')
          setNewNumber('')
        })
      }
    }
    else {
      personService.create(nameObject).then(returnedPerson => {
        setPersons(persons.concat(returnedPerson))
        setNewName('')
        setNewNumber('')
      })
    }
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
  const handleDelete = (id) => {
    const personDeleted = persons.filter(person => person.id === id)
    if (window.confirm(`Delete ${personDeleted[0].name} ?`)) {
      personService.remove(id)
      setPersons(persons.filter(person => person.id !== id))
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter value={newFilter} onChange={handleFilter} />
      <h3>Add a new</h3>
      <PersonForm onSubmit={addNumbers} nameValue={newName} nameHandler={handleNewName} numberValue={newNumber} numberHandler={handleNewNumber} />
      <h3>Numbers</h3>
      <Persons personList={persons} onClick={handleDelete} />
    </div>
  )
}

export default App