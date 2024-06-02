
import './App.css'
import ContactForm from './components/ContactForm/ContactForm';
import SearchBox from './components/SearchBox/SearchBox';
import ContactList from './components/ContactList/ContactList';
import { useState } from 'react';


function App() {

  const contactData = [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ];

  const [contact, setContact] = useState(contactData);
  const addContact = (newContact) => {
    console.log(newContact);
    setContact((prevContact) => {
      return [...prevContact, newContact]
    })
  }

  const deleteContact = (id) => {
    setContact((prevContact) => {

      return prevContact.filter((contact) => contact.id !== id)
    })
  }



  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} />
      <SearchBox />
      <ContactList contact={contact} deleteContact={deleteContact} />
    </>
  )
}

export default App
