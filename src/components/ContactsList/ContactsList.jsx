import { useDispatch, useSelector } from 'react-redux';

import { selectVisibleContacts } from 'redux/selectors';
import { deleteContact } from 'redux/contactsOperations';

import css from './ContactsList.module.css';

export default function ContactsList() {
  const visibleContacts = useSelector(selectVisibleContacts);
  const dispatch = useDispatch();

  return (
    <ol className={css.list}>
      {visibleContacts.length > 0 &&
        visibleContacts.map(contact => (
          <li className={css.item} key={contact.id}>
            <span className={css.text}>
              {contact.name}: {contact.phone}
            </span>
            <button
              className={css.btn}
              type="button"
              onClick={() => {
                return dispatch(deleteContact(contact.id));
              }}
            >
              Delete
            </button>
          </li>
        ))}
    </ol>
  );
}
