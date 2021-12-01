import Link from 'next/link'
import styles from '../styles/Components.module.css'

export default function Button (props) {
    const styles = {
        width: props.width,
        height: props.height || '',
        backgroundColor: props.color,
        color: props.textColor || 'black',
        padding: props.padding || '5px 10px 5px 10px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        borderRadius: props.borderRadius || '10px',
        fontSize: props.fontSize || '22px'
    }
    return (
        
            <Link href={props.to}>
                <a  style={styles} className={props.className}>
                    {props.children}
                </a>
            </Link>
    )
}