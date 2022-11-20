import { useDispatch, useSelector } from 'react-redux';

import { MdDeleteForever } from 'react-icons/md';
import { BsListNested } from 'react-icons/bs';

import { selectVisibleContacts } from 'redux/contacts/contactsSelectors';
import { deleteContact } from 'redux/contacts/contactsOperations';

import css from './ContactsList.module.css';

export default function ContactsList() {
  const visibleContacts = useSelector(selectVisibleContacts);
  const dispatch = useDispatch();

  return (
    <div className={css.box}>
      <div className={css.title}>
        <BsListNested className={css.icon__title} />
        <h3 className={css.subtitle}>Your contacts</h3>
      </div>
      <ul className={css.list}>
        {visibleContacts.length > 0 &&
          visibleContacts.map(contact => (
            <li className={css.item} key={contact.id}>
              <span className={css.text}>
                {contact.name}: {contact.number}
              </span>
              <button
                className={css.btn}
                type="button"
                onClick={() => {
                  return dispatch(deleteContact(contact.id));
                }}
              >
                <MdDeleteForever className={css.icon} />
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
}
