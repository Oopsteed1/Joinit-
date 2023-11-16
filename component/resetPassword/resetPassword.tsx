// resetPassword.tsx
'use client';
import React, { useState } from 'react'
import styles from '../resetPassword/resetPassword.module.scss'

export default function ResetPassword() {
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  const [isConfirmPasswordFocused, setIsConfirmPasswordFocused] = useState(false);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const isConfirmBtnDisabled = !(password !== '' && confirmPassword !== '');
  
  const handlePasswordFocus = () => {
    setIsPasswordFocused(true);
  };

  const handleConfirmPasswordFocus = () => {
    setIsConfirmPasswordFocused(true);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setPassword(value);
    setIsPasswordFocused(false);
  };

  const handleConfirmPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setConfirmPassword(value);
    setIsConfirmPasswordFocused(false)
  };

  const handleNextBtnClick = () => {
    console.log('Next button clicked!');
  };

  
  return (
    <div className={styles.resetPasswordContainer}>
      <div className={styles.titleContainer}>
        <p className={styles.title}>重設密碼</p>
        <p className={styles.content}>密碼規則 : 英數混合 8 個以上的字元，包含至少 1 個大寫字母、1 個小寫字母及 1 個數字</p>
      </div>
      <div className={styles.resetForm}>
        <div className={styles.passwordContainer}>
            <input type="password" className={`${styles.password} ${isPasswordFocused ? styles.focused : ''}`} name="password" placeholder='輸入密碼'onFocus={handlePasswordFocus} onChange={handlePasswordChange} value={password}/>
            <input type="password" className={`${styles.confirmPassword} ${isConfirmPasswordFocused ? styles.focused : ''}`} name="password" placeholder='再次輸入密碼' onFocus={handleConfirmPasswordFocus} onChange={handleConfirmPasswordChange} value={confirmPassword}/>
        </div>
      </div>
      <div className={styles.confirmContainer}>
        <button className={`${styles.confirmBtn} ${isConfirmBtnDisabled ? styles.disabled : ''}`} onClick={handleNextBtnClick} disabled={isConfirmBtnDisabled}>確認修改</button>
      </div>
    </div>
  )
}
