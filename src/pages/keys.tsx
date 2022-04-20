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
import { getSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useSession } from 'next-auth/react';
import { InputCustom } from '@/components/Form/InputCustom';
import { Header } from '@/components/Header';
import { validateBinanceKey } from '@/hooks/validateBinanceKeys';

export default function Keys({ session, assetsFromDB }) {
  const [publicKey, setPublicKey] = useState('');
  const [secretKey, setSecretKey] = useState('');
  const [connectionCheck, setConnectionCheck] = useState(true);
  const [assets, setAssets] = useState([]);

  useEffect(() => {
    if (assetsFromDB) {
      setAssets(assetsFromDB);
    }
  }, [assetsFromDB]);

  const handleSave = async (evt) => {
    evt.preventDefault();
    console.log(session);
    debugger;
    if (session?.user?.email) {
      const result = await axios.post('/api/store-binance-key', {
        publicKey,
        secretKey,
        email: session.user.email,
      });
      if (result) {
        setConnectionCheck(true);
      }
    } else {
      // .. user nao logado
    }
  };

  const handlValidateKey = async (evt) => {
    evt.preventDefault();
    const result = await validateBinanceKey(session.user.email).catch(
      (err) => err,
    );
    setAssets(result?.accountInfo?.info);
  };

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
          onSubmit={handleSave}
        >
          <Stack spacing={4} width="100%">
            <InputCustom
              name="publicKey"
              value={publicKey}
              type="text"
              label="Chave Pública"
              onChange={(e) => setPublicKey(e.target.value)}
            />
            <InputCustom
              value={secretKey}
              name="privateKey"
              type="password"
              label="Chave Privada"
              onChange={(e) => setSecretKey(e.target.value)}
            />
            <Flex justifyContent="flex-end">
              <Button type="submit" colorScheme="green" paddingX="10">
                Salvar
              </Button>
              {connectionCheck && (
                <Button
                  type="button"
                  colorScheme="green"
                  paddingX="10"
                  ml="10px"
                  onClick={handlValidateKey}
                >
                  Validar Chave
                </Button>
              )}
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
            </Tbody>
          </Table>
        </Flex>

        <Flex as="h1" mt="50px" p="10px 0 0 10px">
          Assets from Binance
        </Flex>
        <Flex marginTop="10">
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Asset</Th>
                <Th>Amount</Th>
              </Tr>
            </Thead>
            <Tbody>
              {assets.map((ac) => {
                return (
                  <Tr key={ac.asset}>
                    <Td>{ac.asset}</Td>
                    <Td>{ac.free}</Td>
                  </Tr>
                );
              })}
            </Tbody>
          </Table>
        </Flex>
      </Flex>
    </Flex>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);
  const result = await validateBinanceKey(session.user.email).catch(
    (err) => err,
  );

  return {
    props: {
      session,
      assetsFromDB: result.accountInfo.info,
    },
  };
}
