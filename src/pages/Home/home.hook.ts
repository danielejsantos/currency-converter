import axios from "axios";
import { useEffect, useState } from "react";

import { transformRawNumber } from "../../helpers/format-number";

interface UseHome {
  currency: number;
  fee: number;
  dolar: number;
  isCash: boolean;
  isFormScreen: boolean;
  converted: number;
  isButtonDisabled: boolean;
  onChangeCashOrCard: () => void;
  onChangeDolar: (value: string) => void;
  onChangeFee: (value: string) => void;
  submitForm: () => void;
  clearState: () => void;
  onChangeFormScreen: () => void;
}

function useHome(): UseHome {
  const [currency, setCurrency] = useState<number>(0);
  const [dolar, setDolar] = useState<number>(0);
  const [fee, setFee] = useState<number>(0);
  const [isCash, setIsChash] = useState<boolean>(true);
  const [isFormScreen, setIsFormScreen] = useState<boolean>(true);
  const [converted, setConverted] = useState<number>(0);

  async function getCurrency(): Promise<void> {
    try {
      const { data } = await axios.get(
        "https://economia.awesomeapi.com.br/last/USD-BRL"
      );

      const formatedBid = Number(data.USDBRL.bid);
      setCurrency(formatedBid);
    } catch {
      alert(
        "Não foi possível carregar o valor do dolar atual, por favor, tente novamente"
      );
    }
  }

  function onChangeDolar(value: string): void {
    const rawNumber = Number(transformRawNumber(value)) / 100;

    if (rawNumber > 100000000) {
      setDolar(100000000);
    } else {
      setDolar(Number(rawNumber.toFixed(2)));
    }
  }

  function onChangeFee(value: string): void {
    const rawNumber = Number(transformRawNumber(value)) / 10;

    if (rawNumber > 100) {
      setFee(100);
    } else {
      setFee(Number(rawNumber.toFixed(1)));
    }
  }

  function submitForm(): void {
    if (isCash) {
      const feeValue = dolar * (fee / 100);
      const IOFValue = dolar * 0.011;

      const result = (dolar + feeValue) * (currency + IOFValue);
      setConverted(result);
    } else {
      const feeValue = dolar * (fee / 100);
      const IOFValue = dolar * 0.064;

      const result = (dolar + feeValue + IOFValue) * currency;
      setConverted(result);
    }
  }

  function clearState(): void {
    setDolar(0);
    setFee(0);
    setIsChash(true);
  }

  function onChangeCashOrCard(): void {
    setIsChash(!isCash);
  }

  function onChangeFormScreen(): void {
    setIsFormScreen(!isFormScreen);
  }

  useEffect(() => {
    getCurrency();
  }, []);

  const isButtonDisabled = !dolar || !fee || !currency;

  return {
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
  };
}

export default useHome;
