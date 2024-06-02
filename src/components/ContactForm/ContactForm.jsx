const ContactForm = ({ addContact }) => {

    const handleSubmit = (event) => {
        event.preventDefault();
        addContact({
            id: Date.now(),
            name: event.target.elements.name.value,
            number: event.target.elements.number.value
        })
        event.target.reset()
    }

    return <>
       <form action="" onSubmit={handleSubmit}> 
        <label htmlFor="">Name</label><br />
        <input type="text" name="name"/><br />
        <label htmlFor="">Number</label><br />
        <input type="text" name="number"/><br />
            <button>Add contact</button>
            </form>
    </>
}

export default ContactForm;