import {
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from '@chakra-ui/react';
import React from 'react';

interface InputWalletProps {
  textRight: string;
  textLeft: string;
  value?: string;
  disabled?: boolean;
  type?: string;
}

export function InputWallet({
  textRight,
  textLeft,
  value,
  disabled,
  type = 'number',
}: InputWalletProps) {
  const valuePassedOnInput =
    value && type == 'number' ? parseFloat(value.replace(',', '.')) : value;

  const [valueInput, setValueInput] = React.useState(valuePassedOnInput);
  const handleChange = (event) => setValueInput(event.target.value);

  return (
    <InputGroup size="md">
      <InputLeftElement
        width="4.5rem"
        pointerEvents="none"
        color="gray.300"
        fontSize="small"
        justifyContent="left"
        paddingLeft="1rem"
      >
        {textLeft}
      </InputLeftElement>
      <Input
        type={type}
        paddingLeft="4.5rem"
        paddingRight="4rem"
        textAlign="right"
        fontSize="small"
        bgColor={disabled ? 'gray.400' : 'gray.800'}
        borderWidth={0}
        onChange={handleChange}
        value={valueInput}
        disabled={disabled}
      />
      <InputRightElement width="4.5rem" pointerEvents="none" fontSize="small">
        {textRight}
      </InputRightElement>
    </InputGroup>
  );
}
