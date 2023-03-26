import * as React from 'react';
// import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import { CardHeader, IconButton } from '@mui/material';
import TextField from '@mui/material/TextField';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import Button from '@mui/material/Button';

function AddNewComment(props) {
  const { handleAddNewComment, handleCommentInput, newComment } = props;
  return (
    <Box sx={{ border: 1 }} noValidate autoComplete="off">
      <Box>
        <CardHeader
          avatar={<Avatar alt="John" src="/img/homepage2/Avatar1.jpg" />}
          action={<IconButton aria-label="settings" />}
          title="John"
          titleTypographyProps={{
            fontSize: 18,
          }}
        />
      </Box>
      <TextField
        fullWidth
        sx={{ p: '0px 20px 0px 20px' }}
        inputProps={{
          style: { fontSize: 18 },
        }}
        margin="normal"
        id="standard-multiline-flexible"
        placeholder="You type something......"
        multiline
        maxRows={4}
        variant="standard"
        onChange={handleCommentInput}
        value={newComment}
        // inputProps={{
        //   sx: {
        //     fontStyle: 'italic',
        //     fontWeight: 'bold',
        //   },
        // }}
      />
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          color: 'text.secondary',
          '& svg': {
            m: 1.5,
          },
          '& hr': {
            mx: 0.5,
          },
        }}
      >
        <Box>
          <FormatBoldIcon />
          <FormatItalicIcon />
        </Box>
        <Button
          variant="contained"
          sx={{
            backgroundColor: '#916DF9',
            marginRight: '16px',
          }}
          onClick={handleAddNewComment}
        >
          Comment
        </Button>
      </Box>
    </Box>
  );
}

// AddNewComment.propTypes = {
//   handleAddNewComment: PropTypes.element,
//   handleCommentInput: PropTypes.element,
// };

export default AddNewComment;
