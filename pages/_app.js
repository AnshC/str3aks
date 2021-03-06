import '../styles/globals.css'
import {ThemeProvider} from 'theme-ui'
import { theme } from '../src/theme'
import Layout from '../components/Layout'

function MyApp({ Component, pageProps }) {
  return(
    <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}

export default MyApp
