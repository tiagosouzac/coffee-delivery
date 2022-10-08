import { ShippingForm } from '../../components/Forms/Shipping'
import { Container, ShippingTitle } from './styles'

export function Checkout() {
  return (
    <Container>
      <ShippingTitle>Complete seu pedido</ShippingTitle>
      <ShippingForm />
    </Container>
  )
}
