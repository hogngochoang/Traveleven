import styles from './Location.module.scss'
import classNames from 'classnames/bind';


const cx = classNames.bind(styles)

function Location() {
    return ( 
            <div className={cx('location-container')}>
                <h2>Địa điểm nổi bật</h2>
                <div className={cx('location')}>
                    <h3 className={cx('bali')}> Bali, Indonesia </h3>
                    <h3 className={cx('kerry')}> Kerry, Ireland </h3>
                    <h3 className={cx('sydney')}> Sydney, Australia </h3>
                    <h3 className={cx('paris')}> Paris, France </h3>
                </div>
            </div>
     );
}

export default Location;