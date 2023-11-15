// login.tsx
'use client';
import React, { useEffect, useState } from 'react'
import styles from '../login/login.module.scss'
import Image from 'next/image';
import closeIcon from '../../public/assets/icon/Close.png';
import joinitLogo from '../../public/assets/icon/BG.png';
import facebookIcon from '../../public/assets/icon/Facebook.png';
import googleIcon from '../../public/assets/icon/Google.png';
import lineIcon from '../../public/assets/icon/Line.png';

export default function Login() {

    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [isNextBtnDisabled, setIsNextBtnDisabled] = useState(true);
    const [isNameFocused, setIsNameFocused] = useState(false);
    const [isPasswordFocused, setIsPasswordFocused] = useState(false);
    const [subscribeChecked, setSubscribeChecked] = useState(false);
    
    const handleNameFocus = () => {
      setIsNameFocused(true);
    };
    
    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value;
      setName(value);
      setIsNameFocused(false);
      setIsNextBtnDisabled(!(value !== '' && password !== ''));
    };
    
    const handleSubscribeChange = () => {
        setSubscribeChecked(!subscribeChecked);
      };

    const handlePasswordFocus = () => {
      setIsPasswordFocused(true);
    };
    
    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value;
      setPassword(value);
      setIsPasswordFocused(false);
      setIsNextBtnDisabled(!(name !== '' && value !== ''));
    };
    const handleNextBtnClick = () => {
        console.log('Next button clicked!');
      };

  return (
    <div className={styles.loginContainer}>
        <div className={styles.close}>
            <button><Image src={closeIcon} alt="close" className={styles.closeIcon}/></button>
        </div>
        <div className={styles.joinitLogo}>
            <Image src={joinitLogo} alt='joinitLogo'/>
        </div>
        <div className={styles.titleContainer}>
            <p className={styles.title}>歡迎光臨 Joinit！</p>
        </div>
        <div className={styles.loginform}>
            <div className={styles.accountContainer}>
                <input type="text" name="name" className={`${styles.name} ${isNameFocused ? styles.focused : ''}`} placeholder='手機號碼' onFocus={handleNameFocus} onChange={handleNameChange} value={name} />
                <div className={styles.checkbox}>
                    <label className={styles.checkboxLabel}>
                    <span className={styles.inputCheckboxContainer}>
                        <input type="checkbox" className={styles.inputCheckbox} checked={subscribeChecked} onChange={handleSubscribeChange}/>
                        <div className={styles.checkboxIcon}></div>
                        <p className={styles.rememberAccount}>記住帳號</p>
                    </span>
                    </label>
                </div>
            </div>
            <div className={styles.passwordContainer}>
                <input type="password" name="password" className={`${styles.password} ${isPasswordFocused ? styles.focused : ''}`} placeholder='密碼' onFocus={handlePasswordFocus} onChange={handlePasswordChange} value={password}/>
                <div className={styles.forgotPasswordContainer}>
                    <a href="/" className={styles.forgotPassword}>忘記密碼？</a>
                </div>
            </div>
        </div>
        <div className={styles.next}>
            <button className={`${styles.nextBtn} ${isNextBtnDisabled ? styles.disabled : ''}`} onClick={handleNextBtnClick} disabled={isNextBtnDisabled}>登入</button>
        </div>
        <div className={styles.linkAccount}>
            <div className={styles.hasNoAccount}>
                <p className={styles.noAccount}>還未加入 Joinit？ <a href='/' className={styles.noAccountLink}>請點此註冊</a></p>
            </div>
            <div className={styles.borderLine}>
                    <p className={styles.or}>或</p>
            </div>
            <div className={styles.linkAccount}>
                <Image src={googleIcon} alt='googleIcon' className={styles.linkIcon}/>
                <Image src={facebookIcon} alt='facebookIcon' className={styles.linkIcon}/>
                <Image src={lineIcon} alt='lineIcon' className={styles.linkIcon}/>
            </div>
        </div>
    </div>
  )
}
