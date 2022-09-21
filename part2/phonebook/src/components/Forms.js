const ContactForm = (props) => {
    return(
        <div>
        <h2>Phonebook</h2>
        <form onSubmit={props.addperson}>
            <div>
            filter shown with <input value={props.filterName} onChange={props.filterByName}/>
            </div>

        <h2>Add a new</h2>
            <div>
            name: <input value={props.newName} onChange={props.handleNewName}/>
            </div>
            <div>
            number: <input value={props.newNumber} onChange={props.handleNewNumber}/>
            </div>
            <div>
            <button type="submit">add</button>
            </div>
        </form>
        </div>
    )
}

export default ContactForm