import { Center, Container } from '@chakra-ui/react';
import { EditorContainer, Footer, Navbar } from './components';

const App = () => (
  <Container minHeight='var(--chakra-vh)' w='100vw' maxW='full'>
    <Center flexDirection='column' minHeight='inherit' gap={10}>
      <Navbar />
      <EditorContainer />
      <Footer />
    </Center>
  </Container>
);

export { App };
