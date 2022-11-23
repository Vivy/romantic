import styled from 'styled-components';

export const Nav = styled.li`
  background-color: ${({ theme }) => theme.firstColor};
  padding: 1rem;
  border-radius: 20px;
  & a{
    color: ${({ theme }) => theme.secondColor};
    text-decoration:none;
  }
`
