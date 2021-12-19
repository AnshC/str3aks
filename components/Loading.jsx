import styles from '../styles/Components.module.css'
import { H1 } from '../components/Headings'
import { FaCircleNotch } from 'react-icons/fa'
import Gradient from './Gradient'
export default function Loading (props) {
    return (
        <div className={styles.loading}>
            <Gradient />
            <div>
                <H1 className={styles.loadingHead} SX={{ color: "primary" }}>
                    {props.text || "Loading"} <FaCircleNotch className={styles.loadingIcon} />
                </H1>
                <p>{props.desc}</p>
            </div>
        </div>
    )
}