import {
  Input as ChakraInput,
  InputProps as ChakraInputProps,
  FormControl,
  FormLabel,
} from '@chakra-ui/react';
import React from 'react';

interface InputCustomProps extends ChakraInputProps {
  name: string;
  label?: string;
}

export function InputCustom({ name, label, ...rest }: InputCustomProps) {
  const [valueInput, setValueInput] = React.useState('');
  const handleChange = (event) => setValueInput(event.target.value);

  return (
    <FormControl>
      {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}
      <ChakraInput
        padding="1rem"
        fontSize="medium"
        bgColor="gray.800"
        borderWidth={0}
        onChange={handleChange}
        value={valueInput}
        {...rest}
      />
    </FormControl>
  );
}
