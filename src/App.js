import { GlobalStyles, Wrapper, Container } from './App.styles'
import { Footer } from './components/footer/Footer'
import { Header } from './components/header/Header'
import { Main } from './components/main/Main'

export const App = () => {
  return (
    <>
      <GlobalStyles />
      <Wrapper>
        <Container>
          <Header />
          <Main />
          <Footer />
        </Container>
      </Wrapper>
    </>
  )
}
