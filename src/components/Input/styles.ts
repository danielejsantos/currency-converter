import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 168px;
  margin-right: 20px;
`;

export const Label = styled.label`
  font-weight: 600;
  color: #2E3742;
  margin-bottom: 10px;
`;

export const Input = styled.input`
  width: 100%;
  border: 1px solid #D7E0EB;
  box-sizing: border-box;
  border-radius: 4px;
  padding: 12px;
  outline: 0;
  font-size: 16px;
  box-shadow: 0px 8px 5px -2px rgba(0,0,0,0.2);
`;