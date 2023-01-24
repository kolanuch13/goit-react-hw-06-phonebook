import React from "react"
import css from './ContactList.module.css';
// ========================================================================
import { getFilter, getContacts } from "redux/selectors";
import { deleteContact } from 'redux/contactSlice';
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

const ContactList = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(getContacts);
    const filter = useSelector(getFilter);
    const [filteredContacts, setFilteredContacts] = useState([]);
    
    useEffect(() => {
      setFilteredContacts(
        contacts.filter(contact =>
          contact.name.toLowerCase().includes(filter.toLowerCase())
        )
      );
    }, [filter, contacts]);

    return (
      <ul className={css.contactList}>
        {filteredContacts.map(contact => {
          const handleDelete = () => dispatch(deleteContact(contact.id));
          let markup = (
            <li key={contact.id} className={css.contactItem}>
              <span>
                {contact.name}: {contact.number}
              </span>
              <button
                type="button"
                onClick={handleDelete}
                id={contact.id}
                className={css.contactButton}
              >
                Delete
              </button>
            </li>
          );
          return markup;
        })}
      </ul>
    );
}

export default ContactList;
