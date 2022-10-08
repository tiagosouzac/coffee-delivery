import { PaymentForm } from '../../components/Forms/Payment'
import { ShippingForm } from '../../components/Forms/Shipping'
import { Container, ShippingContainer, ShippingTitle } from './styles'

export function Checkout() {
  return (
    <Container>
      <ShippingContainer>
        <div>
          <ShippingTitle>Complete seu pedido</ShippingTitle>
          <ShippingForm />
        </div>

        <PaymentForm />
      </ShippingContainer>
    </Container>
  )
}
