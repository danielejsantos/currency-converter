import styled from "styled-components";

interface RadioProps {
  isChecked: boolean;
}

interface ButtonProps {
  isButtonDisabled: boolean;
}

export const Container = styled.div`
  width: 100%;
  display: flex;
  margin-left: 30px;

  form {
    display: flex;
    flex-direction: column;
  }

  span {
    font-weight: 600;
    color: #2e3742;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  margin-bottom: 30px;
  margin-top: 10px;
`;

export const RadioItem = styled.div<RadioProps>`
  display: flex;
  align-items: center;
  margin-right: 10px;

  input {
    display: none;
  }

  label {
    color: #2e3742;
    cursor: pointer;
  }

  label:before {
    content: " ";
    display: inline-block;
    width: 20px;
    height: 20px;
    margin-right: 10px;
    border-radius: 50%;
    border: 2px solid #008b57;
    background-color: ${({ isChecked }) => (isChecked ? "#008b57" : "#fff")};
    cursor: pointer;
  }
`;

export const ConvertButton = styled.button<ButtonProps>`
  width: 150px;
  background-color: ${({ isButtonDisabled }) =>
    isButtonDisabled ? "#8C9CAD" : "#00ab63"};
  border-radius: 8px;
  padding: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: ${({ isButtonDisabled }) =>
    isButtonDisabled ? "default" : "pointer"};
  outline: 0;

  span {
    margin-left: 10px;
    color: #fff;
    font-size: 16px;
  }
`;
