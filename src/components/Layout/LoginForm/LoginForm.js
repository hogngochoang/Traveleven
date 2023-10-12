import styles from './LoginForm.module.scss'
import classNames from 'classnames/bind';
import logo from '~/assets/logo';
import { loginAPI } from '~/services/LoginService';
import { Slide, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useContext, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import routes from "../../../config/routes";
import { UserContext } from '~/UserContext';

const cx = classNames.bind(styles)

function LoginForm() {
    const[email, setEmail] = useState('')
    const[password, setPassword] = useState('')
    const navigate = useNavigate();
    const {login} = useContext(UserContext);

    const handleLogin = async() => {
        if(!email || !password) {
            toast.error('Email/Password is required!')
        }

        let res = await loginAPI(email, password);
        if(res && res.token) {
            login(email, res.token);
            navigate(routes.home);
        } else {
            if(res && res.status === 400) {
                toast.error(res.data.error);
            }
        }
    }

    return ( 
        <div className={cx('form-container')}>
            <div className={cx('btn-container')}>
                <button className={cx('login-tab')}>Đăng nhập</button>
                <button className={cx('register-tab')}>Đăng ký</button>
            </div>

            <h2>Đăng nhập</h2>

            <div className={cx('info-container')}>
                <label>Địa chỉ email hoặc tên tài khoản</label>
                <input type='email' value={email} onChange={e => setEmail(e.target.value)} />
                <label> Mật khẩu</label>
                <input type='password' value={password} onChange={e => setPassword(e.target.value)}/>
            </div>

            <div className={cx('submit-container')}>
                <input type='checkbox' id='remember-login' /> 
                <label id='remember-login'>Ghi nhớ đăng nhập</label>
                <a>Quên mật khẩu?</a>
            </div>

            <button 
                type='submit' 
                className={cx('btn-submit')}
                onClick={() => handleLogin()}
            > Đăng nhập
            </button>

            <h3>Hoặc đăng nhập với</h3>

            <div>
                <button className={cx('btn-google')}>
                    <img src={logo.google} style={{marginRight:10 , marginTop:2}} />
                    Google
                </button>
            </div>

            <Link className={cx('btn-back')} to={routes.home}> Quay về trang chủ</Link>


            <ToastContainer 
                position="top-center"
                autoClose={3000}
            />
            
        </div>
     );
}

export default LoginForm;