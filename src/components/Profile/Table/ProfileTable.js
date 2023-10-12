import React from 'react'
import Seachbar from "../Search/Seachbar";
import styles from './ProfileTable.module.css'
import { useState } from "react";
import pic from '../images/Overlay Icons.svg'
import Divider from '@mui/material/Divider';
import { IoIosArrowDown } from 'react-icons/io';
import PTable from './Table';

const ProfileTable = ({ setActive }) => {

    const [age, setAge] = useState('Exports as');
    const handleChange = (num) => {
        if (num === 1) {
            setAge("PDF")
        } else if (num === 2) {
            setAge("Excels")
        }
    }

    const [gender, setGender] = useState('Gender');
    const handleChangeGender = (num) => {
        if (num === 1) {
            setGender("Male")
        } else if (num === 2) {
            setGender("Female")
        }
    }

    return (
        <>
            <div className={styles.position} >
                <div className={styles.profilesec} >
                    <div className={styles.searchfilter} >
                        <Seachbar />
                        <div className={styles.dropdown}>
                            <button className={styles.dropbtn}>{gender}  <IoIosArrowDown className={styles.dropicons} /> </button>
                            <div id='dropdown' className={styles.dropdowncontent}>
                                <a onClick={() => handleChangeGender(1)} href="#">Male</a>
                                <a onClick={() => handleChangeGender(2)} href="#">Female</a>
                            </div>
                        </div>
                    </div>

                    <div className={styles.exports}>
                        <div className={styles.dropdown}>
                            <button className={styles.dropbtn}>{age}  <IoIosArrowDown className={styles.dropicons} /> </button>
                            <div id='dropdown' className={styles.dropdowncontent}>
                                <a onClick={() => handleChange(1)} href="#">PDF</a>
                                <a onClick={() => handleChange(2)} href="#">Excels</a>
                            </div>
                        </div>
                        <div><img src={pic} ></img> </div>
                    </div>
                </div>
                <Divider sx={{ my: 2 }} />

                <div className={styles.widthtable} >
                    <div className={styles.foroverflow} >
                        <PTable setActive={setActive} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProfileTable