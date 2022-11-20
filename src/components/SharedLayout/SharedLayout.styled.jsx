import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const AppBar = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding-left: 30px;
  padding-right: 30px;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 70px;

  padding: 20px 45px;
`;

export const StyledLink = styled(NavLink)`
  padding: 10px;

  font-weight: bold;
  text-align: center;
  line-height: 1.3;
  letter-spacing: 0.2rem;
  text-decoration: none;
  text-transform: uppercase;

  color: white;
  border-bottom: 1px solid white;
  border-radius: 5px;
  transition-duration: 500ms;

  &:hover {
    box-shadow: #fc0 1px 0 10px;
    transform: scale(1.1);
  }

  &.active {
    color: white;
    border: 1px solid white;
    box-shadow: 1px 1px 5px 1px rgba(247, 244, 244, 0.602);
  }
`;
