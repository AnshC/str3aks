/** @jsxImportSource theme-ui */
import styles from '../styles/Components.module.css'
import { H2 } from './Headings'
import { FaFire } from 'react-icons/fa'
export default function AuthForm(props) {
    function formSubmit (e) {
        e.preventDefault();
        if (props.fn === "signin") {
            console.log("sign in")
        } else if (props.fn === "signup") {
            console.log("sign up")
        }
    }
    return (
        <div>
            <form className={styles.form} sx={{ backgroundColor: "bgTransparent" }}>
                <H2 SX={{ color: "primary" }}>{props.head}</H2>
                <p className={styles.desc}>{props.description}</p>
                <p>{props.alt}</p>
                <div className={styles.values}>
                    <label htmlFor="email">Email</label>
                    <input sx={{ backgroundColor: "bgTransparent", color: "text" }} type="text" id="email" placeholder="example@mail.com"/>
                    <label htmlFor="password">Password</label>
                    <input sx={{ backgroundColor: "bgTransparent", color: "text" }} type="password" id="password" placeholder="Something secret."/>
                </div>
                <button onClick={((e)=>{formSubmit(e)})}><FaFire className={styles.icon} />{props.button}</button>
            </form>
        </div>
    )
}