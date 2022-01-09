import { Flex, Button, Stack } from '@chakra-ui/react';
import { Input } from '@/components/Form/Input';
import { useRouter } from 'next/router';

export default function Pair() {
  const router = useRouter();
  console.log(router.query.pair);
  return (
    <Flex w="100vw" h="100vh" align="center" justify="center">
      <Flex
        as="form"
        width="100%"
        maxWidth={360}
        bg="gray.800"
        p="8"
        borderRadius={8}
        flexDir="column"
      >
        <Stack spacing={4}>
          <Input name="email" type="email" label="Email" />
          <Input name="password" type="password" label="Password" />
        </Stack>

        <Button type="submit" mt={6} colorScheme="pink" size="lg">
          Entrar
        </Button>
      </Flex>
    </Flex>
  );
}
