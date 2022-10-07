import {
  BenefitIconWrapper,
  Benefits,
  Container,
  Description,
  Title,
} from './styles'
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import heroImg from '../../assets/hero-section.png'

export function Hero() {
  return (
    <Container>
      <div>
        <div>
          <Title>Encontre o café perfeito para qualquer hora do dia</Title>

          <Description>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </Description>

          <Benefits>
            <li>
              <BenefitIconWrapper variant="yellow-dark">
                <ShoppingCart weight="fill" />
              </BenefitIconWrapper>
              Compra simples e segura
            </li>

            <li>
              <BenefitIconWrapper variant="gray">
                <Package weight="fill" />
              </BenefitIconWrapper>
              Embalagem mantém o café intacto
            </li>

            <li>
              <BenefitIconWrapper variant="yellow">
                <Timer weight="fill" />
              </BenefitIconWrapper>
              Entrega rápida e rastreada
            </li>

            <li>
              <BenefitIconWrapper variant="purple">
                <Coffee weight="fill" />
              </BenefitIconWrapper>
              O café chega fresquinho até você
            </li>
          </Benefits>
        </div>

        <img src={heroImg} alt="Um copo de café" />
      </div>
    </Container>
  )
}
