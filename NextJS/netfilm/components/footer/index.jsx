import React from 'react'
import Link from 'next/link'
import styles from './styles.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      Made with ❤️ by&nbsp;
      <Link href="https://github.com/murat-demirci" target="_blank">
        Murat Demirci
      </Link>
    </footer>
  )
}
