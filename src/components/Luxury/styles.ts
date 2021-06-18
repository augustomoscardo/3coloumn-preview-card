import styled from "styled-components";

export const Container = styled.div`
  background: var(--very-dark-cyan);
  width: 20rem;

  padding: 1.5rem 2.5rem;

  display: flex;
  justify-content: space-between;
  flex-direction: column;

  button {
    color: var(--very-dark-cyan);

    &:hover {
      background: transparent;
      color: var(--very-light-gray);
      border: 2px solid #d7d7d7;
    }
  }
`