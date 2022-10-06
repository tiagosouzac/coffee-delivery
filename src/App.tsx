import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import theme from './styles/theme/default'

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      <h1>Hello, World!</h1>
    </ThemeProvider>
  )
}
