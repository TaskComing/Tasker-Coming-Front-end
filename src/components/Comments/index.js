import React, { useState, useEffect } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import AddNewComment from './AddNewComment';
import DisplayComment from './DisplayComment';
import { getAllComments } from '../../services/comment';

function Comments() {
  const [loading, setLoading] = useState(false);
  const [commentInput, setCommentInput] = useState({});
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

  const handleCommentInput = (event, id) => {
    setCommentInput({ ...commentInput, [id]: event.target.value });
  };

  const displayComments = () =>
    commentsList.map((question, index) => (
      <ListItem
        fullWidth
        key={index}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          // justifyContent: 'space-between',
          p: '0px 0px 8px 0px',
        }}
      >
        <DisplayComment
          comment={question}
          handleCommentInput={handleCommentInput}
          getComments={getComments}
          setCommentInput={setCommentInput}
          newComment={commentInput}
        />
        <List sx={{ width: '100%' }}>
          {question.replied_comment_ids.map((reply, number) => (
            <ListItem fullWidth key={number} sx={{ p: '0px 0px 8px 20px' }}>
              <DisplayComment
                comment={reply}
                handleCommentInput={handleCommentInput}
                getComments={getComments}
                setCommentInput={setCommentInput}
                newComment={commentInput}
              />
            </ListItem>
          ))}
        </List>
      </ListItem>
    ));

  if (loading) return <div>Loading......</div>;
  return (
    <Card sx={{ minWidth: 275, maxWidth: 1169 }}>
      <CardContent>
        <AddNewComment
          id="8ebc6f07-a034-47ce-9176-1d00e9e856c1"
          handleCommentInput={handleCommentInput}
          getComments={getComments}
          setCommentInput={setCommentInput}
          newComment={commentInput}
        />
        <Box fullWidth>
          <List fullWidth>{displayComments()}</List>
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
