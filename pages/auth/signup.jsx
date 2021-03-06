/** @jsxImportSource theme-ui  */
import styles from '../../styles/Auth.module.css'
import AuthForm from '../../components/AuthForm'
import Link from 'next/link'
import Gradient from '../../components/Gradient'

export default function Signup () {
    return (
        <div sx={{ backgroundColor: "bg" }} className={styles.main}>
            <Gradient />
            <div className={styles.container}>
                <AuthForm 
                    head="Sign Up."
                    description="Create an account to set up your streaks!"
                    alt={<>Already have an account? <Link href="/auth/signin"><a>Login.</a></Link></>}
                    button="Sign Up"
                    fn="signup"
                />
            </div>
        </div>
    )
}