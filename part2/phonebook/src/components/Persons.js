import {FilteredContact} from "./Filter"

const Persons = (props) => {
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
                  </tr>
                  )}
          </tbody>
        </table>
      )
    }
  }

  export default Persons