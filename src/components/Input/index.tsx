import React from "react";

import * as S from "./styles";

interface InputProps {
  monetary?: boolean;
  label: string;
  value: number;
  onChange: (value: string) => void;
}

const Input: React.FC<InputProps> = ({ label, value, onChange, monetary }) => {
  return (
    <S.Container>
      <S.Label>{label}</S.Label>
      <S.Input
        type="text"
        value={
          monetary
            ? `$ ${value.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")}`
            : `% ${value.toFixed(1)}`
        }
        onChange={(e) => onChange(e.target.value)}
      />
    </S.Container>
  );
};

export default Input;
