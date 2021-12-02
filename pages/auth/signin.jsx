/** @jsxImportSource theme-ui  */
import styles from '../../styles/Auth.module.css'
import AuthForm from '../../components/AuthForm'
import Link from 'next/link'
import Gradient from '../../components/Gradient'

export default function Signin () {
    return (
        <div sx={{ backgroundColor: "bg" }} className={styles.main}>
            <Gradient />
            <div className={styles.container}>
                <AuthForm 
                    head="Sign In."
                    description="Sign in to check out your streaks!"
                    alt={<>Don't have an account? <Link href="/auth/signup"><a>Create one.</a></Link></>}
                    button="Sign In"
                    fn="signin"
                />
            </div>
        </div>
    )
}