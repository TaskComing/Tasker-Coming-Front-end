import styled from 'styled-components';
import theme from '../../Theme/Theme';

export const HeaderSection = styled.section`
  display: flex;
  align-items: flex-start;
`;

export const GoogleButton = styled.button`
  background-color: #916df9;
  height: 55px;
  width: 100%;
  border-radius: 10px;
  margin-top: 20px;
  margin-bottom: 10px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: start;
  max-width: 56rem;
  @media screen and (max-width: ${theme.breakpoints.largeLaptop}) {
    max-width: 46rem;
  }
  @media screen and (max-width: ${theme.breakpoints.laptop}) {
    max-width: 36rem;
  }
  @media screen and (max-width: ${theme.breakpoints.mobile}) {
    max-width: 26rem;
  }
`;

export const Input = styled.input`
  font-size: clamp(1rem, 2vw, 1.5rem);
  height: 5rem;
  border-radius: 1rem;
  border: 1px solid ${theme.palette.primary.lightGray};
`;
