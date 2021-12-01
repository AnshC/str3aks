/** @jsxImportSource theme-ui */
import styles from '../styles/Components.module.css'
import Link from 'next/link'
import { H3 } from './Headings'
import {BsInfoCircleFill} from 'react-icons/bs'
import {AiFillHome} from 'react-icons/ai'
import { FaFire } from 'react-icons/fa'
export default function Navbar() {
    return (
        <div sx={{ color: "text" }} className={styles.navbar}>
            <Link href="/">
                <a>
                    <H3 SX={{ color: "primary" }}>
                        STR3AKS
                    </H3>
                </a>
            </Link>
            <ul>
                <li>
                    <Link href="/">
                        <a><AiFillHome className={styles.icon} />HOME</a>
                    </Link>
                </li>
                <li>
                    <Link href="/about">
                        <a><BsInfoCircleFill className={styles.icon}/>ABOUT</a>
                    </Link>
                </li>
                <li>
                    <Link href="/dashboard">
                        <a><FaFire className={styles.icon}/>DASHBOARD</a>
                    </Link>
                </li>
            </ul>
        </div>
    )
}