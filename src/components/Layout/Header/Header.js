import styles from './Header.module.scss'
import classNames from 'classnames/bind';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '~/UserContext';
import routes from '~/config/routes';

const cx = classNames.bind(styles)

function Header() {
    const {user, logout} = useContext(UserContext)

    return ( 
        <header className={cx('header-container')} >
            <h2>Traveleven</h2>
            <div className={cx('menu-container')}>
                {(user && user.auth && window.location.pathname === routes.home) &&
                    <> 
                    <Link to={routes.home}>Trang chủ</Link>
                    <a href=''>Đặt tour</a>
                    <a href=''>Tài khoản</a>
                    <Link onClick={() => logout()}>Đăng xuất</Link> 
                    </> 
                }

                {(user && user.auth === false && window.location.pathname === routes.home) &&
                    <> 
                    <Link to={routes.home}>Trang chủ</Link>
                    <a href=''>Đặt tour</a>
                    <a href=''>Tài khoản</a>
                    <Link to={routes.login}>Đăng nhập</Link> 
                    </> 
                }
                
                
            </div>
        </header>
     );
}

export default Header;