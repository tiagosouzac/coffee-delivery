import styled from 'styled-components'

export const Container = styled.main`
  width: 100%;
  max-width: 1120px;
  padding: 2rem 0 10rem;
  margin: 0 auto;

  h2 {
    color: ${({ theme }) => theme['gray-800']};
    font-family: 'Baloo 2', sans-serif;
    font-size: 2rem;
    font-weight: 800;
  }
`

export const ProductsList = styled.section`
  margin-top: 54px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 2rem;
  row-gap: 2.5rem;
`
