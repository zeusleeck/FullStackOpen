import { useState } from 'react'
import { Filter } from './components/Filter'
import PersonForm from './components/Form'
import Contacts from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterName, setFilterName] = useState('')

  const addperson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber,
      id: (persons.length) + 1
    }

    if (persons.filter(person => person.name === newName).length !== 0) {
      alert(newName + ' is already added to phonebook')
    }
    else{
      setPersons(persons.concat(personObject))
    }
  }

  const handleNewName = (event) => {
    event.preventDefault()
    setNewName(event.target.value)
  }

  const handleNewNumber = (event) => {
    event.preventDefault()
    setNewNumber(event.target.value)
  }

  const filterByName = (event) => {
    event.preventDefault()
    setFilterName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter addperson={addperson} filterName={filterName} filterByName={filterByName} />
      <h2>Add a new</h2>
      <PersonForm addperson={addperson} filterName = {filterName} filterByName = {filterByName} newName={newName} handleNewName = {handleNewName} newNumber={newNumber} handleNewNumber={handleNewNumber}/>
      <h2>Numbers</h2>
      <Contacts filterName={filterName} persons={persons}/>
    </div>
  )
}

export default App
