import { styled } from '@mui/system';
import Avatar from '@mui/material/Avatar';
import Badge from '@mui/material/Badge';
import Typography from '@mui/material/Typography';
import SiderTab from './SiderTab';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    width: '20px',
    height: '18.57px',
    borderRadius: '50%',
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}));

const SiderContainer = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.primary.sider,
  width: '375px',
  height: '703px',
  borderRadius: '4px',
  padding: '36px 72px 21px 81px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '20px',
}));

function ProfileSider({ ...props }) {
  return (
    <SiderContainer>
      <StyledBadge
        overlap="circular"
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        variant="dot"
      >
        <Avatar
          alt="Remy Sharp"
          src="img/defaultAvatar.svg"
          sx={{ width: '120px', height: '120px' }}
        />
      </StyledBadge>
      <Typography variant="h1">User&apos;s Name</Typography>
      <SiderTab {...props} sx={{ width: '202px' }} />
    </SiderContainer>
  );
}

export default ProfileSider;
