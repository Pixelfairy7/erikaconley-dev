import React from "react"
import { Link } from "gatsby"
import styles from "./header.module.scss"

export default () => (
  <header className={styles.container}>
    <div className={styles.name}>
      <Link to="/">Erika</Link>
    </div>
  </header>
)
