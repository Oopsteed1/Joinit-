// registerSuccess.tsx
'use client';
import React, { ChangeEvent, useState } from 'react';
import styles from '../registerSuccess/registerSuccess.module.scss'
import Image from 'next/image';
import closeIcon from '../../public/assets/icon/Close.png';
import passIcon from '../../public/assets/icon/StatusPass.png'

export default function RegisterSuccess() {
  return (
    <div className={styles.successContainer}>
        <div className={styles.close}>
            <button><Image src={closeIcon} alt="close" className={styles.closeIcon}/></button>
        </div>
        <div className={styles.container}>
            <div className={styles.pass}>
                <Image src={passIcon} alt="pass" className={styles.passIcon}/>
            </div>
            <div className={styles.contentContainer}>
                <p className={styles.title}>註冊成功！</p>
                <p className={styles.content}>感謝您成為我們的一員，現在您可以開始使用我們的服務。</p>
            </div>
        </div>
    </div>
  )
}
