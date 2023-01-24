import { useDispatch } from 'react-redux';
import { addContact } from 'redux/contactSlice';
import css from './ContactForm.module.css';

const ContactForm =  ({ error }) => {
    const dispatch = useDispatch();

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        dispatch(
          addContact(
            form.elements.name.value,
            form.elements.number.value,
          )
        );
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
