import styled from '@emotion/styled';

export const List = styled.ul`
  list-style: none;
  padding: 0px 240px;
`;

export const ListItem = styled.li`
  display: flex;
  justify-content: space-between;

  & svg {
    width: 27px;
    height: 27px;
    padding-right: 15px;
  }
  & div {
    display: flex;
    align-items: center;
  }
`;
