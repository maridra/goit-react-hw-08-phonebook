import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { fetchContacts } from 'redux/contacts/contactsOperations';
import { SubmitContact, FilterContacts, ContactsList } from 'components';

import css from './ContactsPage.module.css';

export default function ContactsPages() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.box}>
      <SubmitContact />
      <div className={css.contacts}>
        <FilterContacts />
        <ContactsList />
      </div>
    </div>
  );
}
