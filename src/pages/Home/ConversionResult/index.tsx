import React from "react";

import * as S from "./styles";

import backIcon from "../../../assets/icons/arrow-left.svg";

interface ConversionResultProps {
  currency: number;
  fee: number;
  isCash: boolean;
  converted: number;
  clearState: () => void;
  onChangeFormScreen: () => void;
}

const ConversionResult: React.FC<ConversionResultProps> = ({
  currency,
  converted,
  clearState,
  onChangeFormScreen,
  isCash,
  fee,
}) => {
  function onBackButton() {
    onChangeFormScreen();
    clearState();
  }

  return (
    <S.Container>
      <S.BackButton onClick={onBackButton}>
        <S.BackIcon src={backIcon} alt="Voltar" />
        <span>Voltar</span>
      </S.BackButton>
      <S.ResultText>O resultado do cálculo é</S.ResultText>
      <S.ResultNumber>R$ {converted.toFixed(2)}</S.ResultNumber>
      <S.QuotationWrapper>
        <span>
          <b>Compra no {`${isCash ? "dinheiro" : "cartão"}`} e taxa de</b> {fee}
          %
        </span>
        <span>
          <b>Cotação do dólar:</b> $1,00 = R$ {currency.toFixed(2)}
        </span>
      </S.QuotationWrapper>
    </S.Container>
  );
};

export default ConversionResult;
