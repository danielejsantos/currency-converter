import React from "react";

import * as S from "./styles";

import logoImg from "../../assets/images/logo.png";

const Header: React.FC = () => {
  const meses = [
    "janeiro",
    "fevereiro",
    "março",
    "abril",
    "maio",
    "junho",
    "julho",
    "agosto",
    "setembro",
    "outubro",
    "novembro",
    "dezembro",
  ];

  const date = new Date(Date.now());

  return (
    <S.Container>
      <S.Logo src={logoImg} alt="Stone Currency" />
      <S.DateInfo>
        <S.Date>
          {date.getDate() +
            " de " +
            meses[date.getMonth()] +
            " " +
            date.getFullYear()}{" "}
          <S.Separator>|</S.Separator> {date.getHours()}:{date.getMinutes()} UTC
        </S.Date>
        <S.InfoText>
          Dados de câmbio disponibilizados pela Morningstar.
        </S.InfoText>
      </S.DateInfo>
    </S.Container>
  );
};

export default Header;
