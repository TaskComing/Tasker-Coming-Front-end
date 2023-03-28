import React from 'react';
import { Section, Text } from '../../Theme/globalStyles';
import { HeaderSection, CoverSection, ImgStyle, BoxStyle, MemberStyle } from './TeamStyled';
import Members from './Members';

function AboutTeam() {
  return (
    <div>
      <HeaderSection>Meet Our Team Members</HeaderSection>
      <CoverSection />
      <div>
        <Section>
          <BoxStyle>
            {}
            <MemberStyle>
              <ImgStyle src={Members[0].avatar} alt="pic" />
              <div>
                <h3>{Members[0].name}</h3>
                <h4>{Members[0].position}</h4>
                <Text>{Members[0].description}</Text>
              </div>
            </MemberStyle>
          </BoxStyle>
        </Section>
      </div>
    </div>
  );
}

export default AboutTeam;
