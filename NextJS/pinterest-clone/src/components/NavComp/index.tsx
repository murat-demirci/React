import React from 'react'
import styles from './nav.module.css'

export default function NavComp() {
  return (
    <nav className={styles.nav}>
        <div className={styles.brand}></div>
        <div className={styles.menu}>
            <div className={styles.links}></div>
            <div className={styles.buttons}></div>
        </div>
    </nav>
  )
}
