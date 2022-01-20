import {
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
} from '@chakra-ui/react';
import React from 'react';

interface InputWalletProps {
  textRight: string;
  textLeft: string;
  value?: string;
  max?: number;
  disabled?: boolean;
  type?: string;
  onChange?: (event: any) => void;
}

export function InputWallet({
  textRight,
  textLeft,
  value,
  max,
  disabled,
  type = 'number',
  onChange,
}: InputWalletProps) {
  // const valuePassedOnInput =
  //   value && type == 'number' ? parseFloat(value.replace(',', '.')) : value;
  // debugger;
  // const [valueInput, setValueInput] = React.useState(parseFloat(value));
  // const handleChange = (event) => setValueInput(event.target.value);

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

      {type == 'number' ? (
        <NumberInput
          width="100%"
          defaultValue={parseFloat(value)}
          precision={4}
          min={0}
          max={max}
        >
          <NumberInputField
            paddingLeft="4.5rem"
            paddingRight="4rem"
            textAlign="right"
            fontSize="small"
            bgColor="gray.800"
            borderWidth={0}
            onChange={onChange}
            value={parseFloat(value)}
          />
        </NumberInput>
      ) : (
        <Input
          type={type}
          paddingLeft="4.5rem"
          paddingRight="4rem"
          textAlign="right"
          fontSize="small"
          bgColor={disabled ? 'gray.400' : 'gray.800'}
          borderWidth={0}
          value={value}
          disabled={disabled}
        />
      )}

      <InputRightElement width="4.5rem" pointerEvents="none" fontSize="small">
        {textRight}
      </InputRightElement>
    </InputGroup>
  );
}
