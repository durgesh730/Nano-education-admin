import React, { useState } from 'react';
import styles from './UserAccount.module.css';
import avatar from '../assets/profileImage.png'

const UserAccount = () =>{
    return(<>
    <div className={styles.userAccount}>
        <div className={styles.accountInfo}>
            <img src={avatar} alt="profile"  className={styles.avatar}/>
            <div className={styles.info}>
                <span className={styles.userName}>Austin Robertson</span> <br/>
                <span className={styles.userRole}>Marketing Administrator</span><br/>
                <span className={styles.userEmail}>Austin@wedsIn.com</span> 
            </div>
        </div>
        <div className={styles.updateUser}>
            <div className={styles.updateUserInner}>
                <div className={styles.updateUserHeader}>
                    <span className={styles.accountTxt}>Account</span>
                    <span className={styles.changeTxt}>You can change your personal details</span>
                </div>
                <div className={styles.updateUserBody}>
                    <div className={styles.form}>
                        <span className={styles.formTxt}>First name</span>
                        <input type="text" name="" value="" className={styles.input}/>
                    </div>
                    <div className={styles.form}>
                        <span className={styles.formTxt}>Last name</span>
                        <input type="text" name="" value="" className={styles.input}/>
                    </div>
                    <div className={styles.form}>
                        <span className={styles.formTxt}>Role</span>
                        <input type="text" name="" value="" className={styles.input}/>
                    </div>
                    <div className={styles.form}>
                        <span className={styles.formTxt}>Email</span>
                        <input type="text" name="" value="" className={styles.input}/>
                    </div>
                    <div className={styles.form}>
                        <span className={styles.formTxt}>Phone Number</span>
                        <input type="text" name="" value="" className={styles.input}/>
                    </div>
                    <div className={styles.formbtn}>
                        <button type="" className={styles.changePasswordBtn}>Change Password</button>
                        <button type="" className= {styles.logOutBtn}>Log Out</button>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
    </>)
}
export default UserAccount;