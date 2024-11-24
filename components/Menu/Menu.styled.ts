import styled from 'styled-components';

export const MenuItem = styled.li`
  cursor: pointer;
  border-radius: 5px;
  display: inline-block;
  a {
    display: block;
    color: #33bccf;
    text-decoration: none;
    text-decoration: underline;
  }
  &:hover {
    opacity: 0.5;
  }
`;

export const MenuContainer = styled.div`
  text-align: right;

  ${MenuItem}:first-child {
    margin-right: 20px;
  }
`;