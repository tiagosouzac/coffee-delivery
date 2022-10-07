import styled from 'styled-components'
import heroBg from '../../assets/bg-hero-section.svg'

export const Container = styled.section`
  padding: 92px 0;
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
  font-size: 48px;
  font-weight: 800;
  line-height: 62px;
`

export const Description = styled.p`
  margin-top: 16px;
  color: ${({ theme }) => theme['gray-800']};
  font-family: Roboto, sans-serif;
  font-size: 20px;
  font-weight: 400;
  line-height: 26px;
`

export const Benefits = styled.ul`
  margin-top: 66px;
  list-style: none;
  display: grid;
  grid-template-columns: max-content max-content;
  column-gap: 40px;
  row-gap: 20px;

  li {
    color: ${({ theme }) => theme['gray-700']};
    font-family: Roboto, sans-serif;
    font-size: 16px;
    font-weight: 400;
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
  width: 32px;
  height: 32px;
  border-radius: 32px;
  background-color: ${({ theme, variant }) =>
    theme[BENEFIT_ICON_COLORS[variant]]};
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    color: ${({ theme }) => theme['gray-100']};
  }
`
