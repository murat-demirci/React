import React from 'react'
import styles from './top.module.css'

export default function TopComp() {
  return (
    <div className={[styles.top,'active'].join(' ')} id='top'>
        <div className={styles.topContent}>murat</div>
    </div>
  )
}
