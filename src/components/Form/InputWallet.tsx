import {
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from '@chakra-ui/react';

interface InputWalletProps {
  textRight: string;
  textLeft: string;
}

export function InputWallet({ textRight, textLeft }: InputWalletProps) {
  return (
    <InputGroup size="md">
      <InputLeftElement
        width="4.5rem"
        pointerEvents="none"
        color="gray.300"
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
        bgColor="gray.800"
        borderWidth={0}
      />
      <InputRightElement width="4.5rem" pointerEvents="none">
        {textRight}
      </InputRightElement>
    </InputGroup>
  );
}
