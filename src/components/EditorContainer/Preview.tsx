import { Box } from '@chakra-ui/react';
import { Prose } from '@nikolovlazar/chakra-ui-prose';

type PreviewProps = {
  content: string;
};

const Preview = (props: PreviewProps) => {
  const { content } = props;

  return (
    <Box
      sx={{
        h: 'full',
        w: 'full',
        borderRadius: 'inherit',
        overflow: 'hidden',
      }}
    >
      <Box
        sx={{
          h: 'full',
          w: 'full',
          borderRightRadius: [null, null, 'inherit'],
          overflow: 'auto',
        }}
      >
        <Box
          as={Prose}
          id='preview'
          dangerouslySetInnerHTML={{ __html: content }}
          sx={{
            p: 7,
            wordBreak: 'break-word',
            '& *': {
              maxW: 'full',
            },
            '& *:first-child': {
              mt: 0,
            },
            'h1,h2,h3,h4,h5,h6': {
              lineHeight: 1.05,
            },
            '& pre': {
              bgColor: 'gray.700 !important',
            },
          }}
        />
      </Box>
    </Box>
  );
};

export { Preview };
