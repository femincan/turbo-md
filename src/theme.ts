import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  fonts: {
    logo: "'Cherry Bomb One', cursive",
    editor: "font-family: 'IBM Plex Mono', monospace;",
    general: "font-family: 'IBM Plex Sans', sans-serif;",
  },
});

export { theme };
