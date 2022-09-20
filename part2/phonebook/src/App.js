import { useState } from 'react'

const DisplayContacts = (props) => {
  if(props.filterName){
    return(
      <table>
        <tbody>
          {props.persons.filter(person => person.name.toLowerCase().includes(props.filterName.toLowerCase())).map((person) => 
            <tr key = {person.id}>
              <td>
                {person.name} {person.number}
              </td>
            </tr>
            )}
        </tbody>
      </table>
    )
  }
  else{
    console.log(props.persons)
    return(
      <table>
        <tbody>
          {props.persons.map((person) => 
                <tr key = {person.id}>
                  <td>
                    {person.name} {person.number}
                  </td>
                </tr>
                )}
        </tbody>
      </table>
    )
  }
}


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
  //const [filteredContact, setFilteredContact] = useState('')

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
      <form onSubmit={addperson}>
        <div>
          filter shown with <input value={filterName} onChange={filterByName}/>
        </div>

      <h2>Add a new</h2>
        <div>
          name: <input value={newName} onChange={handleNewName}/>
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNewNumber}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      
      <h2>Numbers</h2>
        <DisplayContacts filterName={filterName} persons={persons}/>
    </div>
  )
}

export default App
