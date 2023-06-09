import { Center, Link, Text } from '@chakra-ui/react';

const Footer = () => (
  <Center
    sx={{
      flexDirection: 'column',
      textAlign: 'center',
      fontSize: ['md', 'lg'],
      gap: 1,
      p: 3,

      '& a': {
        textDecoration: 'underline',
      },
    }}
  >
    <Text>
      Made with 💖 by{' '}
      <Link href='https://github.com/femincan'>Furkan Emin Can</Link>
    </Text>
    <Text>
      Click <Link href='https://github.com/femincan/turbo-md'>here</Link> to
      access project&apos;s GitHub repository
    </Text>
  </Center>
);

export { Footer };
