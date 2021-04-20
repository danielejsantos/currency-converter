import React from "react";

import Form from "./Form";
import ConversionResult from "./ConversionResult";
import * as S from "./styles";
import useHome from "./home.hook";

import Header from "../../components/Header";
import graphImg from "../../assets/images/graph.png";

const Home: React.FC = () => {
  const {
    currency,
    fee,
    dolar,
    isCash,
    isFormScreen,
    converted,
    isButtonDisabled,
    onChangeCashOrCard,
    onChangeDolar,
    onChangeFee,
    submitForm,
    clearState,
    onChangeFormScreen,
  } = useHome();

  return (
    <S.Container>
      <S.GreenGraph src={graphImg} />
      <Header />

      {isFormScreen ? (
        <Form
          isButtonDisabled={isButtonDisabled}
          dolar={dolar}
          fee={fee}
          isCash={isCash}
          onChangeFee={onChangeFee}
          onChangeDolar={onChangeDolar}
          submitForm={submitForm}
          onChangeCashOrCard={onChangeCashOrCard}
          onChangeFormScreen={onChangeFormScreen}
        />
      ) : (
        <ConversionResult
          currency={currency}
          converted={converted}
          clearState={clearState}
          onChangeFormScreen={onChangeFormScreen}
          isCash={isCash}
          fee={fee}
        />
      )}
    </S.Container>
  );
};

export default Home;
