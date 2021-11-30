import Navbar from "./Navigation"
import styles from '../styles/Components.module.css'

export default function Layout (props) {
    return (
        <div className={styles.layout}>
            <Navbar/>
            {props.children}
        </div>
    )
}