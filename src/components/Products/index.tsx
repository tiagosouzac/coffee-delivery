import { useEffect, useState } from 'react'
import { api } from '../../api'
import { Card } from './components/Card'

import { Container, ProductsList } from './styles'

export type Product = {
  id: number
  name: string
  description: string
  tags: string[]
  price: number
  image: string
}

export function Products() {
  const [products, setProducts] = useState<Product[]>([])

  const fetchProducts = async () => {
    const { data } = await api.get('/products')
    setProducts(data)
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  return (
    <Container>
      <h2>Nossos cafés</h2>

      <ProductsList>
        {products.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </ProductsList>
    </Container>
  )
}
