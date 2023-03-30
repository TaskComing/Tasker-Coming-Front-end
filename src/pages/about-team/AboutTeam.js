import React from 'react';
import { Section, Text } from '../../Theme/globalStyles';
import {
  HeaderSection,
  ImgStyle,
  BoxStyle,
  MemberStyle,
  InnerStyle,
  NameStyle,
  PositionStyle,
} from './TeamStyled';
import Members from './Members';

function AboutTeam() {
  return (
    <div>
      <HeaderSection>Meet Our Team Members</HeaderSection>
      {/* <CoverSection /> */}
      <div>
        <Section>
          <BoxStyle>
            {Members.map((member, index) => (
              <MemberStyle key={index}>
                <ImgStyle src={member.avatar} alt="pic" />
                <InnerStyle>
                  <NameStyle>{member.name}</NameStyle>
                  <PositionStyle>{member.position}</PositionStyle>
                  <Text style={{ marginLeft: '1rem' }}>{member.description}</Text>
                </InnerStyle>
              </MemberStyle>
            ))}
          </BoxStyle>
        </Section>
      </div>
    </div>
  );
}

export default AboutTeam;
