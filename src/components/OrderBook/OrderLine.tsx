import { Flex, Box } from '@chakra-ui/react';

const testDeRepeticao = 17;

// Quando fizer valendo, tirar os ? e realmente utilizar esses dados onde for chamar o componente
interface OrderLineProps {
  typeOrder: string;
  preco?: number;
  quantidade?: number;
  total?: number;
  percent?: string;
}

export function OrderLine({
  typeOrder,
  preco,
  quantidade,
  total,
  percent,
}: OrderLineProps) {
  return (
    <Box height={340} width="100%" fontSize="small">
      {/* Remover essa interação experimental, a repetição estará do lado de fora, chamando o componente */}
      {[...Array(testDeRepeticao)].map((e, i) => (
        <Box key={i} position="relative">
          <Box display="flex" marginX="2">
            <Flex
              flex="1 1 0%"
              justifyContent="flex-start"
              color={`${typeOrder}.400`}
            >
              41820.25
            </Flex>
            <Flex flex="1 1 0%" justifyContent="flex-end">
              0.08800
            </Flex>
            <Flex flex="1 1 0%" justifyContent="flex-end">
              3,680.18200
            </Flex>
          </Box>
          <Box
            position="absolute"
            bgColor={`${typeOrder}.900`}
            top="0"
            right="0"
            // Está random experimentalmente
            width={`${Math.floor(Math.random() * 100)}%`}
            height="full"
            zIndex="-1"
          />
        </Box>
      ))}
    </Box>
  );
}
