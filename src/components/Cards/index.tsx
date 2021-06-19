import { Sedan } from '../Sedan'
import { Suv } from '../Suv'
import { Luxury } from '../Luxury'

import { Container, Content, Footer } from "./styles";

export function Cards() {

  return (
    <Container>
      <Content>
        <Sedan />
        <Suv />
        <Luxury />
      </Content>
      <Footer>
        <p>
          Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer">
            Frontend Mentor
          </a>.
        </p>
        <p>
          Coded by <a href="https://github.com/augustomoscardo" target="_blank" rel="noreferrer">
            Augusto Moscardo
          </a>.
        </p>
      </Footer>
    </Container>
  )
}