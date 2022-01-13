import {
  Button,
  Flex,
  Stack,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';

import { InputCustom } from '@/components/Form/InputCustom';
import { Header } from '@/components/Header';

export default function Keys() {
  return (
    <Flex direction="column" height="100vh">
      <Header />
      <Flex
        direction="column"
        width="100%"
        marginX="auto"
        marginTop="4"
        maxWidth={1520}
      >
        <Flex
          as="form"
          padding="6"
          width="50%"
          borderWidth={1}
          borderColor="gray.700"
          borderRadius="md"
        >
          <Stack spacing={4} width="100%">
            <InputCustom name="publicKey" type="text" label="Chave Pública" />
            <InputCustom
              name="privateKey"
              type="password"
              label="Chave Privada"
            />
            <Flex justifyContent="flex-end">
              <Button type="submit" colorScheme="green" paddingX="10">
                Salvar
              </Button>
            </Flex>
          </Stack>
        </Flex>
        <Flex marginTop="10">
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Chave Pública</Th>
                <Th>Chave Privada</Th>
                <Th>Ações</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>mcu&f=$6zs(66bf3fbf6#_*9reqh6k(rtdwqnns2149uqg*fmj</Td>
                <Td>****************</Td>
                <Td>Editar | Excluir</Td>
              </Tr>
              <Tr>
                <Td>mcu&f=$6zs(66bf3fbf6#_*9reqh6k(rtdwqnns2149uqg*fmj</Td>
                <Td>****************</Td>
                <Td>Editar | Excluir</Td>
              </Tr>
            </Tbody>
          </Table>
        </Flex>
      </Flex>
    </Flex>
  );
}
