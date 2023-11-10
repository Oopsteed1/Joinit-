// register/tsx
import React, { ChangeEvent, useState } from 'react';
import styles from './register.module.scss'

export default function Register() {
    return (
        <div className={styles.container}>
            <div className={styles.close}>
                <button><img src="../assets/icon/Close 24px.png"/></button>
            </div>
            <div className={styles.joinitLogo}>
                <img src="../assets/icon/BG.png"/>
            </div>
            <div className={styles.title}>
                <p className={styles.subtitle}>會員註冊</p>
                <p className={styles.content}>所有會員註冊可享有一次的7天免費會員體驗，並指定會員卡相關產品</p>
                <p className={styles.content}>七天體驗後即自動取消會員體驗卡使用，請注意並保障您的權益。</p>
            </div>
            <div className={styles.registerForm}>
                {/* 姓名 */}
                <input type="text" placeholder='姓名 (必填)' className={styles.name}/>
                {/* 性別 */}
                <span className={styles.genderContainer}>
                <button className={styles.gender}><img src="../assets/icon/Sucess - Filled 20px.png"/>男性</button>
                <button className={styles.gender}><img src="../assets/icon/Sucess - Filled 20px.png"/>女性</button>
                </span>
                {/* 電話號碼 */}
                <span  className={styles.phonenumber}>
                <select>
                    <option value="+886">+886</option>
                </select>
                <input type="text" placeholder="手機號碼 (必填)"/>
                </span>
                {/* 信箱 */}
                <input type="text" placeholder='信箱 (必填)' className={styles.email}/>
                {/* 生日 */}
                <input type="date" placeholder='生日 (西元)' className={styles.birthday}/>
                {/* 推薦碼 */}
                <input type="text" placeholder='推薦碼' className={styles.inviteCode}/>
                {/* 密碼 */}
                <input type="password" placeholder='輸入密碼 (必填)' className={styles.password}/>
                {/* 確認密碼 */}
                <input type="password" placeholder='輸入密碼 (必填)' className={styles.password}/>
            </div>
            <div className={styles.checkbox}>
                <label>
                    <input type="checkbox"/>訂閱商店資訊及優惠方案
                </label>
                <label>
                    <input type="checkbox"/>同意
                    <a href="/">訂閱條款</a>、
                    <a href="/">隱私權保護政策</a>、
                    <a href="/">使用者條款</a>、
                    <a href="/">退換貨事項</a>、
                    <a href="/">訂房條款</a>
                </label>
            </div>
            <div className={styles.next}>
                <button>下一步</button>
            </div>
            <div className={styles.login}>
                <div className={styles.hasAccount}>
                    <p>已有帳號?<a href="/">請點此登入</a></p>                    
                </div>
                <div className={styles.borderLine}>
                    <p>或</p>
                </div>
                <div className={styles.linkAccount}>
                <img src="../assets/icon/Google 44px.png"/>
                <img src="../assets/icon/Facebook 44px.png"/>
                <img src="../assets/icon/Line 44px.png"/>
                </div>
            </div>
        </div>
    );
  };
  