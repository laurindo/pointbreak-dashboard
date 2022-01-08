import {
  FormControl,
  FormLabel,
  Input as ChakraInput,
  InputProps as ChakraInputProps,
} from '@chakra-ui/react';

interface InputProps extends ChakraInputProps {
  name: string;
  label?: string;
  //type will is extends of the ChakraInputProps
}

export function Input({ name, label, ...rest }: InputProps) {
  return (
    <FormControl>
      {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}
      <ChakraInput
        id={name}
        name={name}
        focusBorderColor="pink.500"
        bgColor="gray.400"
        variant="filled"
        size="lg"
        _hover={{
          bgColor: 'gray.900',
        }}
        {...rest}
      ></ChakraInput>
    </FormControl>
  );
}
