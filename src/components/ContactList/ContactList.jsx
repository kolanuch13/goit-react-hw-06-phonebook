import React from "react"
import PropTypes from 'prop-types';
import css from './ContactList.module.css';
// ========================================================================
import { getContacts, getFilteredContacts } from 'redux/selectors';
import { deleteContact } from "redux/contactSlice";
import { useDispatch, useSelector } from "react-redux";

const ContactList = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(getContacts);
    const filteredContacts = useSelector(getFilteredContacts);
    
    return (
      <ul className={css.contactList}>
        {contacts.map(contact => {
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


ContactList.propTypes = {
    list: PropTypes.array.isRequired,
    deleteContact: PropTypes.func.isRequired
}

export default ContactList;
