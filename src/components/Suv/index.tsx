import suvIcon from '../../assets/icon-suvs.svg'

import { Container } from "./styles";

export function Suv() {

  return (
    <Container>
      <div>
        <header>
          <img src={suvIcon} alt="Suv Icon" />
          <h1>Suvs</h1>
        </header>
      </div>
      <div>
        <p>
        Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation 
        and off-road adventures.
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