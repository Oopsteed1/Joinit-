// register/tsx
'use client';
import React, { ChangeEvent, useState } from 'react';
import styles from './register.module.scss'
import Image from 'next/image';
import closeIcon from '../../public/assets/icon/Close.png';
import successIcon from '../../public/assets/icon/Sucess.png';
import successRedIcon from '../../public/assets/icon/SucessRed.png';
import joinitLogo from '../../public/assets/icon/BG.png';
import facebookIcon from '../../public/assets/icon/Facebook.png';
import googleIcon from '../../public/assets/icon/Google.png';
import lineIcon from '../../public/assets/icon/Line.png';


export default function Register() {
    const options = [
        { value: "+886", label: "+886" },
        { value: "+81", label: "+81" },
        { value: "+82", label: "+82" },
        { value: "+852", label: "+852" }
    ]
    const [isMaleRed, setIsMaleRed] = useState(false);
    const [isFemaleRed, setIsFemaleRed] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [inviteCode, setInviteCode] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [subscribeChecked, setSubscribeChecked] = useState(false);
    const [agreeChecked, setAgreeChecked] = useState(false);
    const isNextBtnDisabled = !(subscribeChecked && agreeChecked);

    const handleNextBtnClick = () => {
        console.log('Next button clicked!');
      };

    const handleSubscribeChange = () => {
        setSubscribeChecked(!subscribeChecked);
      };
    
      const handleAgreeChange = () => {
        setAgreeChecked(!agreeChecked);
      };

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>, setValue: React.Dispatch<React.SetStateAction<string>>) => {
        setValue(event.target.value);
      };
    
      const clearInput = (setValue: React.Dispatch<React.SetStateAction<string>>) => {
        setValue('');
      };
      
    const handleMaleButtonClick = () => {
        setIsMaleRed(true);
        setIsFemaleRed(false); 
      };
      
      const handleFemaleButtonClick = () => {
        setIsMaleRed(false); 
        setIsFemaleRed(true);
      };
    return (
        <div className={styles.container}>
            <div className={styles.close}>
                <button><Image src={closeIcon} alt="close" /></button>
            </div>
            <div className={styles.joinitLogo}>
                <Image src={joinitLogo} alt='joinitLogo'/>
            </div>
            <div className={styles.title}>
                <p className={styles.subtitle}>會員註冊</p>
                <p className={styles.content}>所有會員註冊可享有一次的7天免費會員體驗，並指定會員卡相關產品</p>
                <p className={styles.content}>七天體驗後即自動取消會員體驗卡使用，請注意並保障您的權益。</p>
            </div>
            <div className={styles.registerForm}>
                {/* 姓名 */}
                <div className={styles.textContainer}>
                    <input type="text" placeholder='姓名（必填）' className={styles.name}  value={name} onChange={(event) => handleInputChange(event, setName)}/>
                    {name && (
                        <span className={styles.clearButton} onClick={() => clearInput(setName)}>
                        <button><Image src={closeIcon} alt="close" className={styles.close}/></button>
                        </span>
                    )}
                </div>
                {/* 性別 */}
                <span className={styles.genderContainer}>
                <button className={`${styles.gender} ${isMaleRed && styles.red}`} onClick={handleMaleButtonClick}>
                    <Image src={isMaleRed ? successRedIcon : successIcon} alt="successIcon" />
                    <p>男性</p>
                </button>
                <button className={`${styles.gender} ${isFemaleRed && styles.red}`} onClick={handleFemaleButtonClick}>
                    <Image src={isFemaleRed ? successRedIcon : successIcon} alt="successIcon" />
                    <p>女性</p>
                </button>
                </span>
                {/* 電話號碼 */}
                <span  className={styles.phonenumber}>
                <select className={styles.selectCountry}>
                    {options.map((option) => (
                    <option key={option.value} value={option.value} data-country-code={option.label} className={styles.countryCode}>
                        {option.label}
                    </option>
                    ))}
                 </select>
                <input type="text" placeholder="手機號碼 (必填)" value={phoneNumber} onChange={(event) => handleInputChange(event, setPhoneNumber)}/>
                {phoneNumber && (
                    <span className={styles.clearButton} onClick={() => clearInput(setPhoneNumber)}>
                    <button><Image src={closeIcon} alt="close" className={styles.close}/></button>
                    </span>
                )}
                </span>
                {/* 信箱 */}
                <div className={styles.textContainer}>
                <input type="text" placeholder='信箱（必填）' className={styles.email} value={email} onChange={(event) => handleInputChange(event, setEmail)}/>
                {email && (
                    <span className={styles.clearButton} onClick={() => clearInput(setEmail)}>
                    <button><Image src={closeIcon} alt="close" className={styles.close}/></button>
                    </span>
                )}
                </div>
                {/* 生日 */}
                <input type="date" placeholder='生日（西元）' className={styles.birthday}/>
                {/* 推薦碼 */}
                <div className={styles.textContainer}>
                <input type="text" placeholder='推薦碼' className={styles.inviteCode} value={inviteCode} onChange={(event) => handleInputChange(event, setInviteCode)}/>
                {inviteCode && (
                    <span className={styles.clearButton} onClick={() => clearInput(setInviteCode)}>
                    <button><Image src={closeIcon} alt="close" className={styles.close}/></button>
                    </span>
                )}
                </div>
                {/* 密碼 */}
                <input type="password" placeholder='輸入密碼（必填）' className={styles.password}/>
                {/* 確認密碼 */} 
                <input type="password" placeholder='再次輸入密碼（必填）' className={styles.password}/>
            </div>
            <div className={styles.checkbox}>
            <label className={styles.checkboxLabel}>
                <span className={styles.inputCheckboxContainer}>
                    <input type="checkbox" className={styles.inputCheckbox} checked={subscribeChecked} onChange={handleSubscribeChange}/>
                    <div className={styles.checkboxIcon}></div>
                    <p>訂閱商店資訊及優惠方案</p>
                </span>
            </label>

                <label className={styles.checkboxLabel}>
                <span className={styles.inputCheckboxContainer}>
                    <input type="checkbox" className={styles.inputCheckbox} checked={agreeChecked} onChange={handleAgreeChange}/>
                    <div className={styles.checkboxIcon}></div>
                    <p>同意</p>
                </span>
                    <a href="/" className={styles.link1}>訂閱條款</a>
                    <a href="/" className={styles.link2}>隱私權保護政策</a>
                    <a href="/" className={styles.link3}>使用者條款</a>
                    <a href="/" className={styles.link4}>退換貨事項</a>
                    <a href="/" className={styles.link5}>訂房條款</a>
                </label>
            </div>
            <div className={styles.next}>
                <button className={`${styles.nextBtn} ${isNextBtnDisabled ? '' : styles.disabledBtn}`}  onClick={handleNextBtnClick} disabled={isNextBtnDisabled}>下一步</button>
            </div>
            <div className={styles.login}>
                <div className={styles.hasAccount}>
                    <p className={styles.loginWithAcc}>已有帳號？<a href="/" className={styles.loginLink}>請點此登入</a></p>                    
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
    );
  };
  