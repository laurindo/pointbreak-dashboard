import { Text } from '@chakra-ui/react';
import NextLink from 'next/link';

interface ItemMenuNavProps {
  children: string;
  path: string;
}

export function ItemMenuNav({ children, path }: ItemMenuNavProps) {
  return (
    <NextLink href={path} passHref>
      <Text
        display="inline-block"
        position="relative"
        marginX="4"
        paddingX="0.5"
        lineHeight="5"
        color="gray.300"
        transition="color 0.2s"
        cursor="pointer"
        _hover={{
          color: 'white',
        }}
      >
        {children}
      </Text>
    </NextLink>
  );
}
