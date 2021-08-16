import Link from "next/link";
import styles from "../styles/Navbar.module.css"

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <h2>Random</h2>
      <div>
        <Link href="/">
          <a className={styles.link}>Main</a>
        </Link>
        <Link href="/about">
          <a className={styles.link}>About</a>
        </Link>
        <Link href="/team">
          <a className={styles.link}>Team</a>
        </Link>
      </div>
    </nav>
  );
}
