import { useState , useEffect} from 'react'
import { Filter } from './components/Filter'
import PersonForm from './components/Form'
import Contacts from './components/Persons'
import personService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterName, setFilterName] = useState('')

  useEffect(() => {
    personService
      .getAll()
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
  }, [])
  
  const addperson = (event) => {
    //event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber,
      id: newName.replace(/\s/g, '').toLowerCase() 
    }

    let newperson = persons.filter(person => person.name === newName)
    if (newperson.length > 0) {
      if(window.confirm(newName + ' is already added to phonebook, replace the old numnber with the new one?') === true){
          personService
            .update(newperson[0]?.id, personObject)
            .then(response => {
              console.log(response)
              alert("Person has been updated")
          })
      }
      else{
        alert("Operation has been canceled")
      }
    }

    else{
      //setPersons(persons.concat(personObject))
      console.log(personObject)
      personService
        .create(personObject)
        .then(response => {
          console.log(response)
      })
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
