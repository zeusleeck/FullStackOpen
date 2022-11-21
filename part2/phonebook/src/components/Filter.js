import personService from '../services/persons'

const Filter = (props) => {
   return(
    <div>
        <div>
            filter shown with <input value={props.filterName} onChange={props.filterByName}/>
        </div>
    </div>
   ) 
}

const FilteredContact = (props) => {
    const DeletePerson = (e, selectedPerson) => {
        e.preventDefault();
        if (window.confirm("Delete " + selectedPerson.name) === true) {
            personService
            .delete(selectedPerson.id)
            .then(response => {
                props.setSuccessMessage(`Information of '${selectedPerson.name}' has been removed from server`)
                console.log(response)
                props.setRefreshKey((oldkey) => oldkey + 1)
          }).catch(error => {
            props.setErrorMessage(
              `Information of '${selectedPerson.name}' was already removed from server`
            )}, props.setRefreshKey((oldkey) => oldkey + 1)
            )
        } else {
            alert("Operation has been canceled")
        }
      }
    return(
        <table>
            <tbody>
            {props.persons.filter(person => person.name.toLowerCase().includes(props.filterName.toLowerCase())).map((person) => 
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
    )
}

export {Filter, FilteredContact}