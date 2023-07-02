import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ])
  const [newName, setNewName] = useState('')

  const addNumbers = (event) => {
    event.preventDefault()
    const nameObject = {
      name: newName
    }
    let nameCheck = false
    for (const person of persons) {
      if (person.name === nameObject.name)
        nameCheck = true
    }

    if (nameCheck)
      alert(`${newName} is already added to phonebook`)
    else
      setPersons(persons.concat(nameObject))
    setNewName('')
  }
  const handleNewName = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addNumbers}>
        <div>
          name: <input value={newName} onChange={handleNewName} />
        </div>
        <div>
          <button
            type="submit">add
          </button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {persons.map(person => <div key={person.name}>{person.name}</div>)}
      </div>
    </div>
  )
}

export default App