import { Header } from './components/Header'

import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import theme from './styles/theme/default'

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      <Header />
    </ThemeProvider>
  )
}
