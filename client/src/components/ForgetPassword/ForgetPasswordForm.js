import React, { useState, useEffect, useMemo, createRef} from 'react';
import { Link} from 'react-router-dom';
// import logo from '../assets/LogoTransparent.png';
// import TopMargin from '../assets/TopMargin.png';
// import rightContainerImage from '../assets/RightContainer.png';
import styles from './ForgetPasswordForm.module.css';

const ForgetPasswordForm = () => {
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [showVerification, setShowVerification] = useState(false);
  const [verificationCode, setVerificationCode] = useState(Array(6).fill(''));
  const [verificationErrors, setVerificationErrors] = useState(false);
  const [verifying, setVerifying] = useState(false);
  const [filledInputCount, setFilledInputCount] = useState(0);
  const [remainingTime, setRemainingTime] = useState(30);
  const verificationCodeInputRefs = useMemo(() => Array(6).fill().map(() =>createRef(null)),[]
  );

  const emailArrays = [
    ['pranavbhargava.1@gmail.com', 'Pranav'],
    ['admin1@example.com', 'Jane'],
    ['admin2@example.com', 'Doe'],
    ['admin3@example.com', 'Test'],
    ['admin4@example.com', 'User'],
  ];

  useEffect(() => {
    let interval = null;
    if (remainingTime > 0 && showVerification && !verifying) {
      interval = setInterval(() => {
        setRemainingTime((prevTime) => prevTime - 1);
      }, 1000);
    } 
    return () => {
      clearInterval(interval);
    };
  }, [remainingTime, showVerification, verifying]);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setErrorMessage('');
  };

  const handleVerificationCodeChange = (e, index) => {
    const value = e.target.value;
    const onlyDigits = /^\d*$/;

    if (onlyDigits.test(value)) {
      const updatedValue = [...verificationCode];
      updatedValue[index] = value;
      setVerificationCode(updatedValue);
      setFilledInputCount(updatedValue.filter((code) => code !== '').length);

      if (value.length === 1 && index < verificationCode.length - 1) {
        const nextIndex = index + 1;
        const nextInput = verificationCodeInputRefs[nextIndex].current;
        nextInput.focus();
      } else if (value.length === 0 && index > 0) {
        const prevIndex = index - 1;
        const prevInput = verificationCodeInputRefs[prevIndex].current;
        prevInput.focus();
      }
    } else {
      const updatedValue = [...verificationCode];
      updatedValue[index] = '';
      setVerificationCode(updatedValue);
    }

    setVerificationErrors(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    /*const matchedEmail = emailArrays.find(
      (arr) => arr[0] === email.trim().toLowerCase()
    );

    if (matchedEmail) {
      setShowVerification(true);
    } else {
      setErrorMessage('Invalid email address');
    }*/
    dispatch(sendOtp(email));
    setShowVerification(true);
  };

  const handleVerifyOTP = (e) => {
    e.preventDefault();

    const otp = verificationCode.join(''); 
    setVerifying(true);
    setTimeout(() => {
      try {
        // Dispatch the action to verify OTP
        dispatch(verifyOtp(email, otp));
        // The verification was successful, navigate to NewPasswordForm or display a success message.
        
      } catch (error) {
        // The verification failed, display the error message on the UI
        setVerificationError('OTP verification failed. Please try again.');
      } finally {
        setVerifying(false);
      }
    }, 2000); // Simulate a 2-second delay
  };

  const handleResendOTP = () => {
    console.log('Resending OTP');
    dispatch(sendOtp(email));
    setRemainingTime(30);
    setTimeout(() => {
    }, 30000);
  };

  const handleEditClick = () => {
    setShowVerification(false);
    setRemainingTime(30);
    window.location.reload();
  };

  const isInputComplete = filledInputCount === verificationCode.length;
  const minutes = Math.floor(remainingTime / 60).toString().padStart(2, '0');
  const seconds = (remainingTime % 60).toString().padStart(2, '0');
  const timerText = `${minutes}:${seconds}`;

  return (
    <div className={styles.pageContainer}>
      {/* <img src={TopMargin} alt="Top Margin" className={styles.topImage} /> */}
      <div className={styles.loginContainer}>
        <div className={styles.leftContainer}>
          <div className={styles.logoContainer}>
            {/* <img className={styles.logo} src={logo} alt="Logo" /> */}
          </div>
          {!showVerification ? (
            <>
              <h2 className={styles.heading}>Forgot Password</h2>
              <p className={styles.text}>
                Enter your email address to receive a password reset link.
              </p>
              <form className={styles.form} onSubmit={handleSubmit}>
                <input
                  className={styles.inputforget}
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={handleEmailChange}
                />
                {errorMessage && (
                  <div className={styles.errorMessage}>{errorMessage}</div>
                )}
                <button className={styles.button} type="submit">Reset Password</button>
              </form>
              <Link to="/" className={styles.linkButton}>
                Back to Login
              </Link>
            </>
          ) : (
            <>
              <h2 className={`${styles.heading} ${styles.bold}`}>
                Enter your verification code
              </h2>
              <p className={styles.text}>
                We have sent an OTP on <strong>{email}</strong>.{' '}
                <Link
                  to="/forgotPassword"
                  className={styles.linkButton}
                  onClick={handleEditClick}
                >
                  EDIT.
                </Link>
              </p>
              <form className={styles.form} onSubmit={handleVerifyOTP}>
                <div className={styles.otpContainer}>
                  {verificationCode.map((code, index) => (
                    <input
                      key={index}
                      ref={verificationCodeInputRefs[index]}
                      className={styles.input}
                      type="text"
                      maxLength={1}
                      value={code}
                      onChange={(e) => handleVerificationCodeChange(e, index)}
                    />
                  ))}
                </div>
                {verificationError && (
                  <div className={styles.errorMessage}>{verificationError}</div>
                )}
                {remainingTime===0 ? (
                <Link
                 to="#"
                 className={styles.linkButton}
                 onClick={handleResendOTP}
                 >
                  Resend OTP
                </Link>
                ) : (
                  <p className={styles.text}>
                    Receiving OTP in {timerText} sec
                  </p>
                )}
                {verifying ? (
                  <button className={styles.button} type="button" disabled>
                    Verifying...
                    <span className={styles.loader} />
                  </button>
                ) : (
                  <button className={styles.button} type="submit" disabled={!isInputComplete}>
                    Verify
                  </button>
                )}
              </form>
            </>
          )}
        </div>
        
      </div>
    </div>
  );
};

export default ForgetPasswordForm;
