import React, { useState, useEffect } from 'react';
import styles from './Header.module.css';
import useIsMobile from '@/hooks/useIsMobile';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';

export default function Main({ login }) {
  const isMobile = useIsMobile();
  const router = useRouter();
  const walletAddress = useSelector((state: any) => state.wallet.address);
  const walletNewWork = useSelector((state: any) => state.wallet.network);
  const [active,setActive] = useState("home")
  const nav  =(params)=>{
    sessionStorage.setItem("nav",params)
    router.push(params);
    setActive(params)
  }
  return (
  <div>
      {/* <div>
      {walletAddress ? (
        <p>钱包地址: {walletAddress}</p>
      ) : (
        <p>钱包未连接</p>
      )}
    </div>
    <div>
      {walletAddress ? (
        <p>网络地址: {walletNewWork}</p>
      ) : (
        <p>钱包未连接</p>
      )}
    </div> */}

      <div className={`${styles.flex} ${styles.ane} ${styles.jus} ${styles.padd30}`}>
            <div><img style={{ width: '50%' }} src='/assets/img/1.png' /></div>
            <div className={`${styles.flex} ${styles.ane} ${styles.jus}`}>
                <ul className={`${styles.cf} ${styles.flex} ${styles.ane} ${styles.hdli}`}>
                    <li className={`${styles.active} ${styles.padd15}`}>HOME</li>
                    <li className={`${styles.padd15}`} onClick={login}>Connect Wallet</li>
                    <li className={`${styles.padd15}`}>SPORTAL</li>
                    <li className={`${styles.padd15}`}>DEVELOPERS</li>
                    <li className={`${styles.padd15}`} onClick={()=>nav('user')} >User Home</li>
                </ul>
            </div>
        </div>

{/* 
<div className={`${styles.flex} ${styles.ane} ${styles.jus} ${styles.padd30}`}>
    <div>
      <img className={styles.headLogo} src='/assets/images/logo.png'/>
    </div>
    <div className={`${styles.flex} ${styles.ane} ${styles.jus}`}>
        <a href='#'>
            {!isMobile && <div className={styles.follow}  onClick={login}>Follow us</div>}
            {!isMobile && <img src='/assets/images/3.png' style={{width:'100px',height:'32px'}}/>}
            {isMobile && <img src='/assets/images/H5menu.png' style={{width:'40px',height:'40px'}}/>}
        </a>
    </div>
</div> */}

    </div>
  );
}
