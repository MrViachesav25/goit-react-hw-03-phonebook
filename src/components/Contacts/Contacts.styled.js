import styled from '@emotion/styled';

export const ContactItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 8px;
  border: 2px solid white;

   & button:hover {
    background-color: greenyellow;
  }

  & + li {
    margin-top: 12px;
  }

`;

export const ContactName = styled.p`
  margin: 0;
  font-weight: 500;
  padding-left: 5px;
`;

export const ContactNumber = styled.span`
  margin-left: 10px;
`;

export const Button = styled.button`
  background-color: white;
  border-radius: 8px;
  border: 3px solid lightgray;
  padding: 10px;
  cursor: pointer;
  transition: background-color 250ms linear;
`;