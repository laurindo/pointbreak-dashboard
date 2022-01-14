import Image from 'next/image';
import React from 'react';
import { Flex } from '@chakra-ui/react';

export default function Option({
  link = null,
  clickable = true,
  size,
  onClick = null,
  color,
  header,
  subheader = null,
  icon,
  active = false,
  id,
}: {
  link?: string | null;
  clickable?: boolean;
  size?: number | null;
  onClick?: null | (() => void);
  color: string;
  header: React.ReactNode;
  subheader: React.ReactNode | null;
  icon: string;
  active?: boolean;
  id: string;
}) {
  const content = (
    <Flex
      onClick={onClick}
      p="10px 20px"
      my="5px"
      borderRadius="5px"
      border="solid 1px"
      borderColor="gray.700"
      width="100%"
      alignItems="center"
      cursor="pointer"
      _hover={{ backgroundColor: 'gray.800' }}
    >
      <Image src={icon} alt={'Icon'} width="32px" height="32px" />
      <Flex flexDirection="column" ml="10px">
        {header}
        {subheader && <div className="mt-2.5 text-xs">{subheader}</div>}
      </Flex>
    </Flex>
  );
  if (link) {
    return <a href={link}>{content}</a>;
  }

  return !active ? content : <Flex>{content}</Flex>;
}
