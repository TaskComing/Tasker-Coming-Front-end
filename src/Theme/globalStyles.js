import styled, { createGlobalStyle } from 'styled-components';
import theme from './Theme';

const GlobalStyle = createGlobalStyle`
  html {
    // 1rem = 10px
    font-size: 62.5%;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }
`;

// default Container
export const Container = styled.div`
  display: flex;
  align-items: ${({ align }) => align || 'center'};
  justify-content: ${({ justify }) => justify || 'center'};
  flex-direction: ${({ direction }) => direction || 'column'};
  max-width: 130rem;

  @media screen and (max-width: ${theme.breakpoints.largeLaptop}) {
    max-width: 100rem;
    padding: 0 3rem;
  }
  @media screen and (max-width: ${theme.breakpoints.laptop}) {
    max-width: 70rem;
    padding: 0 2rem;
  }
  @media screen and (max-width: ${theme.breakpoints.mobile}) {
    max-width: 30rem;
    padding: 0 1rem;
  }
`;

// default H1
export const MainHeading = styled.h1`
  font-size: clamp(2rem, 2.5vw, 4rem);
  margin-bottom: 2rem;
  color: ${({ color }) => color || `${theme.palette.font.black}`};
  width: 100%;
  text-align: center;
`;

// default text
export const Text = styled.text`
  font-size: clamp(1rem, 2vw, 1.5rem);
  color: ${({ color }) => color || `${theme.palette.font.black}`};
  margin: ${({ margin }) => margin || '0.5rem 0'};
  width: ${({ width }) => width || '100%'};
`;

// default section
export const Section = styled.section`
  display: flex;
  flex-direction: ${({ direction }) => direction || 'row'};
  font-size: clamp(1rem, 2vw, 1.5rem);
  align-items: ${({ align }) => align || 'center'};
  justify-content: ${({ justify }) => justify || 'center'};
`;

// default span
export const TextWrapper = styled.span`
  display: flex;
  flex-direction: ${({ direction }) => direction || 'row'};
  align-items: ${({ align }) => align || 'center'};
  justify-content: ${({ justify }) => justify || 'center'};
  color: ${({ color }) => color || `${theme.palette.font.black}`};
  font-size: ${({ size }) => size || '1.4rem'};
`;

// button
export const Button = styled.button`
  background-color: ${theme.palette.button.purpleBtn};
  border-radius: 0.5rem;
  padding: ${({ padding }) => padding || '1rem 1rem'};
  margin: ${({ margin }) => margin || '1rem'};
  color: ${({ inverse }) =>
    inverse ? `${theme.palette.font.black}` : `${theme.palette.font.white}`};
  font-size: clamp(1rem, 2vw, 1.5rem);
  text-decoration: none;
  border: none;
  cursor: pointer;
  overflow: hidden;
  &:before {
    content: '';
    position: absolute;
  }
  &:hover:before {
    height: auto;
  }
  &:hover {
    transform: scale(1.1);
    color: black;
  }
  @media screen and (max-width: ${theme.breakpoints.largeLaptop}) {
    padding: ${({ padding }) => padding || '0.6rem 0.6rem'};
    margin: ${({ margin }) => margin || '0.6rem'};
  }
  @media screen and (max-width: ${theme.breakpoints.laptop}) {
    padding: ${({ padding }) => padding || '0.4rem 0.4rem'};
    margin: ${({ margin }) => margin || '0.4rem'};
  }
  @media screen and (max-width: ${theme.breakpoints.mobile}) {
    padding: ${({ padding }) => padding || '0.2rem 0.2rem'};
    margin: ${({ margin }) => margin || '0.2rem'};
  }
`;

export default GlobalStyle;
