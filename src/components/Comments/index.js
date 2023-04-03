import React, { useState, useEffect } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import AddNewComment from './AddNewComment';
import DisplayCurrentComment from './DisplayCurrentComment';
import { getAllComments } from '../../services/comment';

function Comments() {
  const [loading, setLoading] = useState(false);
  const [commentInput, setCommentInput] = useState('');
  const [commentsList, setCommentsList] = useState([]);

  const getComments = async () => {
    setLoading(true);
    const response = await getAllComments();
    setCommentsList(response.data);
    setLoading(false);
  };

  useEffect(() => {
    getComments();
  }, []);

  const handleCommentInput = (event) => {
    setCommentInput(event.target.value);
  };

  // const handleAddNewComment = () => {
  //   if (!commentInput.trim()) {
  //     return;
  //   }
  //   setCommentsList((prevState) => [...prevState, commentInput]);
  //   setCommentInput('');
  // };

  const displayCurrentComments = () =>
    commentsList.map((comment, index) => (
      <ListItem fullWidth key={index} sx={{ p: '0px 0px 8px 0px' }}>
        <DisplayCurrentComment comment={comment} />
      </ListItem>
    ));

  if (loading) return <div>Loading......</div>;
  return (
    <Card sx={{ minWidth: 275, maxWidth: 1169 }}>
      <CardContent>
        <AddNewComment
          handleCommentInput={handleCommentInput}
          // handleAddNewComment={handleAddNewComment}
          getComments={getComments}
          setCommentInput={setCommentInput}
          newComment={commentInput}
        />
        <Box fullWidth>
          <List fullWidth>{displayCurrentComments()}</List>
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            border: 1,
            backgroundColor: '#DCDCDC',
            borderRadius: '5px',
            p: '5px',
          }}
        >
          <Typography sx={{ fontSize: '15px' }}>Load More</Typography>
        </Box>
      </CardContent>
    </Card>
  );
}

export default Comments;
