/** @jsxImportSource theme-ui */
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { H1 } from '../components/Headings'
import Button from '../components/Buttons'
import Gradient from '../components/Gradient'
import { FaFire, FaSignInAlt } from 'react-icons/fa'

export default function Home(props) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Str3aks</title>
        <meta name="description" content="A simple way to keep track of your streaks. Anytime, anywhere." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div sx={{ backgroundColor: "bg" }} className={styles.main}>
        <div className={styles.hero}>
          <Gradient />
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
              <Button to="/auth/signup" className={styles.button} width="160px" textColor="#060A07">
                <FaFire className={styles.icon}/>Start Now.
              </Button>
              <Button to="/auth/signin" className={styles.button} width="160px" textColor="#060A07">
                <FaSignInAlt className={styles.icon} />Sign In.
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

/* export async function getStaticProps(context) {
  const data = await fetch('')
    .then(res => res.json())
    .then((data) => {
      return data
    })
    return {
      props: {
        data
      }
    }
} */