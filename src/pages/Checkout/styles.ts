import styled from 'styled-components'

export const Container = styled.div`
  max-width: 1120px;
  margin: 40px auto;
`

export const ShippingTitle = styled.strong`
  margin-bottom: 1rem;
  color: ${({ theme }) => theme['gray-800']};
  font-family: 'Baloo 2', sans-serif;
  font-size: 1.125rem;
  font-weight: 700;
  line-height: 1.5rem;
  display: block;
`
