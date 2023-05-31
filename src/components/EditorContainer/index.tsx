import { useState } from 'react';
import { Badge, Box, Center, useColorModeValue } from '@chakra-ui/react';
import DOMPurify from 'dompurify';
import { marked } from 'marked';
import { markedHighlight } from 'marked-highlight';
import hljs from 'highlight.js';
import { defaultContent } from '../../defaultContent';
import { Editor } from './Editor';
import { Preview } from './Preview';

import 'highlight.js/styles/agate.css';

marked.use(
  {
    gfm: true,
    breaks: true,
    headerIds: false,
    mangle: false,
  },
  markedHighlight({
    highlight: (code, lang) => {
      const language = hljs.getLanguage(lang) ? lang : 'plaintext';

      return hljs.highlight(code, { language }).value;
    },
  })
);

const EditorContainer = () => {
  const [editorValue, setEditorValue] = useState(defaultContent);

  const previewContent = DOMPurify.sanitize(marked.parse(editorValue));

  return (
    <Center
      sx={{
        flex: 1,
        alignSelf: 'stretch',
        bg: useColorModeValue('gray.800', 'whiteAlpha.900'),
        borderRadius: 10,
        p: 8,
      }}
    >
      <Center
        sx={{
          flexDirection: ['column', null, 'row'],
          w: 'full',
          h: 'xl',
          bg: useColorModeValue('whiteAlpha.900', 'gray.800'),
          boxShadow: '2xl',
          borderRadius: 'inherit',
          '& > div:nth-of-type(odd)': {
            flex: 1,
          },
        }}
      >
        <Editor editorValue={editorValue} setEditorValue={setEditorValue} />
        <Box
          sx={{
            position: 'relative',
            h: { base: 1, md: 'full' },
            w: { base: 'full', md: 1 },
            bg: useColorModeValue('gray.800', 'whiteAlpha.900'),
            '& > span': {
              position: 'absolute',
              fontSize: 'sm',
              zIndex: 1,
            },
            '& > span:first-of-type': {
              right: { md: 2 },
              left: { base: 2, md: 'unset' },
              top: { base: -6, md: 1 },
            },
            '& > span:last-of-type': {
              left: 2,
              top: { base: 2, md: 1 },
            },
          }}
        >
          <Badge>Editor</Badge>
          <Badge>Preview</Badge>
        </Box>
        <Preview content={previewContent} />
      </Center>
    </Center>
  );
};

export { EditorContainer };
