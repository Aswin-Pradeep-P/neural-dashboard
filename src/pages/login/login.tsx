import { ChangeEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import FormInput from '../../components/form-input/formInput';
import logo from '../../assets/logo.svg';
import Button from '../../components/button/button';
import LoginImg from '../../assets/login-img.jpg';
import SignupImg from '../../assets/signup-img.jpg';
import GoogleImg from '../../assets/google_sign_in.svg';

import styles from './login.module.scss';

const Login = ({type}: {type: string}) => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({});
    const btnText = type === 'login' ? 'Login': 'Signup';
    
    const handleChange = (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>, key: string) => {
      setFormData({
        ...formData,
        [key]: e.target.value
      });
    }

    const handleLogin = () => {
      console.log(formData);
    }

    const handlePageSwitch = () => {
      if (type === 'login') {
        navigate('/signup');
      } else {
        navigate('/login');
      }
    }
  
    return (
      <div className={styles.loginOverlay} >
      <div className={styles.loginWrapper}>
        <div className={styles.loginHeader}>
          <img src={logo} alt="logo" />
          <Button onClick={handlePageSwitch} label={type === 'login' ? 'Signup': 'Login'} />
        </div>
        <div className={styles.formWrapper}>
          <div className={styles.leftSection} style={{ backgroundImage: `url(${type === 'login' ? LoginImg : SignupImg})` }}/>
          <div className={styles.rightSection}>
            <div className={styles.textContents}>
              <h1>{btnText}</h1>
              <p>Unlock your world.</p>
            </div>
            <FormInput label="Username" placeholder="Enter username" type="text" onChange={(e) => handleChange(e, 'Username')}/>
            {type === 'signup' && (
              <FormInput label="Email" placeholder="Enter email" type="email" onChange={(e) => handleChange(e, 'Email')}/>
            )}
            <FormInput label="Password" placeholder="Enter password" type="password" onChange={(e) => handleChange(e, 'Password')}/>
            {type === 'signup' && (
              <FormInput label="Confirm Password" placeholder="Enter password" type="password" onChange={(e) => handleChange(e, 'Confirm Password')}/>
            )}
            <div className={styles.btnWrapper}>
              <p className={styles.fpass}>Forgot password?</p>
              <Button containerClass={styles.loginBtn} onClick={handleLogin} label={btnText} />
              <span className={styles.googleLogin}>
              <img src={GoogleImg} alt="GoogleImg" />
              Sign in with Google
              </span>
            </div>
          </div>
        </div>
      </div>
      </div>
    );
}

export default Login;