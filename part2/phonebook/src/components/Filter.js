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
              console.log(response)
          }).then(
            window.location.reload()
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