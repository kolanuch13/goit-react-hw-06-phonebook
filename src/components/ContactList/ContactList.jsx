import React from "react"
import css from './ContactList.module.css';
// ========================================================================
import { getFilter, getFilteredContact } from 'redux/selectors';
import { deleteContact, setFilteredContacts } from 'redux/contactSlice';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const ContactList = () => {
    const dispatch = useDispatch();
    const filter = useSelector(getFilter);
    const filteredContacts = useSelector(getFilteredContact)
    
    useEffect(() => {
      dispatch(setFilteredContacts(filter));
    }, [filter, dispatch]);

    console.log();
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
