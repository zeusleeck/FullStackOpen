import { useState , useEffect} from 'react'
import { Filter } from './components/Filter'
import PersonForm from './components/Form'
import Persons from './components/Persons'
import personService from './services/persons'
import DisplayNotification from './components/Notification'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [refreshKey, setRefreshKey] = useState(0)
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterName, setFilterName] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [successMessage, setSuccessMessage] = useState('')

  useEffect(() => {
    personService
      .getAll()
      .then(response => {
        console.log('Get all persons')
        setPersons(response.data)
    })
  }, [refreshKey])


  const addperson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber,
      id: newName.replace(/\s/g, '').toLowerCase() 
    }

    let newperson = persons.filter(person => person.name === newName)
    if (newperson.length > 0) {
      if(window.confirm(newName + ' is already added to phonebook, replace the old number with the new one?') === true){
          personService
            .update(newperson[0]?.id, personObject)
            .then(response => {
              console.log(response)
              setSuccessMessage(`'${newName}' has been updated`)
              setRefreshKey((oldkey) => oldkey + 1)
          }
        )
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
          setSuccessMessage(`Added '${newName}'`)
          setRefreshKey((oldkey) => oldkey + 1)
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
      <DisplayNotification errorMessage={errorMessage} successMessage={successMessage}/>
      <Filter addperson={addperson} filterName={filterName} filterByName={filterByName} errorMessage={errorMessage} successMessage={successMessage} setRefreshKey = {setRefreshKey} />
      <h2>Add a new</h2>
      <PersonForm addperson={addperson} filterName = {filterName} filterByName = {filterByName} newName={newName} 
      handleNewName = {handleNewName} newNumber={newNumber} handleNewNumber={handleNewNumber}/>
      <h2>Numbers</h2>
      <Persons filterName={filterName} persons={persons} setErrorMessage={setErrorMessage} setSuccessMessage={setSuccessMessage} setRefreshKey = {setRefreshKey}/>
    </div>
  )
}

export default App
