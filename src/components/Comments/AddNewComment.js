import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import { CardHeader, IconButton } from '@mui/material';
import TextField from '@mui/material/TextField';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import Button from '@mui/material/Button';
import { useSelector } from 'react-redux';

import { postComment } from '../../services/comment';

function AddNewComment(props) {
  const [isBold, setIsBold] = useState(false);
  const [isItalic, setIsItalic] = useState(false);
  const [isPosting, setIsPosting] = useState(false);

  const { user } = useSelector((state) => state.auth);
  const firstName = user?.user?.firstName || 'Unknown';

  const { handleCommentInput, getComments, setCommentInput, newComment } = props;

  const handleAddNewComment = async () => {
    if (!newComment.trim()) {
      return;
    }
    setIsPosting(true);
    await postComment(newComment);
    getComments();
    setIsPosting(false);
    setCommentInput('');
  };

  const handleBoldToggle = () => {
    setIsBold(() => {
      if (isBold) {
        return false;
      }
      return true;
    });
  };

  const styleBold = () => {
    if (isBold) {
      return 'bold';
    }
    return '';
  };

  const handleItalicToggle = () => {
    setIsItalic(() => {
      if (isItalic) {
        return false;
      }
      return true;
    });
  };

  if (isPosting) return <div>New comment is submitting......</div>;

  return (
    <Box sx={{ border: 1 }} noValidate autoComplete="off">
      <Box>
        <CardHeader
          avatar={<Avatar alt={firstName} src="/img/homepage2/Avatar1.jpg" />}
          action={<IconButton aria-label="settings" />}
          title={firstName}
          titleTypographyProps={{
            fontSize: 18,
          }}
        />
      </Box>
      <TextField
        fullWidth
        sx={{ p: '0px 20px 0px 20px' }}
        inputProps={{
          style: { fontSize: 18, fontStyle: {}, fontWeight: { styleBold } },
        }}
        margin="normal"
        id="standard-multiline-flexible"
        placeholder="You type something......"
        multiline
        maxRows={4}
        variant="standard"
        onChange={handleCommentInput}
        value={newComment}
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
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            m: '0 0 0 10px',
          }}
        >
          <Box
            sx={{
              '&:hover': {
                backgroundColor: '#DCDCDC',
              },
            }}
            onClick={handleBoldToggle}
          >
            <FormatBoldIcon />
          </Box>
          <Box
            sx={{
              '&:hover': {
                backgroundColor: '#DCDCDC',
              },
            }}
            onClick={handleItalicToggle}
          >
            <FormatItalicIcon />
          </Box>
        </Box>
        <Button
          variant="contained"
          sx={{
            backgroundColor: '#916DF9',
            marginRight: '16px',
          }}
          onClick={handleAddNewComment}
        >
          Submit
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
