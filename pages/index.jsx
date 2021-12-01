/** @jsxImportSource theme-ui */
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { H1 } from '../components/Headings'
import Button from '../components/Buttons'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Str3aks</title>
        <meta name="description" content="A simple way to keep track of your streaks. Anytime, anywhere." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div sx={{ backgroundColor: "bg" }} className={styles.main}>
        <div className={styles.hero}>
          <div className={styles.gradient_green}></div>
          <div className={styles.gradient_blue}></div>
          <div className={styles.content}>
            <H1 SX={{ color: "primary" }}>
              STR3AKS
            </H1>
            <p sx={{ color: "text" }}>
              A simple way to keep track of 
              <br/>
              your streaks. Anytime, anywhere.
            </p>
            <div className={styles.buttons}>
              <Button to="/auth/signup" className={styles.button} width="150px" color="#55F680" textColor="#060A07">
                Start Now.
              </Button>
              <Button to="/auth/signin" className={styles.button} width="150px" color="#30FFCE" textColor="#060A07">
                Sign In.
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
