import { extendTheme, ThemeConfig } from '@chakra-ui/react';
import { withProse } from '@nikolovlazar/chakra-ui-prose';

const config: ThemeConfig = {
  initialColorMode: 'system',
  useSystemColorMode: true,
};

const theme = extendTheme(
  {
    fonts: {
      heading: "'IBM Plex Sans', sans-serif",
      body: "'IBM Plex Sans', sans-serif",
      mono: "'IBM Plex Mono', monospace",
      logo: "'Cherry Bomb One', cursive",
    },
    config,
  },
  withProse()
);

export { theme };
