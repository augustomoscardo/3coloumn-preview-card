import styled from "styled-components";

export const Container = styled.main`
  max-width: 1440px;
  margin: 0 auto;
  padding: 2.5rem 1rem;

  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media (max-width: 775px) {
    display: flex;
    flex-direction: column;

    
  }

`

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 450px) {
    display: flex;
    flex-direction: column;
    overflow: visible;
  }

  border-radius: .5rem;
  overflow: hidden;
  background: red;

  header {
    padding: 1.5rem 0;
  }

  h1 {
    font-family: 'Big Shoulders Display', sans-serif;
    font-weight: 400;
    color: var(--very-light-gray);
    text-transform: uppercase;

    padding: 1.5rem 0;
  }
  
  p {
    font-family: 'Lexend Deca', sans-serif;
    color: var(--transparent-white);

    line-height: 1.5rem;
  }
`

export const Footer = styled.div`
  margin-top: 2rem;

  font-family: 'Lexend Deca', sans-serif;

  @media (max-width: 450px) {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      width: 100%;
    }

  a {
    text-decoration: none;
    
    transition: 700ms;

    &:hover {
      text-decoration: underline;
    }
  }

`
