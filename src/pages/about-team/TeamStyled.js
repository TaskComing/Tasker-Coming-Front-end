import styled from 'styled-components';
import theme from '../../Theme/Theme';
import img from '../../assets/aboutTeam/Image.png';
// import wave from '../../assets/aboutTeam/Wave.png';

export const HeaderSection = styled.div`
  position: relative;
  background: url(${img});
  background-size: 'cover';
  background-repeat: 'no-repeat';
  background-position: 'center';
  height: 25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  border-radius: 0 0 10rem 10rem;
  margin-bottom: 2rem;
  color: ${theme.palette.primary.white};
  z-index: 0;
  @media screen and (max-width: ${theme.breakpoints.largeLaptop}) {
    height: 20rem;
  }
  @media screen and (max-width: ${theme.breakpoints.laptop}) {
    height: 15rem;
    font-size: 2.5rem;
  }
  @media screen and (max-width: ${theme.breakpoints.mobile}) {
    height: 10rem;
    font-size: 2rem;
  }
`;
// export const CoverSection = styled.div`
//   position: relative;
//   background-image: url(${wave});
//   width: 100%;
//   background-size: cover;
//   margin-top: 5rem;
//   margin-bottom: 5rem;
//   border: 1px solid red;
//   z-index: 999;
// `;
export const BoxStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 3rem;
  @media screen and (max-width: ${theme.breakpoints.laptop}) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const ImgStyle = styled.img`
  width: 15rem;
  height: 15rem;
  border-radius: 10%;
  margin-left: 1rem;
`;

export const MemberStyle = styled.div`
  display: flex;
  max-width: 50rem;
  padding: 2rem;
  align-items: center;
  justify-content: space-around;
  gap: 2rem;
  border: none;
  z-index: 1;
  box-shadow: 0 0 2rem 0 rgba(0, 0, 0, 0.2);
  border-radius: 4rem;
`;
export const InnerStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  gap: 1rem;
`;

export const NameStyle = styled.h3`
  font-size: clamp(2rem, 2.5vw, 3rem);
`;

export const PositionStyle = styled.p`
  font-size: clamp(1rem, 2vw, 1.5rem);
  color: ${theme.palette.font.pink};
  margin-left: 1rem;
`;
