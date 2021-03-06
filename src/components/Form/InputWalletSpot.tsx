import {
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  InputProps,
} from '@chakra-ui/react';
import React from 'react';

interface InputWalletSpotProps extends InputProps {
  textRight: string;
  textLeft: string;
  blockCharsOnlyNumber?: boolean;
}

export function InputWalletSpot({
  textRight,
  textLeft,
  blockCharsOnlyNumber,
  ...rest
}: InputWalletSpotProps) {
  // Bloqueando caracters para o input number
  const blockInvalidChar = (e: any) =>
    ['e', 'E', '+', '-', '.'].includes(e.key) && e.preventDefault();

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
        paddingLeft="4.5rem"
        paddingRight="4rem"
        textAlign="right"
        fontSize="small"
        bgColor={'isDisabled' in rest ? 'gray.400' : 'gray.800'}
        borderWidth={0}
        onKeyDown={rest['type'] == 'number' && blockInvalidChar}
        {...rest}
      />

      <InputRightElement width="4.5rem" pointerEvents="none" fontSize="small">
        {textRight}
      </InputRightElement>
    </InputGroup>
  );
}
