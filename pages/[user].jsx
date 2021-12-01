/** @jsxImportSource theme-ui */
import styles from "../styles/Dashboard.module.css";
import { useRouter } from "next/router";
import { H2 } from "../components/Headings";
import { FiSettings } from "react-icons/fi";
import { MdDarkMode } from "react-icons/md";
import { FaSignOutAlt } from "react-icons/fa";
import { BsPlusLg } from "react-icons/bs"
export default function Dashboard() {
  const router = useRouter();
  const { user } = router.query;
  return (
    <div sx={{ backgroundColor: "bg" }} className={styles.main}>
      <H2 SX={{ color: "primary" }}>{user}</H2>
      <ul className={styles.settings}>
        <li>
          <MdDarkMode className={styles.icon} />
        </li>
        <li>
          <FiSettings className={styles.icon} />
        </li>
        <li>
          <FaSignOutAlt className={styles.icon} />
        </li>
      </ul>
      <div className={styles.container} sx={{ backgroundColor: "bgTransparent" }}>
          <div className={styles.addStreaks}><BsPlusLg /></div>
        No streaks started yet, press the + to create a streak.
      </div>
    </div>
  );
}
