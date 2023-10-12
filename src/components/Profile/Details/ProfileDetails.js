import React from 'react'
import { AiOutlineUndo } from 'react-icons/ai';
import styles from './Details.module.css'
import Divider from '@mui/material/Divider';
import pic from '../images/Rectangle 4389.png'
import { CiImageOn } from 'react-icons/ci';
import { FiMail } from 'react-icons/fi'
import { BsPhone } from 'react-icons/bs'
import { MdWoman2, MdDateRange, MdOutlineLocationOn, MdIceSkating, MdOutlineMovieCreation } from 'react-icons/md'
import { PiArrowsVerticalLight } from 'react-icons/pi'
import { BsGenderFemale } from 'react-icons/bs'
import { RxDividerVertical } from 'react-icons/rx'
import { GiCricketBat } from 'react-icons/gi'
import {AiOutlineUsergroupAdd } from 'react-icons/ai'
import pic2 from '../images/family.png'
import pic3 from '../images/Group 33518.png'
import pic4 from '../images/Rectangle 115 (1).png'
import pic5 from '../images/Rectangle 115.png'
import pic6 from '../images/Frame 33591.png'

const ProfileDetails = ({ setActive }) => {

    const handleUndoClick = () => {
        // Handle Undo button click action here
        setActive("ProfileTable")
    };


    const handleMore = () => {
        setActive("MorePhotos")
    }

    return (
        <>
            <div className={styles.detailsComponent}>
                <div className={styles.floatbtn} >
                    <button className={styles.undoButton} onClick={handleUndoClick}>
                        Back
                        <AiOutlineUndo className={styles.buttonIcon} />
                    </button>
                </div>

                <div>
                    <Divider sx={{ my: 2 }} />
                </div>

                <div className={styles.profileSections} >
                    <section style={{margin:"auto"}} >
                        <div className={styles.detailsImg} >
                            <img src={pic} alt='profile-details-img' />
                        </div>

                        <div className={styles.personalDetails} >
                            <div className={styles.personalheading}>
                                <span>Personal Details</span>
                            </div>
                            <div>
                                <CiImageOn className={styles.personalIcons} />
                                <span>Aubery Lim</span>
                            </div>
                            <div className={styles.personalSub} >
                                <FiMail className={styles.personalIcons} />
                                <span>durgesh@wedsin.com</span>
                            </div>
                            <div className={styles.personalSub} >
                                <BsPhone className={styles.personalIcons} />
                                <span>+91 9876543210</span>
                            </div>
                            <div className={styles.personalSub} >
                                <MdWoman2 className={styles.personalIcons} />
                                <span>Single</span>
                            </div>
                            <div className={styles.personalSub} >
                                <PiArrowsVerticalLight className={styles.personalIcons} />
                                <span>5'2"</span>
                            </div>
                            <div className={styles.personalSub} >
                                <BsGenderFemale className={styles.personalIcons} />
                                <span>Female</span>
                            </div>
                            <div className={styles.personalSub} >
                                <MdDateRange className={styles.personalIcons} />
                                <span>02/01/2002</span>
                            </div>
                            <div className={styles.personalSub} >
                                <MdOutlineLocationOn className={styles.personalIcons} />
                                <span>Bangalore, Karnataka, India</span>
                            </div>
                        </div>

                        <div className={styles.demographicsCss} >
                            <div className={styles.demographicsHeading} >
                                <span>Demographics</span>
                            </div>
                            <div>
                                <CiImageOn className={styles.personalIcons} />
                                <span>Hindi</span>
                            </div>
                            <div className={styles.personalSub}  >
                                <CiImageOn className={styles.personalIcons} />
                                <span>Want to have someday</span>
                            </div>
                            <div className={styles.personalSub}  >
                                <CiImageOn className={styles.personalIcons} />
                                <span>None</span>
                            </div>
                            <div className={styles.personalSub}  >
                                <CiImageOn className={styles.personalIcons} />
                                <span>Living with parents</span>
                            </div>
                            <div className={styles.personalSub}  >
                                <CiImageOn className={styles.personalIcons} />
                                <span>Maybe Someday</span>
                            </div>
                        </div>

                        <div className={styles.BioCss} >
                            <div className={styles.bioheading} >
                                <span>Bio</span>
                            </div>
                            <div className={styles.biopara} >
                                <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                            </div>
                        </div>

                    </section>

                    <section>
                        <div className={styles.FavInterest} >
                            <div className={styles.PavInterestheading} >
                                <span>Favourites and Interests</span>
                            </div>

                            <div className={styles.favInt}>
                                <div className={styles.IconsIntereset} >
                                    <MdIceSkating className={styles.OnlyIconsInterest} />
                                    <span>Skating</span>
                                </div>
                                <div>
                                    <RxDividerVertical />
                                </div>
                                <div className={styles.IconsIntereset} >
                                    <MdOutlineMovieCreation className={styles.OnlyIconsInterest} />
                                    <span> Movies </span>
                                </div>
                                <div>
                                    <RxDividerVertical />
                                </div>

                                <div className={styles.IconsIntereset} >
                                    <GiCricketBat className={styles.OnlyIconsInterest} />
                                    <span>  Badminton  </span>
                                </div>
                            </div>

                            <div className={styles.favInt}>
                                <div className={styles.IconsIntereset} >
                                    <MdIceSkating className={styles.OnlyIconsInterest} />
                                    <span>Running</span>
                                </div>

                                <div>
                                    <RxDividerVertical />
                                </div>

                                <div className={styles.IconsIntereset} >
                                    <MdOutlineMovieCreation className={styles.OnlyIconsInterest} />
                                    <span>Basketball</span>
                                </div>

                                <div>
                                    <RxDividerVertical />
                                </div>

                                <div className={styles.IconsIntereset} >
                                    <GiCricketBat />
                                    <span>Sufring</span>
                                </div>
                            </div>
                        </div>


                        <div className={styles.habitslife} >
                            <div className={styles.PavInterestheading} >
                                <span>Habits and Lifestyle</span>
                            </div>

                            <div className={styles.favInt}>
                                <div className={styles.IconsIntereset} >
                                    <MdIceSkating className={styles.OnlyIconsInterest} />
                                    <span>Occasinally</span>
                                </div>
                                <div>
                                    <RxDividerVertical />
                                </div>
                                <div className={styles.IconsIntereset} >
                                    <MdOutlineMovieCreation className={styles.OnlyIconsInterest} />
                                    <span> Occasinally </span>
                                </div>
                                <div>
                                    <RxDividerVertical />
                                </div>

                                <div className={styles.IconsIntereset} >
                                    <GiCricketBat className={styles.OnlyIconsInterest} />
                                    <span> No </span>
                                </div>
                            </div>

                            <div className={styles.favInt}>
                                <div className={styles.habitslifeflex} >
                                    <MdIceSkating className={styles.OnlyIconsInterest} />
                                    <span>Non Vegetarian</span>
                                </div>
                            </div>
                        </div>

                        <div className={styles.CareerEducation} >
                            <div className={styles.demographicsHeading} >
                                <span>Career and Education</span>
                            </div>
                            <div>
                                <CiImageOn className={styles.personalIcons} />
                                <span>Phd</span>
                            </div>
                            <div className={styles.personalSub}  >
                                <CiImageOn className={styles.personalIcons} />
                                <span>Government Job</span>
                            </div>
                            <div className={styles.personalSub}  >
                                <CiImageOn className={styles.personalIcons} />
                                <span>2-4LPA</span>
                            </div>
                            <div className={styles.personalSub}  >
                                <CiImageOn className={styles.personalIcons} />
                                <span>LinkdIn profile</span>
                            </div>
                        </div>

                        <div className={styles.familyDetails} >
                            <div className={styles.familyDetailsheading} >
                                <span>Family Details</span>
                            </div>

                            <div className={styles.biopara}  >
                                <p>Ours is a  middle class family, originally from UP, with traditional values. His father is employed and his mother is a homemaker. He has 3 Brothers (none married)</p>
                            </div>

                            <div className={styles.Occupation} >
                                <div>
                                    <small>Father's Occupation</small><br />
                                    <span>Businessmen</span>
                                </div>
                                <div>
                                    <small>Mother's Occupation</small><br />
                                    <span>Home  Maker</span>
                                </div>
                            </div>

                            <div className={styles.income} >
                                <div>
                                    <small>Family annual income</small><br />
                                    <span>20-30LPA</span>
                                </div>
                                <div>
                                    <small>Ummarried Siblings</small><br />
                                    <span>3</span>
                                </div>
                            </div>

                            <div className={styles.familyImg} >
                                <img src={pic2} alt='family-image' />
                            </div>
                        </div>
                    </section>

                    <section>
                        <div className={styles.hobbies} >
                            <div className={styles.hobbiesheading} >
                                <span>Hobbies</span>
                            </div>
                            <div className={styles.hobbiesImg} >
                                <img src={pic3} alt='hobbies-img' />
                            </div>
                        </div>

                        <div className={styles.photos} >
                            <div className={styles.photosheading} >
                                <span>Photos</span>
                            </div>
                            <div className={styles.photosImg} >
                                <img src={pic4} alt='hobbies-img' />
                                <img src={pic5} alt='hobbies-img' />
                                <img src={pic6} alt='hobbies-img' />
                            </div>

                            <div className={styles.editonfobtn} >
                                <small onClick={handleMore} >Edit, reorder or add more photos to your profile</small>
                            </div>
                        </div>

                        <div className={styles.partner} >
                            <div className={styles.partnerheading} >
                                <span>Partner Preferences</span>
                            </div>

                            <div>
                                <BsGenderFemale className={styles.personalIcons} />
                                <span>Female</span>
                            </div>
                            <div className={styles.partnerdetails} >
                                <PiArrowsVerticalLight className={styles.personalIcons} />
                                <span>5'2"</span>
                            </div>
                            <div className={styles.partnerdetails} >
                                <PiArrowsVerticalLight className={styles.personalIcons} />
                                <span>8-12LPA</span>
                            </div>
                            <div className={styles.partnerdetails} >
                                <MdDateRange className={styles.personalIcons} />
                                <span>28-32</span>
                            </div>
                            <div className={styles.partnerdetails} >
                                <MdDateRange className={styles.personalIcons} />
                                <span>Hindu</span>
                            </div>
                            <div className={styles.partnerdetails} >
                                <AiOutlineUsergroupAdd className={styles.personalIcons} />
                                <span>Brahmin</span>
                            </div>
                            <div className={styles.partnerdetails} >
                                <AiOutlineUsergroupAdd className={styles.personalIcons} />
                                <span>Hindi</span>
                            </div>
                            <div className={styles.partnerdetails} >
                                <AiOutlineUsergroupAdd className={styles.personalIcons} />
                                <span>Maybe Someday</span>
                            </div>
                        </div>
                    </section>
                </div>
            </div>

        </>
    )
}

export default ProfileDetails
