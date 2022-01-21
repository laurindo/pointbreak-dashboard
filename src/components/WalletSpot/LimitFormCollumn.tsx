import { useState } from 'react';
import { Flex, Stack, Text } from '@chakra-ui/react';

import { ButtonWalletSpot } from '@/components/Form/ButtonWalletSpot';
import { SliderWallet } from '@/components/Form/SliderWallet';
import { InputWalletSpot } from '@/components/Form/InputWalletSpot';

interface LimitFormCollumnProps {
  criptoTransac: string;
  criptoBase: string;
  available: string;
  availableAssetName: string;
  priceCryptoFrom?: string;
  maxTransacAllowed: number;
  deal: 'sell' | 'buy';
}

export function LimitFormCollumn({
  criptoTransac,
  criptoBase,
  available,
  availableAssetName,
  priceCryptoFrom,
  maxTransacAllowed,
  deal,
}: LimitFormCollumnProps) {
  // Price
  const [price, setPrice] = useState(priceCryptoFrom);
  const handleChangePrice = (event: any) => setPrice(event.target.value);

  // Amount
  const [amount, setAmount] = useState('');
  const handleChangeAmount = (event: any) => {
    if (parseFloat(event.target.value) > maxTransacAllowed) {
      setAmount(String(maxTransacAllowed));
      setSliderValue((maxTransacAllowed * 100) / maxTransacAllowed);
      return;
    }
    setAmount(event.target.value);
    setSliderValue(
      ((parseFloat(event.target.value) * 100) / maxTransacAllowed) | 0,
    );
  };

  // Total Sell
  const totalSell = amount
    ? String((parseFloat(amount) * parseFloat(priceCryptoFrom)).toFixed(4))
    : '';

  // Slider
  const [sliderValue, setSliderValue] = useState(0);
  const handleChangeSlider = (event: any) => {
    setAmount(String(maxTransacAllowed * (event / 100)));
    console.log(maxTransacAllowed);
    setSliderValue(event);
  };

  return (
    <Flex direction="column" flex="1 1 0%">
      <Flex justifyContent="space-between" fontSize="small" color="gray.300">
        <Text>Disponível</Text>
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
