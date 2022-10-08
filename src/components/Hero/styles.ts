import styled from 'styled-components'
import heroBg from '../../assets/bg-hero-section.svg'

export const Container = styled.section`
  padding: 5.75rem 0;
  background: url(${heroBg});

  & > div {
    width: 100%;
    max-width: 1120px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 3.5rem;
  }
`

export const Title = styled.h1`
  color: ${({ theme }) => theme['gray-900']};
  font-family: 'Baloo 2', sans-serif;
  font-size: 3rem;
  font-weight: 800;
  line-height: 4rem;
`

export const Description = styled.p`
  margin-top: 1rem;
  color: ${({ theme }) => theme['gray-800']};
  font-family: Roboto, sans-serif;
  font-size: 1.25rem;
  line-height: 1.5rem;
`

export const Benefits = styled.ul`
  margin-top: 4rem;
  list-style: none;
  display: grid;
  grid-template-columns: max-content max-content;
  column-gap: 2.5rem;
  row-gap: 1.25rem;

  li {
    color: ${({ theme }) => theme['gray-700']};
    font-family: Roboto, sans-serif;
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }
`

const BENEFIT_ICON_COLORS = {
  'yellow-dark': 'yellow-700',
  yellow: 'yellow-500',
  purple: 'purple-500',
  gray: 'gray-700',
} as const

type BenefitIconWrapperProps = {
  variant: keyof typeof BENEFIT_ICON_COLORS
}

export const BenefitIconWrapper = styled.div<BenefitIconWrapperProps>`
  width: 2rem;
  height: 2rem;
  border-radius: 2rem;
  background-color: ${({ theme, variant }) =>
    theme[BENEFIT_ICON_COLORS[variant]]};
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    color: ${({ theme }) => theme['gray-100']};
  }
`
