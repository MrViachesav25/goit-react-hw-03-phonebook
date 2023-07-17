import styled from '@emotion/styled';

export const ContainerForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  gap: 10px;
  width: 300px;

  & button:hover {
    background-color: greenyellow;
  }
`;

export const ContactLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-size: 14px;
  font-weight: 700;

`;

export const ContactInputForm = styled.input`
  font-size: 14px;
  padding: 8px;
  border-radius: 5px;
`;

export const input = styled.input`
  background-color: aqua;
`;

export const Button = styled.button`
  cursor: pointer;
  background-color: white;
  border-radius: 5px;
  border: 2px solid lightgray;
  padding: 10px;
  transition: background-color 250ms linear;
`;