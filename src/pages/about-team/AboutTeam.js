import React from 'react';
import { Helmet } from 'react-helmet';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import top from '../../assets/images/top.jpg';
import Members from './Members';
import './AboutTeam.css';

function AboutTeam() {
  return (
    <div>
      <Helmet>
        <title>About our team</title>
        <meta name="description" content="Description" />
        <meta name="theme-color" content="#008f68" />
      </Helmet>
      <Box
        class="top"
        style={{
          backgroundImage: `url(${top})`,
          backgroundSize: 'cover',
          height: '40%',
        }}
      >
        <h3 className="title">Meet Our Team Members</h3>
      </Box>
      <div className="container">
        {Members.map((member) => (
          <div className="card">
            <img src={member.avatar} alt="avatar" />
            <div className="introduction">
              <Typography
                variant="body1"
                component="p"
                style={{ lineHeight: '1rem', fontWeight: 500 }}
              >
                {member.name}
              </Typography>
              <Typography variant="body2" component="p">
                {member.responsibilities}
              </Typography>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AboutTeam;
