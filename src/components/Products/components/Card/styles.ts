import styled from 'styled-components'

export const Container = styled.div`
  padding: 6.25rem 1.25rem 1.25rem;
  border-radius: 6px 36px 6px 36px;
  background-color: ${({ theme }) => theme['gray-200']};
  position: relative;

  img {
    transform: translateX(-50%);
    position: absolute;
    top: -1.25rem;
    left: 50%;
  }

  h3 {
    margin-bottom: 0.5rem;
    color: ${({ theme }) => theme['gray-800']};
    font-family: 'Baloo 2', sans-serif;
    font-size: 1.25rem;
    line-height: 1.625rem;
    font-weight: 700;
    text-align: center;
  }

  p {
    color: ${({ theme }) => theme['gray-600']};
    font-family: Roboto, sans-serif;
    font-size: 0.875rem;
    line-height: 1.125rem;
    text-align: center;
  }
`

export const Tags = styled.div`
  margin: 0.75rem 0 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;

  span {
    padding: 0.25rem 0.5rem;
    border-radius: 20px;
    background-color: ${({ theme }) => theme['yellow-300']};
    color: ${({ theme }) => theme['yellow-700']};
    font-family: Roboto, sans-serif;
    font-size: 0.625rem;
    font-weight: 700;
    text-transform: uppercase;
  }
`

export const Footer = styled.div`
  padding: 0 4px;
  margin-top: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > div {
    display: flex;
    gap: 0.5rem;
  }
`

export const Price = styled.span`
  font-family: Roboto, sans-serif;
  font-size: 0.875rem;
  line-height: 1.125rem;

  span {
    font-family: 'Baloo 2', sans-serif;
    font-size: 1.5rem;
    line-height: 2rem;
    font-weight: 800;
  }
`

export const Input = styled.div`
  max-width: 4.5rem;
  height: 38px;
  padding: 0.5rem;
  border-radius: 6px;
  background-color: ${({ theme }) => theme['gray-400']};
  display: flex;
  align-items: center;

  button {
    border: 0;
    background-color: transparent;
    line-height: 0;
    cursor: pointer;

    svg {
      color: ${({ theme }) => theme['purple-500']};
    }
  }

  input {
    width: 100%;
    margin: 0 4px;
    border: 0;
    background-color: transparent;
    color: ${({ theme }) => theme['gray-900']};
    font-family: Roboto, sans-serif;
    line-height: 0;
    text-align: center;

    &::-webkit-calendar-picker-indicator {
      display: none !important;
      -webkit-appearance: none;
    }

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
    }
  }
`

export const AddToCartButton = styled.button`
  padding: 0.5rem;
  border: 0;
  border-radius: 6px;
  background-color: ${({ theme }) => theme['purple-700']};
  line-height: 0;

  svg {
    color: ${({ theme }) => theme['gray-200']};
  }
`
