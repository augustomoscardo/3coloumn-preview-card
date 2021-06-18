import luxuryIcon from '../../assets/icon-luxury.svg'

import { Container } from "./styles";

export function Luxury() {

  return (
    <Container>
      <div>
        <header>
          <img src={luxuryIcon} alt="Luxury Icon" />
          <h1>Luxury</h1>
        </header>
      </div>
      <div>
        <p>
        Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury 
        rental and arrive in style.
        </p>
      </div>
      <div>
        <button>
        Learn More
        </button>
      </div>
    </Container>
  )
}