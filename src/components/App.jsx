import ContactForm from "./ContactForm/ContactForm";
import Filter from "./Filter/Filter";
import ContactList from "./ContactList/ContactList";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { nanoid } from "nanoid";

const App = () => {
  const {
    register,
    formState: {errors},
    handleSubmit
  } = useForm();
  const [filter, setFilter] = useState("");
  const [contacts, setContacts] = useState(() => JSON.parse(window.localStorage.getItem('contacts')) || []);
  
  const onSubmit = (data) => {
    data.id = nanoid();
    const listForRequier = contacts.filter(contact => contact.name === data.name);
    if (!listForRequier.length) {
      setContacts(current => [...current, data]);
    } else {
      alert(`${data.name} already is on contacts.`)
    }
    document.getElementById('myform').reset()
  };

  const filteredContacts = contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()))
  
  const deleteContact = (evt) => {
    setContacts(current => current.filter(contact => contact.id !== evt.target.id))
  }

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  },[contacts])
                  
  
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        flexDirection: "column"
      }}
    >
    <h1>Phonebook</h1>
      <ContactForm
        onSubmit={handleSubmit(onSubmit)}
        register={register}
        error={errors}
      />

    <h2>Contacts</h2>
    <Filter
      value={filter}
      onChange={evt => {setFilter(evt.target.value)}}
    />
    <ContactList
      list={filteredContacts} 
      deleteContact={deleteContact}
    />
    </div>
  );
}

export default App;