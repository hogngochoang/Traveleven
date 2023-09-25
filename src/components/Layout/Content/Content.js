import styles from './Content.module.scss'
import Location from './Location/Location';
import Category from './Category/Category';
import classNames from 'classnames/bind';
import {FontAwesomeIcon}  from '@fortawesome/react-fontawesome';
import {faMagnifyingGlass,faCalendarDays,faUser } from '@fortawesome/free-solid-svg-icons'

const cx = classNames.bind(styles)

function Content() {
    return ( 
        
            <div className={cx('content-container')} >
                <div className={cx('heading')}>
                    <h1>Khám phá địa điểm du lịch</h1>
                </div>
                <div className={cx('search-container')}>
                    <FontAwesomeIcon className={cx('search')} icon={faMagnifyingGlass} />
                    <input placeholder='Tên điểm đến' />
                    <FontAwesomeIcon className={cx('calendar')} icon={faCalendarDays} />
                    <input placeholder='Thời gian khởi hành'/>
                    <FontAwesomeIcon className={cx('calendar')} icon={faCalendarDays} />
                    <input placeholder='Thời gian trở về'/>
                    <FontAwesomeIcon className={cx('user')} icon={faUser} />
                    <input placeholder='Số lượng người'/>
                    <button>Tìm kiếm</button>
                </div>
               <Category />
                <Location />
            </div>

     );
}

export default Content;