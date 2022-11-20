import { useSelector, useDispatch } from 'react-redux';

import { RiFindReplaceLine } from 'react-icons/ri';

import { selectFilterValue } from 'redux/contacts/contactsSelectors';
import { setFilterValue } from 'redux/filterContacts/filterSlice';

import css from './FilterContacts.module.css';

export default function FilterContacts() {
  const filterValue = useSelector(selectFilterValue);
  const dispatch = useDispatch();

  const handleFilterChange = e => {
    const inputValue = e.currentTarget.value;

    dispatch(setFilterValue(inputValue));
  };

  return (
    <div className={css.box}>
      <div className={css.title}>
        <RiFindReplaceLine className={css.icon} />
        <h3 className={css.text}>Find contacts by name</h3>
      </div>

      <input
        className={css.field}
        type="text"
        value={filterValue}
        onChange={handleFilterChange}
        placeholder="Start typing a name"
      />
    </div>
  );
}
