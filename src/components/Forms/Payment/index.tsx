import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react'
import { Container, Description, Form } from './styles'

export function PaymentForm() {
  return (
    <Container>
      <Description>
        <CurrencyDollar size={22} />

        <div>
          <strong>Pagamento</strong>
          <p>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </p>
        </div>
      </Description>

      <Form>
        <button type="button">
          <CreditCard />
          Cartão de crédito
        </button>

        <button type="button">
          <Bank />
          Cartão de débito
        </button>

        <button type="button">
          <Money />
          Dinheiro
        </button>
      </Form>
    </Container>
  )
}
