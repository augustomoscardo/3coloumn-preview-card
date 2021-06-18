import sedanIcon from '../../assets/icon-sedans.svg'

import { Container } from "./styles";

export function Sedan() {

  return (
    <Container>
      <div>
        <header>
          <img src={sedanIcon} alt="Sedans Icon" />
          <h1>Sedans</h1>
        </header>
      </div>
      <div>
        <p>
        Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city 
        or on your next road trip.
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