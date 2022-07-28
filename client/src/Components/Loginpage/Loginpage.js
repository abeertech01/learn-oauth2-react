import React from "react"
import styles from "./Loginpage.module.css"

const Loginpage = () => {
  return (
    <div className={styles.loginPage}>
      <h1>Login page</h1>
      <div className={styles.loginForm}>
        <div className={styles.googleContainer}>
          <p>Login with Google</p>
        </div>
      </div>
    </div>
  )
}

export default Loginpage
