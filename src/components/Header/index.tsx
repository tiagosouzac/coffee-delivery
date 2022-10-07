import { NavLink } from 'react-router-dom'

import { Container, Logo, Navigation } from './styles'
import logoImg from '../../assets/logo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'

export function Header() {
  return (
    <Container>
      <Logo to="/" title="Coffee Delivery | Início">
        <img src={logoImg} alt="" />
      </Logo>

      <Navigation>
        <a
          href="https://goo.gl/maps/Wxguowrm78oQvtZo6"
          title="Localização da cafeteria"
          target="_blank"
          rel="noreferrer"
        >
          <MapPin size={22} weight="fill" />
          Porto Alegre
        </a>

        <NavLink to="/checkout" title="Checkout">
          <ShoppingCart size={22} weight="fill" />
        </NavLink>
      </Navigation>
    </Container>
  )
}
