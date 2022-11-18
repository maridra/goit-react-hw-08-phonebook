import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ContactsList, Form, Filter, Loader } from 'components';
import { fetchContacts } from 'redux/contactsOperations';
import { selectIsLoading, selectError } from 'redux/selectors';

import css from './App.module.css';

export default function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <Form />
      <h2>Contacts</h2>
      <Filter />
      {isLoading && !error && <Loader />}
      {!isLoading && !error && <ContactsList />}
    </div>
  );
}
