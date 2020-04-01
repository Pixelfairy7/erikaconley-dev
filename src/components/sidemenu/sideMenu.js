import React from "react"
import { Link } from "gatsby"
import styles from "./sideMenu.module.scss"

export default () => (
  <nav className={styles.container}>
    <Link to="/">Erika</Link>
    <Link to="/">About</Link>
  </nav>
)
