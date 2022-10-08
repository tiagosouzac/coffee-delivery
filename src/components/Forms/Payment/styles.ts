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
    color: ${({ theme }) => theme['purple-500']};
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
  grid-template-columns: repeat(3, 1fr);
  gap: 0.75rem;

  button {
    padding: 16px;
    border: 0;
    border-radius: 6px;
    background-color: ${({ theme }) => theme['gray-400']};
    color: ${({ theme }) => theme['gray-700']};
    font-family: Roboto, sans-serif;
    font-size: 0.75rem;
    text-transform: uppercase;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 0.75rem;

    svg {
      color: ${({ theme }) => theme['purple-500']};
      font-size: 1rem;
    }
  }
`
