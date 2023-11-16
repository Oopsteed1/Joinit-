// forgotPassword.tsx
'use client';
import React from 'react'
import styles from '../forgotPassword/forgotPassword.module.scss'

export default function ForgotPassword() {
  const options = [
    { value: "+886", label: "+886" },
    { value: "+81", label: "+81" },
    { value: "+82", label: "+82" },
    { value: "+852", label: "+852" }
]
  return (
    <div className={styles.forgotPasswordContainer}>
      <div className={styles.titleContainer}>
        <p className={styles.title}>忘記密碼</p>
        <p className={styles.content}>請輸入您註冊Joinit帳號時綁定的手機號碼，我們將發送重設密碼的驗證碼至該手機。</p>
      </div>
      <div className={styles.forgotPasswordForm}>
        <div className={styles.forgotPasswordFormContainer}>
          <div className={styles.phoneNumber}>
            <select className={styles.selectCountry}>
              {options.map((option) => (
              <option key={option.value} value={option.value} data-country-code={option.label} className={styles.countryCode}>
                  {option.label}
              </option>
              ))}
            </select>
            <input type="text" placeholder='手機（必填）' className={styles.phoneNumberInput}/>
            <button className={styles.sentCodeBtn}>傳送驗證碼</button>
          </div>
          <div className={styles.verificationCode}>
            <input type="text" placeholder='手機驗證碼'/>
          </div>
        </div>
        <div className={styles.confirmContainer}>
          <button className={styles.confirmBtn}>送出驗證</button>
        </div>
      </div>
    </div>
    
  )
}
