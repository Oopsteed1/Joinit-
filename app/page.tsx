'use client';
import React from 'react';
import Register from "@/component/register/register";
import styles from './page.module.scss';
import MobileRegister from "@/component/mobileRegister/mobileRegister"
import RegisterSuccess from '@/component/registerSuccess/registerSuccess';
import Login from '@/component/login/login'
import LoginSuccess from '@/component/loginSuccess/loginSuccess'
import ForgotPassword from '@/component/forgotPassword/forgotPassword'
export default function Home() {
  return (
    <>
      <div className={styles.header}>header</div>
      {/* 會員註冊的Componen (完成) */}
      {/* <Register></Register> */}
      {/* 手機註冊 (完成) */}
      {/* <MobileRegister></MobileRegister> */}
      {/* 註冊成功 (完成)*/}
      {/* <RegisterSuccess></RegisterSuccess> */}
      {/* 登入 (完成) */}
      {/* <Login></Login> */}
      {/* 登入成功 (完成) */}
      {/* <LoginSuccess></LoginSuccess> */}
      {/* 忘記密碼 */}
      <ForgotPassword></ForgotPassword>
      <div className={styles.footer}>footer</div>
    </>
  )
}
