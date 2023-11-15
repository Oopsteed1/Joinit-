import React from 'react'
import styles from '../forgotPassword/forgotPassword.module.scss'
import Image from 'next/image';

export default function ForgotPassword() {
  return (
    <div className={styles.forgotPasswordContainer}>
      <div className={styles.titleContainer}>
        <p className={styles.title}>重設密碼</p>
        <p className={styles.content}>密碼規則 : 英數混合 8 個以上的字元，包含至少 1 個大寫字母、1 個小寫字母及 1 個數字</p>
      </div>
      <div className={styles.resetForm}>
        <div className={styles.passwordContainer}>
            <input type="password" className={styles.password} name="password" placeholder='輸入密碼'/>
            <input type="password" className={styles.confirmPassword} name="password" placeholder='再次輸入密碼'/>
        </div>
      </div>
      <div className={styles.confirmContainer}>
        <button className={styles.confirmBtn}>確認修改</button>
      </div>
    </div>
  )
}
