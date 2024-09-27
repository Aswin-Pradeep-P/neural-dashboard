import { ChangeEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import FormInput from '../../components/form-input/formInput';
import logo from '../../assets/logo.svg';
import Button from '../../components/button/button';
import LoginImg from '../../assets/login-img.jpg';

import styles from './login.module.scss';

const Login = ({type}: {type: string}) => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({});
    
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
          <div className={styles.leftSection}>
            <img src={LoginImg} alt="LoginImg" />
          </div>
          <div className={styles.rightSection}>
            <FormInput label="Username" placeholder="Enter username" type="text" onChange={(e) => handleChange(e, 'Username')}/>
            <FormInput label="Password" placeholder="Enter password" type="password" onChange={(e) => handleChange(e, 'Password')}/>
            <Button containerClass={styles.loginBtn} onClick={handleLogin} label={type === 'login' ? 'Login': 'Signup'} />
          </div>
        </div>
      </div>
      </div>
    );
}

export default Login;