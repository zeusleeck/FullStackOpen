const FilteredContact = (props) => {
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

export default FilteredContact