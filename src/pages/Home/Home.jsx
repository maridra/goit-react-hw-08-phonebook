// import AppBar from '@mui/material/AppBar';
// import Container from '@mui/material/Container';
import { RiContactsBookFill } from 'react-icons/ri';
// RiContactsBookFill

import css from './Home.module.css';
export default function StartPage() {
  return (
    <div className={css.container}>
      <RiContactsBookFill className={css.icon} />
      <h1 className={css.title}>
        <span className={css.text_upper}>Store</span> all your contacts
      </h1>
    </div>
  );
}
