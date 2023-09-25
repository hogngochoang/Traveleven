import styles from './Category.module.scss'
import classNames from 'classnames/bind';

const cx = classNames.bind(styles)

function Category() {
    return ( 
        <div className={cx('category-container')}>
            
                <h2>Danh mục hàng đầu </h2>
            
            <div className={cx('category')}>
                <span>
                    <img src='./images/beach.svg' />
                    <a>Bãi biển</a>
                </span>
                <span className={cx()}>
                    <img src='./images/mountain.svg' />
                    <a>Núi</a>
                </span>
                <span>
                    <img src='./images/city.svg' />
                    <a>Thành phố</a>
                </span>
                <span>
                    <img src='./images/camping.svg' />
                    <a>Cắm trại</a>
                </span>
                <span>
                    <img src='./images/snow.svg' />
                    <a>Trượt tuyết</a>
                </span>
                <span>
                    <img src='./images/tropical.svg' />
                    <a>Nhiệt đới</a>
                </span>
                
                
            </div>
            

        </div>

     );
}

export default Category;