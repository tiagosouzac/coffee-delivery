import styled from 'styled-components'

export const Container = styled.form`
  max-width: 1120px;
  margin: 40px auto;
  display: flex;
`

export const ShippingContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
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
