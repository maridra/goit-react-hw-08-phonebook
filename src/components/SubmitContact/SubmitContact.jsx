import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { BsInputCursorText } from 'react-icons/bs';

import { addContact } from 'redux/contacts/contactsOperations';
import { selectContacts } from 'redux/contacts/contactsSelectors';

import { findEvenName } from 'utils/findEvenName';

import css from './SubmitContact.module.css';

export default function SubmitContact() {
  const dispatch = useDispatch();
  const contactsData = useSelector(selectContacts);

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleInputChange = e => {
    const { name, value } = e.currentTarget;

    if (name === 'name') {
      setName(value);
    }
    if (name === 'number') {
      setNumber(value);
    }
  };

  const handleFormSubmit = e => {
    e.preventDefault();

    const checkName = findEvenName(contactsData, name);
    if (!!checkName === true) {
      resetForm();
      return;
    }

    dispatch(addContact({ name, number }));
    resetForm();
  };

  const resetForm = () => {
    setName('');
    setNumber('');
  };

  return (
    <div className={css.box}>
      <div className={css.title}>
        <BsInputCursorText className={css.icon} />
        <h3 className={css.text}>Enter contact details</h3>
      </div>

      <form className={css.form} onSubmit={handleFormSubmit}>
        <input
          className={css.field}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          value={name}
          onChange={handleInputChange}
          required
          placeholder="Name"
        />

        <input
          className={css.field}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          value={number}
          onChange={handleInputChange}
          required
          placeholder="Phone number"
        />

        <button className={css.btn} type="submit">
          Add contact
        </button>
      </form>
    </div>
  );
}
