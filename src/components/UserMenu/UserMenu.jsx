import { useSelector, useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/authOperations';
import { selectUserName } from 'redux/auth/authSelectors';
import { BiUserCircle } from 'react-icons/bi';

import { StyledLink, Menu, Text } from './UserMenu.styled';
import css from './UserMen.module.css';

export default function UserMenu() {
  const userName = useSelector(selectUserName);

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(logOut());
  };

  return (
    <div className={css.wrapper}>
      <Menu>
        <BiUserCircle className={css.icon} />
        <Text>
          Hello, <span className={css.name}>{userName}!</span>
        </Text>
      </Menu>
      <StyledLink onClick={handleClick}>Log out</StyledLink>
    </div>
  );
}
