import React, { useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import { validateEmail } from '@/utils/validate';
import {
  Flex,
  Stack,
  Input,
  Button,
  FormLabel,
  Spinner,
  useToast,
} from '@chakra-ui/react';

const Signup = () => {
  const router = useRouter();
  const toast = useToast();
  const [email, setEmail] = useState('');
  const [password, setPass] = useState('');
  const [cPassword, setCPassword] = useState('');
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

  const onSigninWithCredentials = async (e) => {
    debugger;
    e.preventDefault();
    if (!validateEmail(email)) {
      return openNotification('Error', 'All Fields are required', 'error');
    }
    if (password !== cPassword) {
      return openNotification(
        'Error',
        'Password is diferent of COnfirm Password',
        'error',
      );
    }
    setLoading(true);
    const result = await axios
      .post('/api/auth/signup', { email, password })
      .catch(() => null);
    if (result) {
      openNotification('Success', 'Redirecting...');
      router.push('/auth/signin');
      return;
    }
    openNotification('Error', 'Error to create account', 'error');
  };

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePassChange = (e) => setPass(e.target.value);
  const handleCPassChange = (e) => setCPassword(e.target.value);

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

          <FormLabel htmlFor="password">Password</FormLabel>
          <Input
            name="password"
            type="password"
            label="Password"
            value={password}
            onChange={handlePassChange}
          />

          <FormLabel htmlFor="confirmPassword">Confirm Password</FormLabel>
          <Input
            name="cPassword"
            type="password"
            label="Confirm Password"
            value={cPassword}
            onChange={handleCPassChange}
          />
        </Stack>

        <Button
          mt={6}
          colorScheme="pink"
          size="lg"
          onClick={onSigninWithCredentials}
        >
          {isLoading ? <Spinner size="sm" /> : 'Sign up'}
        </Button>

        <Flex width="100%" p="20px 0" justifyContent="center">
          <a href="/auth/signin">Sign In</a>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Signup;
