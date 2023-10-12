import React from 'react'
import pic from '../images/ph1.png'
import styles from './Single.module.css'
import { AiOutlineUndo } from 'react-icons/ai';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { FiDownload } from 'react-icons/fi';
import Divider from '@mui/material/Divider';

const Single = ({ setActive }) => {

    const handleUndoClick = () => {
        // Handle Undo button click action here
        setActive("MorePhotos")
    };

    return (
        <>
            <div className={styles.singleComp} >
                <div className={styles.textbtnboth}>
                    <div >
                        <span className={styles.textheadCom}>Photos</span>
                    </div>

                    <div className={styles.bothbtn} >
                        <button className={styles.undoButton} onClick={handleUndoClick}>
                            Back
                            <AiOutlineUndo className={styles.buttonIcon} />
                        </button>
                    </div>
                </div>

                <Divider sx={{ my: 2 }} />

                <div className={styles.singlePhotos} >
                    <img src={pic} alt='single-photos' />
                    <div className={styles.singlePageIcons} >
                        <RiDeleteBin6Line className={styles.deletebtn} />
                        <FiDownload className={styles.FiDownload} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Single
