import { IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

const ColorModeToggle = () => {
  const { toggleColorMode } = useColorMode();

  const ToggleIcon = useColorModeValue(MoonIcon, SunIcon);

  return (
    <IconButton
      variant='ghost'
      aria-label='color-mode-toggle'
      icon={<ToggleIcon boxSize='6' />}
      onClick={toggleColorMode}
    />
  );
};
export { ColorModeToggle };
