// mobileRegister.tsx
'use client';
import React, { ChangeEvent, useState } from 'react';
import styles from './mobileRegister.module.scss';
import Image from 'next/image';
import closeIcon from '../../public/assets/icon/Close.png';
import joinitLogo from '../../public/assets/icon/BG.png';

export default function MobileRegister() {

  const [isFocused, setIsFocused] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [isNextBtnDisabled, setIsNextBtnDisabled] = useState(true);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValue(value);
    setIsNextBtnDisabled(value === '');
    setIsFocused(false); 
  };

  const handleNextBtnClick = () => {
    console.log('Next button clicked!');
  };

  return (
    <div className={styles.mobileRegisterContainer}>
            <div className={styles.close}>
                <button><Image src={closeIcon} alt="close" /></button>
            </div>
            <div className={styles.joinitLogo}>
                <Image src={joinitLogo} alt='joinitLogo'/>
            </div>
            <div className={styles.title}>
                <p className={styles.subtitle}>手機驗證</p>
                <p className={styles.content}>已寄送驗證碼至您上一步所填寫的手機號碼</p>
            </div>
            <div className={styles.registerForm}>
                <input type="text" className={`${styles.phonenumber} ${isFocused ? styles.focused : ''}`} placeholder='輸入手機驗證碼' onFocus={handleFocus} onChange={handleChange} value={inputValue}/>
                <div className={styles.resentCode}>
                  <p className={styles.noCode}>收不到手機驗證碼嗎?</p>
                  <a href="/" className={styles.resent}>重新發送</a>
                </div>
            </div>
            <div className={styles.next} >
            <button className={`${styles.nextBtn} ${isNextBtnDisabled ? styles.disabled : ''}`} onClick={handleNextBtnClick} disabled={isNextBtnDisabled}>送出驗證，加入 Joinit</button>
            </div>
            <div className={styles.back}>
              <button className={styles.backBtn}>上一步</button>
            </div>
    </div>
  );
};