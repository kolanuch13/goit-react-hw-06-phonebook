import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contactSlice';
import { getContacts } from 'redux/selectors';
import css from './ContactForm.module.css';

const ContactForm =  () => {
    const dispatch = useDispatch();
    const contacts = useSelector(getContacts);

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const require = contacts.filter(contact => contact.name.toLowerCase() === form.elements.name.value);
        if (
          require.length === 0 &&
          form.elements.name.value.trim('').length !== 0
        ) {
          dispatch(
            addContact(form.elements.name.value, form.elements.number.value)
          );
        } else {
          alert(`${form.elements.name.value} already is on contacts.`);
        }
        form.reset();
    }
    return <div>
        <form
            action=""
            onSubmit={handleSubmit}
            className={css.contactForm}
            id="myform"
        >
            <label className={css.contactLabel}>
                Name
                <input
                    className={css.contactInput}
                    type="text"
                    name="name"
                />
            </label>
            <div className={css.errorMessage}>
                {error?.name && <p>📛{error?.name?.message || "Error!"}</p>}
            </div>
            <label className={css.contactLabel}>
                Number
                <input
                    className={css.contactInput}
                    type="text"
                    name='number'
                />
            </label>
            <div className={css.errorMessage}>
                {error?.number && <p>📛{error?.number?.message || "Error!"}</p>}
            </div>
            <button type="submit" className={css.contactButton}>Add contact</button>
        </form>
    </div>  
}

export default ContactForm;
