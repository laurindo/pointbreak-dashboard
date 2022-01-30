import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { validateEmail } from '@/utils/validate';
import {
  getProviders,
  signIn,
  getSession,
  getCsrfToken,
} from 'next-auth/react';
import {
  Flex,
  Stack,
  Input,
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Spinner,
  useToast,
} from '@chakra-ui/react';

const LoginForm = ({ providers, csrfToken }) => {
  const router = useRouter();
  const toast = useToast();
  const [email, setEmail] = useState('');
  const [password, setPass] = useState('');
  const [isLoading, setLoading] = useState(false);
  const [isError] = useState(false);

  if (isError) console.log(isError);

  const openNotification = (title, description, status = 'success') => {
    toast({
      title,
      description,
      status,
      position: 'top',
      duration: 9000,
      isClosable: true,
    });
  };

  const onSigninWithCredentials = (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      return openNotification('Error', 'All Fields are required', 'error');
    }
    setLoading(true);
    signIn('credentials', { email, password });
  };

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePassChange = (e) => setPass(e.target.value);

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
          <FormLabel htmlFor="email">Email</FormLabel>
          <Input
            name="email"
            type="email"
            label="Email"
            value={email}
            onChange={handleEmailChange}
          />

          <FormLabel htmlFor="email">Password</FormLabel>
          <Input
            name="password"
            type="password"
            label="Password"
            value={password}
            onChange={handlePassChange}
          />
        </Stack>

        <Button
          mt={6}
          colorScheme="pink"
          size="lg"
          onClick={onSigninWithCredentials}
        >
          {isLoading ? <Spinner size="sm" /> : 'Sign in'}
        </Button>

        <Flex width="100%" p="20px 0" justifyContent="center">
          <a href="/auth/signup">Create Account</a>
        </Flex>
      </Flex>
    </Flex>
  );
};

export async function getServerSideProps(context) {
  const { req } = context;
  const session = await getSession({ req });

  if (session) {
    return {
      redirect: { destination: '/trade/BNB_BTC' },
    };
  }

  const providers = await getProviders();
  const csrfToken = await getCsrfToken(context);

  return {
    props: {
      providers,
      csrfToken,
    },
  };
}

export default LoginForm;
