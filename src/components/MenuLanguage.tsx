import {
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import { FaChevronDown } from 'react-icons/fa';

interface MenuLanguageProps {
  actualLanguage: string;
}

function setLanguage() {
  // experimental
  console.log('setou a linguagem');
}

export function MenuLanguage({ actualLanguage }: MenuLanguageProps) {
  return (
    <Menu>
      <MenuButton
        as={Button}
        rightIcon={<FaChevronDown />}
        bgColor="gray.800"
        borderWidth={2}
        borderColor="gray.700"
        color="whiteAlpha.800"
        fontWeight="light"
        outline={0}
        _hover={{ borderColor: 'gray.700' }}
        _active={{ borderColor: 'gray.700' }}
        _focus={{ outline: 0 }}
      >
        {actualLanguage}
      </MenuButton>
      <MenuList bgColor="gray.600" borderColor="gray.800">
        {/* Pode ser uma lista gerada */}
        <MenuItem onChange={setLanguage} _hover={{ bgColor: 'gray.700' }}>
          English
        </MenuItem>
        <MenuItem onChange={setLanguage} _hover={{ bgColor: 'gray.700' }}>
          Deutsch
        </MenuItem>
        <MenuItem onChange={setLanguage} _hover={{ bgColor: 'gray.700' }}>
          Español
        </MenuItem>
        <MenuItem onChange={setLanguage} _hover={{ bgColor: 'gray.700' }}>
          Italiano
        </MenuItem>
        <MenuItem onChange={setLanguage} _hover={{ bgColor: 'gray.700' }}>
          Français
        </MenuItem>
        <MenuItem onChange={setLanguage} _hover={{ bgColor: 'gray.700' }}>
          Português
        </MenuItem>
      </MenuList>
    </Menu>
  );
}
