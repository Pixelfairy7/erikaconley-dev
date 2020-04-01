import React from "react"
import styles from "./layout.module.scss"
import { Link } from "gatsby"
import Header from "./header/header.js"
import SideMenu from "./sidemenu/sideMenu"

export default ({ children }) => (
  <section className={styles.container}>
    <Header />
    <SideMenu />
    {children}
  </section>
)
