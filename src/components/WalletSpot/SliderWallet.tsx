import {
  Flex,
  Slider,
  SliderFilledTrack,
  SliderMark,
  SliderThumb,
  SliderTrack,
  Tooltip,
  SliderProps,
} from '@chakra-ui/react';
import React from 'react';

interface SliderWalletProps extends SliderProps {
  valueTooltip?: number;
}

export function SliderWallet({ valueTooltip, ...rest }: SliderWalletProps) {
  const [showTooltip, setShowTooltip] = React.useState(false);
  return (
    <Flex>
      <Slider
        id="slider"
        defaultValue={0}
        min={0}
        max={100}
        marginY="3"
        colorScheme="teal"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        focusThumbOnChange={false}
        {...rest}
      >
        <SliderMark value={25} mt="1" ml="-2.5" fontSize="sm">
          25%
        </SliderMark>
        <SliderMark value={50} mt="1" ml="-2.5" fontSize="sm">
          50%
        </SliderMark>
        <SliderMark value={75} mt="1" ml="-2.5" fontSize="sm">
          75%
        </SliderMark>
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <Tooltip
          hasArrow
          bg="teal.500"
          color="white"
          placement="top"
          isOpen={showTooltip}
          label={`${valueTooltip}%`}
        >
          <SliderThumb />
        </Tooltip>
      </Slider>
    </Flex>
  );
}
