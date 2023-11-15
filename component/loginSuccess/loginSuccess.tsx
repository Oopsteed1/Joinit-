import React from 'react'
import styles from '../loginSuccess/loginSuccess.module.scss'
import Image from 'next/image';
import closeIcon from '../../public/assets/icon/Close.png';
import passIcon from '../../public/assets/icon/StatusPass.png'

export default function LoginSuccess() {
  return (
    <div className={styles.loginSuccessContainer}>
        <div className={styles.close}>
            <button><Image src={closeIcon} alt="close" className={styles.closeIcon}/></button>
        </div>
        <div className={styles.container}>
            <div className={styles.pass}>
                <Image src={passIcon} alt="pass" className={styles.passIcon}/>
            </div>
            <div className={styles.contentContainer}>
                <p className={styles.content}>歡迎回來 Joinit！</p>
            </div>
        </div>
    </div>
  )
}
