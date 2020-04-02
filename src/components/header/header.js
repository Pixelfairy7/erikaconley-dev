import React from "react"
import { Link } from "gatsby"
import styles from "./header.module.scss"

export default () => (
  <header className={styles.container}>
    <div className={styles.name}>
      <Link to="/" className={styles.nav}>
        Eri<span className={styles.nameAccent}>k</span>a
      </Link>
    </div>
    <nav>
      <ul>
        <li>
          <Link to="/about" className={styles.nav}>
            About
          </Link>
        </li>
        <li>
          <Link to="/" className={styles.nav}>
            Projects
          </Link>
        </li>
        <li>
          <Link to="/" className={styles.nav}>
            Blog
          </Link>
        </li>
      </ul>
    </nav>
  </header>
)
