import { Container, Navigation } from './styles'
import logoImg from '../../assets/logo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'

export function Header() {
  return (
    <Container>
      <img src={logoImg} alt="" />

      <Navigation>
        <a href="/" target="_blank">
          <MapPin size={22} weight="fill" />
          Porto Alegre
        </a>

        <a href="/cart">
          <ShoppingCart size={22} weight="fill" />
        </a>
      </Navigation>
    </Container>
  )
}
