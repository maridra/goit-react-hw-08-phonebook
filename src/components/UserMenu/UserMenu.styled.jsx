import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(Link)`
  padding: 10px;

  font-weight: bold;
  text-align: center;
  line-height: 1.3;
  letter-spacing: 0.2rem;
  text-decoration: none;
  text-transform: uppercase;

  color: white;
  border-radius: 5px;
  transition-duration: 500ms;

  &:hover {
    box-shadow: #ff2a00 1px 0 10px;
    transform: scale(1.1);
  }
`;

export const Menu = styled.div`
  display: flex;
  gap: 5px;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.h2`
  font-size: 14px;
  line-height: 1.3;
  letter-spacing: 0.2rem;
  text-decoration: none;
  color: white;
  margin: 0;
`;
