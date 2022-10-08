import styled from 'styled-components'

export const Container = styled.section`
  padding: 2.5rem;
  border-radius: 6px;
  background-color: ${({ theme }) => theme['gray-200']};
`

export const Description = styled.div`
  margin-bottom: 2rem;
  display: flex;
  gap: 0.5rem;

  svg {
    color: ${({ theme }) => theme['yellow-700']};
  }

  & > div {
    strong {
      color: ${({ theme }) => theme['gray-800']};
      font-family: Roboto, sans-serif;
      font-weight: 400;
      line-height: 1.5rem;
    }

    p {
      color: ${({ theme }) => theme['gray-700']};
      font-family: Roboto, sans-serif;
      font-size: 0.875rem;
      line-height: 1.125rem;
    }
  }
`

export const Form = styled.div`
  display: grid;
  grid-template-columns: 200px 276px 60px;
  column-gap: 0.75rem;
  row-gap: 1rem;

  input {
    padding: 0.75rem;
    border: 1px solid ${({ theme }) => theme['gray-400']};
    border-radius: 4px;
    background-color: ${({ theme }) => theme['gray-300']};
    color: ${({ theme }) => theme['gray-700']};
    font-family: Roboto, sans-serif;
    font-size: 0.875rem;
    line-height: 1.125rem;

    &::placeholder {
      color: ${({ theme }) => theme['gray-600']};
    }

    &[name='cep'] {
      grid-area: 1/1;
    }

    &[name='street'] {
      grid-area: 2/1/2/4;
    }

    &[name='number'] {
      grid-area: 3/1/3/2;
    }

    &[name='complement'] {
      grid-area: 3/2/3/4;
    }

    &[name='neighborhood'] {
      grid-area: 4/1/4/2;
    }

    &[name='city'] {
      grid-area: 4/2/4/3;
    }

    &[name='state'] {
      grid-area: 4/3/4/4;
    }
  }
`
