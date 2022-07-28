import React from 'react'
import styles from "./Loginpage.module.css"

const Loginpage = () => {
  return (
    <div>
      <h1>Login page</h1>
      <div className={styles.googleContainer}>
        <p>Login with Google</p>
      </div>
    </div>
  )
}

export default Loginpage