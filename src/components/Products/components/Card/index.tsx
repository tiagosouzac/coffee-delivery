import { useMemo } from 'react'
import { priceFormatter } from '../../../../utils/priceFormatter'
import type { Product } from '../..'

import {
  AddToCartButton,
  Container,
  Footer,
  Input,
  Price,
  Tags,
} from './styles'
import { Minus, Plus, ShoppingCartSimple } from 'phosphor-react'

type Props = {
  product: Product
}

export function Card({ product }: Props) {
  const price = useMemo(() => {
    const priceParts = priceFormatter.formatToParts(product.price)

    return priceParts.reduce(
      (acc, part) => {
        if (part.type === 'currency') {
          return {
            ...acc,
            currency: part.value,
          }
        }

        if (
          part.type === 'integer' ||
          part.type === 'decimal' ||
          part.type === 'fraction'
        ) {
          return {
            ...acc,
            value: acc.value + part.value,
          }
        }

        return acc
      },
      { currency: '', value: '' },
    )
  }, [product])

  return (
    <Container>
      <img src={product.image} alt={product.name} />

      <Tags>
        {product.tags.map((tag) => (
          <span key={`${product.id}-${tag}`}>{tag}</span>
        ))}
      </Tags>

      <h3>{product.name}</h3>
      <p>{product.description}</p>

      <Footer>
        <Price>
          {price.currency} <span>{price.value}</span>
        </Price>

        <div>
          <Input>
            <button>
              <Minus size={14} />
            </button>

            <input type="number" min={1} />

            <button>
              <Plus size={14} />
            </button>
          </Input>

          <AddToCartButton>
            <ShoppingCartSimple size={22} weight="fill" />
          </AddToCartButton>
        </div>
      </Footer>
    </Container>
  )
}
