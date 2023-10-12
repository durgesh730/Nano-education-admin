import React from 'react'
import { AiOutlineUndo } from 'react-icons/ai';
import Divider from '@mui/material/Divider';
import styles from './MorePhotos.module.css'
import pic1 from '../images/ph1.png'
import pic2 from '../images/ph2.png'
import pic3 from '../images/ph3.png'
import pic4 from '../images/ph4.png'
import pic5 from '../images/ph5.png'
import pic6 from '../images/ph6.png'
import pic7 from '../images/ph7.png'
import pic8 from '../images/ph8.png'
import pic9 from '../images/ph9.png'

const MorePhotos = ({ setActive }) => {

    const handleUndoClick = () => {
        // Handle Undo button click action here
        setActive("ProfileDetails")
    };

    const handleSingleImg = () => {
        setActive("Single")
    }

    return (
        <>

            <div className={styles.photosection} >
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

                <Divider sx={{my:2}} />

                <div className={styles.ninephotos} >
                    <img onClick={handleSingleImg} src={pic1} alt='photos-img' />
                    <img onClick={handleSingleImg} src={pic2} alt='photos-img' />
                    <img onClick={handleSingleImg} src={pic3} alt='photos-img' />
                    <img onClick={handleSingleImg} src={pic4} alt='photos-img' />
                    <img onClick={handleSingleImg} src={pic5} alt='photos-img' />
                    <img onClick={handleSingleImg} src={pic6} alt='photos-img' />
                    <img onClick={handleSingleImg} src={pic7} alt='photos-img' />
                    <img onClick={handleSingleImg} src={pic8} alt='photos-img' />
                    <img onClick={handleSingleImg} src={pic9} alt='photos-img' />
                </div>
            </div>
        </>
    )
}

export default MorePhotos
