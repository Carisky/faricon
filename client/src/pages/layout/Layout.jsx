import React from 'react'
import styles from "./styles.module.css"
import Navigation from "../../Components/Navigation/Navigation"

export default function Layout({children}) {
  return (

    <div className={styles.layout}>
      <Navigation/>
      {children}
    </div>

  )
}
