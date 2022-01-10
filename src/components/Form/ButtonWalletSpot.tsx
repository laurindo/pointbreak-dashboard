import { Button, ButtonProps } from '@chakra-ui/react';

interface ButtonWalletSpotProps extends ButtonProps {
  currency: string;
  deal: 'buy' | 'sell';
}

export function ButtonWalletSpot({
  currency,
  deal,
  ...rest
}: ButtonWalletSpotProps) {
  return (
    <Button type="submit" colorScheme="green" {...rest}>
      {deal == 'buy' ? 'Buy' : 'Sell'} {currency}
    </Button>
  );
}
