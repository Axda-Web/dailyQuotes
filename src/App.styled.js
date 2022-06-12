import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  0% {
    visibility: hidden;
  }

  100% {
    visibility: visible;
  }
`;

const fadeOut = keyframes`
  0% {
    visibility: visible;
  }

  100% {
    visibility: hidden;
  }
`;

export const Container = styled.div`
  width: 90%;
  max-width: 500px;
  margin: 20vh auto 40vh;
  font-family: "Roboto", sans-serif;
`;

export const Title = styled.h1`
  text-align: center;
  color: #fff;
  font-size: 2rem;
  margin-bottom: 1em;
  font-family: "Sriracha", cursive;
`;

export const QuoteApp = styled.div`
  color: ${({ color }) => color};
  background-color: white;
  padding: 2.5em;
  border-radius: 3px;
`;

export const QuoteContainer = styled.div`
  visibility: hidden;
  background-color: ${({ backgroundColor }) => backgroundColor};
  transition: visibility 3s ease-in-out;
  animation: ${fadeIn} 3s ease-in-out forwards;
`;

export const Quote = styled.blockquote`
  font-size: 1.5rem;
`;

export const Author = styled.span`
  margin-top: 1.25em;
  display: block;
  text-align: right;
  font-weight: 300;
  font-size: 0.875rem;
`;

export const Button = styled.button`
  padding: 0.725em 1.225em;
  transition: transform 0.3s;

  :hover {
    transform: scale(1.02);
  }
`;

export const Link = styled.button`
  padding: 0.725em 0.825em;
  transition: transform 0.3s;

  :hover {
    transform: scale(1.02);
  }
`;

export const ButtonContainer = styled.div`
  margin-top: 3em;
  display: flex;
  justify-content: space-between;
  color: #fff;
  font-size: 0.75rem;
  font-weight: 300;

  a,
  button {
    border: none;
    border-radius: 3px;
    cursor: pointer;
    color: #fff;
    background-color: ${({ backgroundColor }) => backgroundColor};
  }
`;
