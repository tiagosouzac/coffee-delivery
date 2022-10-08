import { MapPinLine } from 'phosphor-react'
import { Container, Description, Form } from './styles'

export function ShippingForm() {
  return (
    <Container>
      <Description>
        <MapPinLine size={22} />

        <div>
          <strong>Endereço de entrega</strong>
          <p>Informe o endereço onde deseja receber seu pedido</p>
        </div>
      </Description>

      <Form>
        <input type="text" name="cep" placeholder="CEP" required />
        <input type="text" name="street" placeholder="Rua" required />
        <input type="text" name="number" placeholder="Número" required />
        <input type="text" name="complement" placeholder="Complemento" />
        <input type="text" name="neighborhood" placeholder="Bairro" required />
        <input type="text" name="city" placeholder="Cidade" required />
        <input type="text" name="state" placeholder="UF" required />
      </Form>
    </Container>
  )
}
