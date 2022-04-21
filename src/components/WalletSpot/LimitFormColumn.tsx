import { useEffect, useMemo, useState } from 'react';
import { Flex, Stack, Text } from '@chakra-ui/react';

import { ButtonWalletSpot } from '@/components/Form/ButtonWalletSpot';
import { SliderWallet } from '@/components/Form/SliderWallet';
import { InputWalletSpot } from '@/components/Form/InputWalletSpot';

import {
  reduceToFixedSizeWithRound,
  nSizeDecimal,
  reduceToFixedSize,
} from '@/utils/getDecimals';

interface LimitFormColumnProps {
  criptoTransac: string;
  criptoBase: string;
  available: string;
  availableAssetName: string;
  priceCryptoFrom?: string;
  maxTransacAllowed: number;
  priceSize: string;
  amountSize: string;
  // maxPair: string;
  // minPair: string;
  // taxaBin: string;
  deal: 'sell' | 'buy';
}

export function LimitFormColumn({
  criptoTransac,
  criptoBase,
  available,
  availableAssetName,
  priceCryptoFrom,
  maxTransacAllowed,
  priceSize,
  amountSize,
  deal,
}: LimitFormColumnProps) {
  // Contagem de tamanho de casas decimais
  const nPriceSize = useMemo(() => {
    return priceSize && nSizeDecimal(priceSize);
  }, [priceSize]);
  const nAmountSize = useMemo(() => {
    return amountSize && nSizeDecimal(amountSize);
  }, [amountSize]);
  const defineSizeDecimalTotal = useMemo(() => {
    return priceSize && amountSize
      ? nSizeDecimal(priceSize) + nSizeDecimal(amountSize)
      : 0;
  }, [priceSize, amountSize]);

  // Estado do Price
  const [price, setPrice] = useState(priceCryptoFrom);
  useEffect(() => {
    setPrice(priceCryptoFrom);
  }, [priceCryptoFrom]);

  // Editando Price
  const handleChangePrice = (event: any) => {
    const nDecimalPrice =
      event.target.value.split('.')[1] &&
      event.target.value.split('.')[1].length;
    if (nPriceSize && nDecimalPrice && nDecimalPrice > nPriceSize) {
      setPrice(reduceToFixedSizeWithRound(event.target.value, priceSize));
    } else {
      setPrice(event.target.value);
    }
  };

  // Estado do Amount
  const [amount, setAmount] = useState('');

  // Editando o Amount
  const handleChangeAmount = (event: any) => {
    const value = event.target.value;
    if (parseFloat(value) > maxTransacAllowed) {
      setAmount(String(maxTransacAllowed));
      setSliderValue((maxTransacAllowed * 100) / maxTransacAllowed);
      return;
    }
    const sizeDecimalValue = value.split('.')[1] && value.split('.')[1].length;
    if (nAmountSize && sizeDecimalValue && sizeDecimalValue > nAmountSize) {
      const newValue = reduceToFixedSize(value, amountSize);
      setAmount(newValue);
      setSliderValue(((parseFloat(newValue) * 100) / maxTransacAllowed) | 0);
    } else {
      setAmount(value);
      setSliderValue(((parseFloat(value) * 100) / maxTransacAllowed) | 0);
    }
  };

  // Total Sell
  const totalSell = amount
    ? String(
        (parseFloat(amount) * parseFloat(price)).toFixed(
          defineSizeDecimalTotal,
        ),
      )
    : '';

  // Slider
  const [sliderValue, setSliderValue] = useState(0);
  const handleChangeSlider = (event: any) => {
    setSliderValue(event);
    const setValueAmount = String(maxTransacAllowed * (event / 100));
    const sizeDecimalValueAmount =
      setValueAmount.split('.')[1] && setValueAmount.split('.')[1].length;
    if (
      sizeDecimalValueAmount &&
      nAmountSize &&
      sizeDecimalValueAmount > nAmountSize
    ) {
      const newValue = reduceToFixedSize(setValueAmount, amountSize);
      setAmount(newValue);
    } else {
      setAmount(setValueAmount);
    }
  };

  return (
    <Flex direction="column" flex="1 1 0%">
      <Flex justifyContent="space-between" fontSize="small" color="gray.300">
        <Text>Available</Text>
        <Text>
          {available} {availableAssetName}
        </Text>
      </Flex>
      <Flex as="form" direction="column" marginTop="1">
        <Stack spacing={3}>
          <InputWalletSpot
            type="number"
            textLeft="Price"
            textRight={criptoTransac}
            value={price}
            onChange={handleChangePrice}
          />
          <InputWalletSpot
            type="number"
            textLeft="Amount"
            textRight={criptoBase}
            value={amount}
            onChange={handleChangeAmount}
          />
          <SliderWallet
            value={sliderValue}
            valueTooltip={sliderValue}
            onChange={handleChangeSlider}
          />
          <InputWalletSpot
            type="number"
            textLeft="Total"
            textRight={criptoTransac}
            value={totalSell}
            isReadOnly
          />
        </Stack>
        <Flex direction="column" marginTop="6">
          <ButtonWalletSpot
            type="submit"
            colorScheme={deal == 'buy' ? 'green' : 'red'}
            currency={criptoBase}
            deal={deal}
          />
        </Flex>
      </Flex>
    </Flex>
  );
}
