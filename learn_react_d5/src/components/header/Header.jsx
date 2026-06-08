import React from 'react'
import styles from './Header.module.css'

const Header = () => {
  return (
    <div className={styles.hdr}>
        <h3>This is the Header.</h3>
        <button className={styles.btn}>Log in</button>
    </div>
  )
}

export default Header;