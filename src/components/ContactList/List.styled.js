import styled from '@emotion/styled';

export const List = styled.ul`
  text-align: left;
  list-style: ${props => `url(${props.icon})`};
  padding: 0px 200px;
`;

export const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
`;
