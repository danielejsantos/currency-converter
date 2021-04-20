import React from "react";

import * as S from "./styles";

import Input from "../../../components/Input";
import convertIcon from "../../../assets/icons/convert.svg";

interface FormProps {
  fee: number;
  dolar: number;
  isCash: boolean;
  isButtonDisabled: boolean;
  onChangeCashOrCard: () => void;
  onChangeDolar: (value: string) => void;
  onChangeFee: (value: string) => void;
  submitForm: () => void;
  onChangeFormScreen: () => void;
}

const Form: React.FC<FormProps> = ({
  isButtonDisabled,
  dolar,
  fee,
  isCash,
  onChangeFee,
  onChangeDolar,
  submitForm,
  onChangeCashOrCard,
  onChangeFormScreen,
}) => {
  function onSubmitForm(): void {
    onChangeFormScreen();
    submitForm();
  }

  return (
    <S.Container>
      <form>
        <S.Wrapper>
          <Input
            monetary
            label="Dólar"
            value={dolar}
            onChange={onChangeDolar}
          />
          <Input label="Taxa do Estado" value={fee} onChange={onChangeFee} />
        </S.Wrapper>
        <span>Tipo de compra</span>
        <S.Wrapper>
          <S.RadioItem isChecked={isCash}>
            <input
              type="radio"
              id="money"
              checked={isCash}
              onChange={onChangeCashOrCard}
            />
            <label htmlFor="money">Dinheiro</label>
          </S.RadioItem>
          <S.RadioItem isChecked={!isCash}>
            <input
              type="radio"
              id="card"
              checked={!isCash}
              onChange={onChangeCashOrCard}
            />
            <label htmlFor="card">Cartão</label>
          </S.RadioItem>
        </S.Wrapper>
        <S.ConvertButton
          disabled={isButtonDisabled}
          isButtonDisabled={isButtonDisabled}
          onClick={onSubmitForm}
        >
          <img src={convertIcon} alt="Converter" />
          <span>Converter</span>
        </S.ConvertButton>
      </form>
    </S.Container>
  );
};

export default Form;
