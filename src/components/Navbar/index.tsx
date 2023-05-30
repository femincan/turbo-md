import { Flex } from '@chakra-ui/react';
import { Logo } from './Logo';
import { ColorModeToggle } from './ColorModeToggle';

const Navbar = () => (
  <Flex
    alignItems='center'
    justifyContent='space-around'
    alignSelf='stretch'
    py={3}
  >
    <Logo />
    <ColorModeToggle />
  </Flex>
);

export { Navbar };
