import styled from 'styled-components'

export const Container = styled.header`
  width: 100%;
  max-width: 1120px;
  padding: 32px 0;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Navigation = styled.nav`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  a {
    padding: 8px;
    border-radius: 6px;
    font-size: 14px;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.25rem;

    &:first-child {
      background-color: ${({ theme }) => theme['purple-300']};
      color: ${({ theme }) => theme['purple-700']};

      svg {
        color: ${({ theme }) => theme['purple-500']};
      }
    }

    &:last-child {
      background-color: ${({ theme }) => theme['yellow-300']};

      svg {
        color: ${({ theme }) => theme['yellow-500']};
      }
    }
  }
`
