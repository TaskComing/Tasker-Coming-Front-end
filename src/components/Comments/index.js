import * as React from 'react';
import { useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import AddNewComment from './AddNewComment';
import DisplayCurrentComment from './DisplayCurrentComment';

function Comments() {
  const initialCommentsList = ['111', '222'];

  const [commentInput, setCommentInput] = useState('');
  const [commentsList, setCommentsList] = useState(initialCommentsList);

  const handleCommentInput = (event) => {
    // const value = event.target.value;
    setCommentInput(event.target.value);
  };

  const handleAddNewComment = () => {
    if (!commentInput.trim()) {
      return;
    }
    setCommentsList((prevState) => [...prevState, commentInput]);
    setCommentInput('');
  };

  const displayCurrentComments = () =>
    commentsList.map((item, index) => (
      <ListItem fullWidth key={index} sx={{ p: '0px 0px 8px 0px' }}>
        <DisplayCurrentComment item={item} />
      </ListItem>
    ));

  return (
    <Card sx={{ minWidth: 275, maxWidth: 1169 }}>
      <CardContent>
        <Typography variant="h4" gutterBottom>
          Your Comments
        </Typography>
        <AddNewComment
          handleCommentInput={handleCommentInput}
          handleAddNewComment={handleAddNewComment}
          newComment={commentInput}
        />
        <Box fullWidth>
          <List fullWidth>{displayCurrentComments()}</List>
        </Box>
      </CardContent>
    </Card>
  );
}

export default Comments;
