import { Text } from '@chakra-ui/react';

const Logo = () => (
  <Text
    htmlTranslate='no'
    sx={{
      fontFamily: 'logo',
      fontSize: ['3xl', null, '5xl'],
      userSelect: 'none',
    }}
  >
    Turbo Md
  </Text>
);
export { Logo };
