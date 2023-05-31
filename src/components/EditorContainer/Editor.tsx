import { ChangeEvent, Dispatch, SetStateAction } from 'react';
import { Box, Textarea } from '@chakra-ui/react';

type EditorProps = {
  editorValue: string;
  setEditorValue: Dispatch<SetStateAction<string>>;
};

const Editor = (props: EditorProps) => {
  const { editorValue, setEditorValue } = props;

  const handleOnChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setEditorValue(event.currentTarget.value);
  };

  return (
    <Box h='full' w='full'>
      <Textarea
        id='editor'
        value={editorValue}
        onChange={handleOnChange}
        placeholder='Type something...'
        sx={{
          resize: 'none',
          fontFamily: 'mono',
          w: 'full',
          h: 'full',
          p: 7,
          border: 'none',
          '&:focus, &:focus-visible': { border: 'none', boxShadow: 'none' },
        }}
      />
    </Box>
  );
};

export { Editor };
