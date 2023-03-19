import { Avatar, List, ListItemAvatar, ListItem, ListItemText, Box } from '@mui/material';

const tempData = [
  {
    id: 0,
    name: 'John Smith',
    title: 'How can I return pacakge?',
    time: '12:45',
    avatar: 'img/defaultAvatar.svg',
  },
  {
    id: 1,
    name: 'Tim lee',
    title: 'What is the discount code?',
    time: '01:40',
    avatar: 'img/defaultAvatar.svg',
  },
  {
    id: 2,
    name: 'Wednesday',
    title: 'Question on quality',
    time: '03:15',
    avatar: 'img/defaultAvatar.svg',
  },
];

function Question() {
  return (
    <List>
      {tempData.map((item) => (
        <ListItem key={item.id}>
          <ListItemAvatar>
            <Avatar alt="" src={item.avatar} />
          </ListItemAvatar>
          <Box>
            <ListItemText>{item.name}</ListItemText>
            <ListItemText>{item.title}</ListItemText>
            <ListItemText>{item.time}</ListItemText>
          </Box>
        </ListItem>
      ))}
    </List>
  );
}

export default Question;
