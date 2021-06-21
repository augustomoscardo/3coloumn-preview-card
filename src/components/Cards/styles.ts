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

  @media (max-width: 450px) {
    height: initial;

    
  }

`

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: .5rem;
  overflow: hidden;

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

  @media (max-width: 450px) {
    display: flex;
    flex-direction: column;
    overflow: hidden;

    border-radius: .5rem;

  }
`

export const Footer = styled.div`
  max-width: 36rem;
  width: 100%;
  margin-top: 2rem;

  font-family: 'Lexend Deca', sans-serif;

  display: flex;
  justify-content: space-between;
  align-items: center;


  a {
    text-decoration: none;
    color: var(--dark-cyan);
    font-weight: bold;
    outline: none;

    transition: 200ms;

    &:hover {
      filter: brightness(0.6);
    }
  }

  @media (max-width: 450px) {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    
      width: 100%;

      p:first-child {
        margin-bottom: 1rem;
      }

      a {
        color: var(--dark-cyan);
      }
    }
`
