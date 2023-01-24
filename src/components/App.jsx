import ContactForm from "./ContactForm/ContactForm";
import Filter from "./Filter/Filter";
import ContactList from "./ContactList/ContactList";

const App = () => {
  
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
    <ContactForm/>

    <h2>Contacts</h2>
    <Filter/>
    <ContactList/>
    </div>
  );
}

export default App;