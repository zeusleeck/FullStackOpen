import {FilteredContact} from "./Filter"
import personService from '../services/persons'

const Persons = (props) => {
  const DeletePerson = (e, selectedPerson) => {
    e.preventDefault();

    if (window.confirm("Delete " + selectedPerson.name) === true) {
        personService
        .delete(selectedPerson.id)
        .then(response => {
          props.setSuccessMessage(`Information of '${selectedPerson.name}' has been removed from server`)
          props.setRefreshKey((oldkey) => oldkey + 1)
        }).catch(error => {
          props.setErrorMessage(
            `Information of '${selectedPerson.name}' was already removed from server`
          )},props.setRefreshKey((oldkey) => oldkey + 1)
        )
    } else {
        alert("Operation has been canceled")
    }
  }

  if(props.filterName){
    return( 
      <FilteredContact persons={props.persons} filterName={props.filterName} setErrorMessage={props.setErrorMessage} setSuccessMessage={props.setSuccessMessage} setRefreshKey = {props.setRefreshKey}/>
    )
  }
  else{
    return(
      <table>
        <tbody>
          {props.persons.map((person) => 
                <tr key = {person.id}>
                  <td>
                    {person.name} {person.number}
                  </td>
                  <td>
                    <button onClick={(e) => {DeletePerson(e, person)}}>delete</button>
                  </td>
                </tr>
              )}
        </tbody>
      </table>
    )}
  }

  export default Persons