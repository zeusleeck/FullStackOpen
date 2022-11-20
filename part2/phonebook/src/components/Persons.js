import {FilteredContact} from "./Filter"
import personService from '../services/persons'

const Persons = (props) => {
  const DeletePerson = (e, selectedPerson) => {
    e.preventDefault();

    if (window.confirm("Delete " + selectedPerson.name) === true) {
        personService
        .delete(selectedPerson.id)
        .then(response => {
          console.log(response)
      }).then(
        window.location.reload()
      )
    } else {
        alert("Operation has been canceled")
    }
  }

  if(props.filterName){
    return( 
      <FilteredContact persons={props.persons} filterName={props.filterName}/>
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