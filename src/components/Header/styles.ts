import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const Container = styled.header`
  width: 100%;
  max-width: 1120px;
  padding: 2rem 0;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Logo = styled(NavLink)`
  &:focus {
    box-shadow: none;
  }
`

export const Navigation = styled.nav`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  a {
    padding: 0.5rem;
    border-radius: 6px;
    font-size: 0.875rem;
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
